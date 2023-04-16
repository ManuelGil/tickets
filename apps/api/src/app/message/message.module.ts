import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { Ticket } from '../ticket/entities/ticket.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message, Ticket])],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
