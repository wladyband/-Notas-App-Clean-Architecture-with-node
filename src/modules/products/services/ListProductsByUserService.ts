import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import ProductRepository from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  user_id: string;
}

class ListProductsByUserService {
  public async execute({ user_id }: IRequest): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    const products = await productsRepository.find({
      where: { user_id },
    });

    if (!products) {
      throw new AppError('No products found for this user.');
    }

    return products;
  }
}

export default ListProductsByUserService;
