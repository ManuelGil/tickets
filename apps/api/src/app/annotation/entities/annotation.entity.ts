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

import { Priority } from '../../priority/entities/priority.entity';
import { Ticket } from '../../ticket/entities/ticket.entity';
import { User } from '../../user/entities/user.entity';

/**
 * Annotation class.
 *
 * This entity handles the annotation information.
 */
@Entity('annotations')
export class Annotation {
  /**
   * This variable contains the annotation's id.
   *
   * @member {string} uuid - the annotation's id.
   */
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  /**
   * This variable contains the annotation's observations of the user.
   *
   * @member {string} observations - the annotation's observations.
   */
  @Column({
    type: 'text',
    nullable: true,
    default: null,
  })
  observations: string;

  /**
   * This variable is `true` when the annotation is activated.
   *
   * @member {boolean} is_activated - is true when the entity is activated
   */
  @Column({
    name: 'is_activated',
    type: 'boolean',
    default: true,
  })
  isActivated: boolean;

  /**
   * This variable contains the date when the annotation is created.
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
   * This variable contains the date when the annotation is updated.
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
   * This variable contains the date when the annotation is deleted.
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
  @ManyToOne(() => Ticket, (ticket) => ticket.annotations, {
    onDelete: 'SET NULL',
    nullable: true,
    orphanedRowAction: 'nullify',
  })
  @JoinColumn({
    name: 'ticket_id',
    referencedColumnName: 'uuid',
  })
  ticket: Ticket;

  /**
   * This variable contains the relation whit priority entity.
   *
   * @member {Priority} priority - the relation with priority entity.
   */
  @ManyToOne(() => Priority, (priority) => priority.annotations, {
    onDelete: 'SET NULL',
    nullable: true,
    orphanedRowAction: 'nullify',
  })
  @JoinColumn({
    name: 'priority_id',
    referencedColumnName: 'uuid',
  })
  priority: Priority;

  /**
   * This variable contains the relation whit user entity.
   *
   * @member {User} user - the relation with user entity.
   */
  @ManyToOne(() => User, (user) => user.annotations, {
    onDelete: 'SET NULL',
    nullable: true,
    orphanedRowAction: 'nullify',
  })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'uuid',
  })
  user: User;
}
