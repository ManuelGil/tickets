import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from '../product/entities/product.entity';
import { Ticket } from '../ticket/entities/ticket.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';

/**
 * CategoryModule class.
 *
 * @module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Category, Product, Ticket])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
