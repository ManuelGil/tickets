import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Priority } from '../priority/entities/priority.entity';
import { Ticket } from '../ticket/entities/ticket.entity';
import { User } from '../user/entities/user.entity';
import { AnnotationController } from './annotation.controller';
import { AnnotationService } from './annotation.service';
import { Annotation } from './entities/annotation.entity';

/**
 * AnnotationModule class.
 *
 * @module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Annotation, Ticket, Priority, User])],
  controllers: [AnnotationController],
  providers: [AnnotationService],
})
export class AnnotationModule {}
