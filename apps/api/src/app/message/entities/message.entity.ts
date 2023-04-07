import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ticket } from '../../ticket/entities/ticket.entity';
@Entity('message')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
  })
  user: string;

  @Column({
    nullable: true,
  })
  data: string;

  @ManyToOne(() => Ticket, (ticket) => ticket.messages, {
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({
    name: 'ticket_id',
    referencedColumnName: 'id',
  })
  ticket: Ticket;
}
