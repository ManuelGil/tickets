import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Ticket } from '../../ticket/entities/ticket.entity';

/**
 * Group class.
 *
 * This entity handles the group information.
 */
@Entity('groups')
export class Group {
  /**
   * This variable contains the group's id.
   *
   * @member {string} uuid - the group's id.
   */
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  /**
   * This variable contains the group's title of the user.
   *
   * @member {string} title - the group's title.
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  title: string;

  /**
   * This variable is `true` when the group is activated.
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
   * This variable contains the date when the group is created.
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
   * This variable contains the date when the group is updated.
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
   * This variable contains the date when the group is deleted.
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
   * This variable contains a reference with ticket entity.
   *
   * @member {array} tickets - the reference with ticket entity.
   */
  @OneToMany(() => Ticket, (ticket) => ticket.group)
  tickets: Ticket[];
}
