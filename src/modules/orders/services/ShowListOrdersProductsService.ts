import { getCustomRepository } from 'typeorm';
import OrdersRepository from '../typeorm/repositories/OrdersRepository';

interface IRequest {
  id: string;
}

class ShowListOrdersProductsService {
  public async execute({ id }: IRequest): Promise<IRequest[]> {
    const ordersRepository = getCustomRepository(OrdersRepository);

    const orders = await ordersRepository.findByUser(id);

    return orders;
  }
}

export default ShowListOrdersProductsService;
