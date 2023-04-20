import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import OrdersController from '../controllers/OrdersController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.use(isAuthenticated);

ordersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  ordersController.show,
);

ordersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
      title_list_products: Joi.string(),
      products: Joi.required(),
    },
  }),
  ordersController.create,
);

ordersRouter.get(
  '/user/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  ordersController.index,
);

export default ordersRouter;
