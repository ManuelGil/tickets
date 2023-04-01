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
   *
   * @member {string} uuid - the user's id
   */
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  /**
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
   *
   * @member {string} password - the password (hash)
   */
  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string;

  /**
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
   *
   * @member {string} phone - the contact email
   */
  @Column({
    type: 'varchar',
    length: 320,
    unique: true,
  })
  email: string;

  /**
   *
   * @member {string} phone - the contact phone
   */
  @Column({
    type: 'varchar',
    length: 25,
    nullable: true,
    default: null,
  })
  phone: string;

  /**
   *
   * @member {Array} roles - the user's role
   */
  @Column({
    type: 'simple-array',
    enum: UserRole,
    default: [UserRole.GUEST],
  })
  roles: UserRole[];

  /**
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
