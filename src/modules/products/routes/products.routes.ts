import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', isAuthenticated, productsController.index);

productsRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      idProduct: Joi.string().uuid().required(),
    },
  }),
  productsController.show,
);

productsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required(),
      user_id: Joi.string().required(),
    },
  }),
  productsController.create,
);

productsRouter.post(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required(),
    },
    [Segments.QUERY]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsController.showProductUserId,
);

productsRouter.put(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: Joi.object()
      .keys({
        name: Joi.string().required(),
        price: Joi.number().precision(2).required(),
        quantity: Joi.number().required(),
      })
      .unknown(),
    [Segments.QUERY]: {
      idProduct: Joi.string().uuid().required(),
    },
  }),
  productsController.update,
);

productsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsController.delete,
);

productsRouter.get(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.QUERY]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsController.showProductUserId,
);

export default productsRouter;
