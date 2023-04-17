import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Annotation } from '../annotation/entities/annotation.entity';
import { Category } from '../category/entities/category.entity';
import { Group } from '../group/entities/group.entity';
import { Message } from '../message/entities/message.entity';
import { Ticket } from './entities/ticket.entity';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

/**
 * TicketModule class.
 *
 * @module
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([Annotation, Category, Group, Message, Ticket]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService],
})
export class TicketModule {}
