import { Get, Injectable, Post } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketService {

  constructor(
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>
  ){}


  async create(createTicketDto: CreateTicketDto) {
    const ticketAtDb = await this.ticketRepository.findBy({id: createTicketDto.id});
    if(!ticketAtDb) return{error:'object found at db'}
    const ticket= await this.ticketRepository.save(createTicketDto);
    console.log("🚀 ~ file: ticket.service.ts:17 ~ TicketService ~ create ~ ticket:", ticket)
    return ticket;
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
