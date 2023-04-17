import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Annotation } from '../../annotation/entities/annotation.entity';

/**
 * Priority class.
 *
 * This entity handles the priority information.
 */
@Entity('priorities')
export class Priority {
  /**
   * This variable contains the priority's id.
   *
   * @member {string} uuid - the priority's id.
   */
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  /**
   * This variable contains the priority's title of the user.
   *
   * @member {string} title - the priority's title.
   */
  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  title: string;

  /**
   * This variable is `true` when the priority is activated.
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
   * This variable contains the date when the priority is created.
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
   * This variable contains the date when the priority is updated.
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
   * This variable contains the date when the priority is deleted.
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
  @OneToMany(() => Annotation, (annotation) => annotation.priority)
  annotations: Annotation[];
}
