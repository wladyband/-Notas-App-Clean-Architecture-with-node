import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import ProductRepository from '../typeorm/repositories/ProductsRepository';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
  user_id: string;
}

class CreateProductService {
  public async execute({
    name,
    price,
    quantity,
    user_id,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const userRepository = getCustomRepository(UsersRepository);

    /*const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new AppError('There is already one product with this name');
    }*/

    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }
    const product = productsRepository.create({
      name,
      price,
      quantity,
      user,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
