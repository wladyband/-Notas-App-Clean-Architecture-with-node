import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import ProductRepository from '../typeorm/repositories/ProductsRepository';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';

interface IRequest {
  user_id: string;
}

class ListProductsByUserService {
  public async execute({ user_id }: IRequest): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);
    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError('No user_id provided.');
    }

    const products = await productsRepository.find({
      where: { user: { id: user_id } },
    });

    if (products.length === 0) {
      throw new AppError('No products found for this user.');
    }

    return products;
  }
}

export default ListProductsByUserService;
