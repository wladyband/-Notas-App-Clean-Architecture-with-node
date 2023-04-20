import ProductRepository from '@modules/products/typeorm/repositories/ProductsRepository';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Order from '../typeorm/entities/Order';
import OrdersRepository from '../typeorm/repositories/OrdersRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  user_id: string;
  products: IProduct[];
  title_list_products?: string; // Novo campo
}

class CreateOrderService {
  public async execute({
    user_id,
    products,
    title_list_products,
  }: IRequest): Promise<Order> {
    const ordersRepository = getCustomRepository(OrdersRepository);
    const customersRepository = getCustomRepository(UsersRepository);
    const productsRepository = getCustomRepository(ProductRepository);

    const userExists = await customersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError('Could not find any user with the given id.');
    }

    const userOrders = await ordersRepository.findByUser(user_id);
    const existsProducts = await productsRepository.findAllByIds(products);

    if (!userOrders.length) {
      throw new AppError(
        'Could not find any orders products with the given ids.',
      );
    }

    if (!existsProducts.length) {
      throw new AppError('Could not find any products with the given ids.');
    }

    const existsProductsIds = existsProducts.map(product => product.id);

    const checkInexistentProducts = products.filter(
      product => !existsProductsIds.includes(product.id),
    );

    if (checkInexistentProducts.length) {
      throw new AppError(
        `Could not find product ${checkInexistentProducts[0].id}.`,
      );
    }

    const quantityAvailable = products.filter(
      product =>
        existsProducts.filter(p => p.id === product.id)[0].quantity <
        product.quantity,
    );

    if (quantityAvailable.length) {
      throw new AppError(
        `The quantity ${quantityAvailable[0].quantity}
         is not available for ${quantityAvailable[0].id}.`,
      );
    }

    const serializedProducts = products.map(product => ({
      //list_title = request.titulo_lista_produtos;
      product_id: product.id,
      quantity: product.quantity,
      price: existsProducts.filter(p => p.id === product.id)[0].price,
      title: title_list_products,
    }));

    const order = await ordersRepository.createOrder({
      user: userExists,
      products: serializedProducts,
    });

    const { order_products } = order;

    const updatedProductQuantity = order_products.map(product => ({
      id: product.product_id,
      quantity: product.quantity,
    }));

    await productsRepository.save(updatedProductQuantity);

    return order;
  }
}

export default CreateOrderService;
