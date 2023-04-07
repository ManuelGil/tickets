import { IsNotEmpty, IsUUID } from 'class-validator';
import { Message } from '../../message/entities/message.entity';

export class CreateTicketDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  techSupport: string;

  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  creationDate: string;
  
  @IsNotEmpty()
  messages: Message[];
}
