import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    const ticket = this.ticketRepository.create(createTicketDto);

    return await this.ticketRepository.save(ticket);
  }

  async findAll(): Promise<object> {
    const [result, total] = await this.ticketRepository.findAndCount({
      relations: ['messages'],
      order: { createdAt: 'DESC' },
    });

    return {
      data: result,
      count: total,
    };
  }

  async findOne(uuid: string) {
    const ticket = await this.ticketRepository.findOneBy({ uuid });

    if (!ticket) throw new NotFoundException();

    return ticket;
  }

  async update(uuid: string, updateTicketDto: UpdateTicketDto) {
    const ticket = await this.ticketRepository.findOneBy({ uuid });

    if (!ticket) throw new NotFoundException();

    this.ticketRepository.merge(ticket, updateTicketDto);

    return this.ticketRepository.save(ticket);
  }

  async remove(uuid: string) {
    return await this.ticketRepository.softDelete(uuid);
  }
}
