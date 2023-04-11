import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from '../controllers/UsersController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();
/**Remover posteriormente a lista de usuários */
//usersRouter.get('/', isAuthenticated, usersController.index);
usersRouter.get(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.QUERY]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.show,
);

// usersRouter.get(
//   '/',
//   isAuthenticated,
//   validateQueryParams,
//   usersController.show,
// );

// // Middleware personalizado para validar os parâmetros de consulta
// function validateQueryParams(req, res, next) {
//   const { id } = req.query;

//   if (!id || !/^[a-f\d]{8}-([a-f\d]{4}-){3}[a-f\d]{12}$/i.test(id)) {
//     return res
//       .status(400)
//       .json({ message: 'O parâmetro "id" é inválido ou está ausente.' });
//   }

//   next();
// }

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

export default usersRouter;
