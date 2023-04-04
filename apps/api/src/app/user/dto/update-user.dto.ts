import { PartialType } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

import { CreateUserDto } from './create-user.dto';

/**
 * UpdateUserDto class.
 *
 * The Data Transfer Object to update an user.
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {
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
  @IsOptional()
  @MaxLength(100)
  username: string;

  /**
   * This variable contains the email.
   *
   * @member {string} email - the email
   */
  @IsEmail()
  @IsOptional()
  @MaxLength(320)
  email: string;

  /**
   * This variable contains the password.
   *
   * @member {string} password - the password
   */
  @IsString()
  @IsOptional()
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
}
