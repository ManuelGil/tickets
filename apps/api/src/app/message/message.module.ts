import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ticket } from '../ticket/entities/ticket.entity';
import { Message } from './entities/message.entity';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

/**
 * MessageModule class.
 *
 * @module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Message, Ticket])],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
