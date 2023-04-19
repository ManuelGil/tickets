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
import { UserRole } from '../../app.roles';

/**
 * User class.
 *
 * This entity handles the user information.
 */
@Entity('users')
export class User {
  /**
   * This variable contains the user's id.
   *
   * @member {string} uuid - the user's id.
   */
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  /**
   * This variable contains the first name of the user.
   *
   * @member {string} firstName - the first name.
   */
  @Column({
    name: 'first_name',
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  firstName: string;

  /**
   * This variable contains the last name of the user.
   *
   * @member {string} lastName - the last name.
   */
  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 100,
    nullable: true,
    default: null,
  })
  lastName: string;

  /**
   * This variable contains the user name.
   *
   * @member {string} username - the username.
   */
  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  username: string;

  /**
   * This variable contains the user's email.
   *
   * @member {string} email - the user's email.
   */
  @Column({
    type: 'varchar',
    length: 320,
    nullable: true,
    default: null,
  })
  email: string;

  /**
   * This variable contains the encrypted password.
   *
   * @member {string} password - the password.
   */
  @Column({
    type: 'varchar',
    length: 255,
    select: false,
  })
  password: string;

  /**
   * This variable contains the contact phone number of the user.
   *
   * @member {string} phone - the user's phone.
   */
  @Column({
    type: 'varchar',
    length: 30,
    nullable: true,
    default: null,
  })
  phone: string;

  /**
   * This variable contains the user name.
   *
   * @member {array} roles - the user's roles
   */
  @Column({
    type: 'simple-array',
    enum: UserRole,
    default: [UserRole.GUEST],
  })
  roles: UserRole[];

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
  @OneToMany(() => Annotation, (annotation) => annotation.user)
  annotations: Annotation[];
}
