import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Annotation } from '../../annotation/entities/annotation.entity';
import { Category } from '../../category/entities/category.entity';
import { Group } from '../../group/entities/group.entity';
import { Message } from '../../message/entities/message.entity';

/**
 * Ticket class.
 *
 * This entity handles the ticket information.
 */
@Entity('tickets')
export class Ticket {
  /**
   * This variable contains the ticket's id.
   *
   * @member {string} uuid - the ticket's id.
   */
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  /**
   * This variable contains the ticket's code of the user.
   *
   * @member {string} code - the ticket's code.
   */
  @Column({
    type: 'varchar',
    length: 16,
    unique: true,
  })
  code: string;

  /**
   * This variable contains the ticket's title of the user.
   *
   * @member {string} title - the ticket's title.
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  title: string;

  /**
   * This variable contains the ticket's description of the user.
   *
   * @member {string} description - the ticket's description.
   */
  @Column({
    type: 'text',
    nullable: true,
    default: null,
  })
  description: string;

  /**
   * This variable is `true` when the user is activated.
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
   * This variable contains a reference with annotation entity.
   *
   * @member {array} annotations - the reference with annotation entity.
   */
  @OneToMany(() => Annotation, (annotation) => annotation.ticket)
  annotations: Annotation[];

  /**
   * This variable contains a reference with message entity.
   *
   * @member {array} messages - the reference with message entity.
   */
  @OneToMany(() => Message, (message) => message.ticket)
  messages: Message[];

  /**
   * This variable contains the relation whit group entity.
   *
   * @member {Group} group - the relation with group entity.
   */
  @ManyToOne(() => Group, (group) => group.tickets, {
    onDelete: 'SET NULL',
    nullable: true,
    orphanedRowAction: 'nullify',
  })
  @JoinColumn({
    name: 'group_id',
    referencedColumnName: 'uuid',
  })
  group: Group;

  /**
   * This variable contains the reference of the many to many relation whit category entity.
   *
   * @member {array} categories - the reference with category entity.
   */
  @ManyToMany(() => Category, (category) => category.tickets, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  categories: Category[];
}
