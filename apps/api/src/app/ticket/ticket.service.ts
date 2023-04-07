import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../message/entities/message.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketService {

  constructor(
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>,
    @InjectRepository(Message) private messageRepository: Repository<Message>
  ){}


  async create(createTicketDto: CreateTicketDto) {
    const ticketAtDb = await this.ticketRepository.findOneBy({id: createTicketDto.id});
    if(ticketAtDb) throw new NotFoundException(`El ticket con ID ${createTicketDto.id} ya existe.`);
    
    const message = this.messageRepository.create(createTicketDto.messages[0]);
    console.log("🚀 ~ file: ticket.service.ts:26 ~ TicketService ~ create ~ message:", message)
    await this.ticketRepository.save(message);

    const ticket = this.ticketRepository.create(createTicketDto);
    const savedTicket = await this.ticketRepository.save(ticket);

    return {savedTicket, message};
  }


  async findAll() {
    const [result, total] = 
    await this.ticketRepository.findAndCount({relations:['messages']});

    return {
      data: result,
      count: total,
    };
  }

  async findOne(id: string) {
    const ticket = 
        await this.ticketRepository.findOneBy({ id:id });
    return ticket;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
