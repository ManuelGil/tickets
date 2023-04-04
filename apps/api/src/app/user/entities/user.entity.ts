import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserRole } from '../../app.roles';

/**
 * User class.
 */
@Entity('users')
export class User {
  /**
   * This variable contains the user's id.
   *
   * @member {string} uuid - the user's id
   */
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  /**
   * This variable contains the user name.
   *
   * @member {string} username - the username
   */
  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  username: string;

  /**
   * This variable contains the user's password.
   *
   * @member {string} password - the user password
   */
  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string;

  /**
   * This variable contains the first name.
   *
   * @member {string} firstName - the user's first name
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
   * This variable contains the last name.
   *
   * @member {string} lastName - the user's last name
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
   * This variable contains the email.
   *
   * @member {string} email - the user email
   */
  @Column({
    type: 'varchar',
    length: 320,
    unique: true,
  })
  email: string;

  /**
   * This variable contains the phone number.
   *
   * @member {string} phone - the phone
   */
  @Column({
    type: 'varchar',
    length: 25,
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
   * This variable contains the user name.
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
   * This variable contains the user name.
   *
   * @member {Date} createdAt - the create date
   */
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  /**
   * This variable contains the user name.
   *
   * @member {Date} updatedAt - the update date
   */
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  /**
   * This variable contains the user name.
   *
   * @member {Date} deletedAt - the delete date
   */
  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    default: null,
  })
  deletedAt: Date;
}
