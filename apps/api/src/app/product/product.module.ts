import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category } from '../category/entities/category.entity';
import { Product } from './entities/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

/**
 * ProductModule class.
 *
 * @module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Category, Product])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
