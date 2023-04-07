import { Get, Injectable } from '@nestjs/common';
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

  create(createTicketDto: CreateTicketDto) {
    return 'This action adds a new ticket';
  }
  @Get()
  async findAll() {
    const [result, total] = 
    await this.ticketRepository.findAndCount({relations:['messages']});

    return {
      data: result,
      count: total,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
