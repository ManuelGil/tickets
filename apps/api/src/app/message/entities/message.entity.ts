import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Ticket } from '../../ticket/entities/ticket.entity';

/**
 * Message class.
 *
 * This entity handles the message information.
 */
@Entity('message')
export class Message {
  /**
   * This variable contains the message's id.
   *
   * @member {string} uuid - the message's id.
   */
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  /**
   * This variable contains the full name of the user.
   *
   * @member {string} fullName - the full name.
   */
  @Column({
    name: 'full_name',
    type: 'varchar',
    length: 200,
    nullable: true,
    default: null,
  })
  fullName: string;

  /**
   * This variable containst the data of the message.
   *
   * @member {string} data - data of message.
   */
  @Column({
    type: 'text',
    nullable: true,
    default: null,
  })
  data: string;

  /**
   * This variable contains the date when the user is created.
   *
   * @member {Date} createdAt - the create date.
   */
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  /**
   * This variable contains the date when the user is updated.
   *
   * @member {Date} updatedAt - the update date.
   */
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  /**
   * This variable contains the date when the user is deleted.
   *
   * @member {Date} deletedAt - the delete date.
   */
  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    default: null,
  })
  deletedAt: Date;

  /**
   * This variable contains the relation whit ticket entity.
   *
   * @member {Ticket} ticket - the relation with ticket entity.
   */
  @ManyToOne(() => Ticket, (ticket) => ticket.messages, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn({
    name: 'message_id',
    referencedColumnName: 'uuid',
  })
  ticket: Ticket;
}
