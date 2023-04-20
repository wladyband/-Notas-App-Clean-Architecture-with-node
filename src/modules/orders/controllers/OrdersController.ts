import { Request, Response } from 'express';
import CreateOrderService from '../services/CreateOrderService';
import ShowOrderService from '../services/ShowOrderService';
import { getCustomRepository } from 'typeorm';
import OrdersRepository from '../typeorm/repositories/OrdersRepository';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showOrder = new ShowOrderService();

    const order = await showOrder.execute({ id });

    return response.json(order);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, products, title_list_products } = request.body;

    const createOrder = new CreateOrderService();

    const order = await createOrder.execute({
      user_id,
      products,
      title_list_products,
    });

    return response.json(order);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const ordersRepository = getCustomRepository(OrdersRepository);

    const orders = await ordersRepository.findByUser(id);

    return response.json(orders);
  }
}
