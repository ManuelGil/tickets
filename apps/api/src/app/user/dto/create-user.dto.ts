import {
  IsAlphanumeric,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

import { UserRole } from '../../app.roles';

/**
 * CreateUserDto class.
 *
 * The Data Transfer Object to create an user.
 */
export class CreateUserDto {
  /**
   * This variable contains the user's id.
   *
   * @member {string} uuid - the user id
   */
  @IsUUID()
  @IsNotEmpty()
  uuid: string;

  /**
   * This variable contains the first name.
   *
   * @member {string} firstName - the first name
   */
  @IsString()
  @IsOptional()
  @MaxLength(100)
  firstName: string;

  /**
   * This variable contains the last name.
   *
   * @member {string} lastName - the last name
   */
  @IsString()
  @IsOptional()
  @MaxLength(100)
  lastName: string;

  /**
   * This variable contains the user name.
   *
   * @member {string} username - the user name
   */
  @IsAlphanumeric()
  @IsNotEmpty()
  @MaxLength(100)
  username: string;

  /**
   * This variable contains the email.
   *
   * @member {string} email - the email
   */
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(320)
  email: string;

  /**
   * This variable contains the user's password.
   *
   * @member {string} password - the password
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  /**
   * This variable contains the phone number.
   *
   * @member {string} phone - the phone
   */
  @IsString()
  @IsOptional()
  @MaxLength(25)
  phone: string;

  /**
   * This variable contains the user name.
   *
   * @member {array} roles - the user's roles
   */
  @IsArray()
  @IsNotEmpty()
  roles: UserRole[];
}
