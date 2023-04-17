import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Annotation } from '../annotation/entities/annotation.entity';
import { Priority } from './entities/priority.entity';
import { PriorityController } from './priority.controller';
import { PriorityService } from './priority.service';

/**
 * PriorityModule class.
 *
 * @module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Annotation, Priority])],
  controllers: [PriorityController],
  providers: [PriorityService],
})
export class PriorityModule {}
