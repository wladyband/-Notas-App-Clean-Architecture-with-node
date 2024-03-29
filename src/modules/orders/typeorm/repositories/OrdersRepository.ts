import User from '@modules/users/typeorm/entities/User';
import { EntityRepository, Repository, getRepository } from 'typeorm';
import Order from '../entities/Order';
import OrdersProducts from '../entities/OrdersProducts';

interface IProduct {
  product_id: string;
  price: number;
  quantity: number;
}

interface IRequest {
  user: User;
  products: IProduct[];
}

@EntityRepository(Order)
class OrdersRepository extends Repository<Order> {
  public async findById(id: string): Promise<Order | undefined> {
    const order = this.findOne(id, {
      relations: ['order_products', 'user'],
    });

    return order;
  }

  public async createOrder({ user, products }: IRequest): Promise<Order> {
    const order = this.create({
      user,
      order_products: products,
    });

    await this.save(order);

    return order;
  }

  /* public async findByUser(userId: string): Promise<any[]> {
    const query = `
    SELECT op.title, SUM(op.price) AS total_price, op.created_at
    FROM public.orders o
    JOIN public.orders_products op ON o.id = op.order_id
    WHERE o.user_id = $1
    GROUP BY op.title, op.created_at;
  `;
    const result = await this.query(query, [userId]);
    return result;
  }*/
  public async findByUser(userId: string): Promise<any[]> {
    console.log('userId:', userId);
    const result = await getRepository(OrdersProducts)
      .createQueryBuilder('op')
      .select(['op.title', 'SUM(op.price) as total_price', 'op.created_at'])
      .innerJoin('op.order', 'o')
      .where('o.user_id = :userId', { userId })
      .groupBy('op.title, op.created_at')
      .getRawMany();

    return result;
  }
}

export default OrdersRepository;
