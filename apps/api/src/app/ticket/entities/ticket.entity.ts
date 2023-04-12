import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from '../../message/entities/message.entity';

@Entity('tickets')
export class Ticket {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: true})
  title: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    nullable: true,
  })
  status: string;

  @Column({
    nullable: true,
  })
  techSupport: string;

  @Column({
    nullable: true,
  })
  user: string;

  @Column({
    nullable: true,
  })
  creationDate: string;

  @OneToMany(
    ()=>Message, 
    (message)=>message.ticket,
    {
      cascade: true,
    }
    )

  messages: Message[];
}
