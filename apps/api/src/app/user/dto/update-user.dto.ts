import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

import { UserRole } from '../../app.roles';
import { CreateUserDto } from './create-user.dto';

/**
 * UpdateUserDto class.
 *
 * The Data Transfer Object to update an user.
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {
  /**
   * This variable contains the first name of the user.
   *
   * @member {string} firstName - the first name.
   */
  @ApiProperty({
    type: 'varchar',
    minLength: 2,
    maxLength: 100,
    nullable: true,
    default: null,
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  firstName: string;

  /**
   * This variable contains the last name of the user.
   *
   * @member {string} lastName - the last name.
   */
  @ApiProperty({
    type: 'varchar',
    minLength: 2,
    maxLength: 100,
    nullable: true,
    default: null,
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  lastName: string;

  /**
   * This variable contains the user name.
   *
   * @member {string} username - the username.
   */
  @ApiProperty({
    required: true,
    type: 'varchar',
    minLength: 4,
    maxLength: 100,
    uniqueItems: true,
  })
  @IsOptional()
  @IsAlphanumeric()
  @MinLength(4)
  @MaxLength(100)
  username: string;

  /**
   * This variable contains the users's email.
   *
   * @member {string} email - the user's email.
   */
  @ApiProperty({
    type: 'varchar',
    maxLength: 320,
    nullable: true,
    default: null,
  })
  @IsOptional()
  @IsEmail()
  @MaxLength(320)
  email: string;

  /**
   * This variable contains the account password.
   *
   * @member {string} password - the password.
   */
  @ApiProperty({
    type: 'varchar',
    minLength: 4,
    maxLength: 255,
  })
  @IsOptional()
  @MinLength(4)
  @MaxLength(255)
  password: string;

  /**
   * This variable contains the contact phone number of the user.
   *
   * @member {string} phone - the user's phone.
   */
  @ApiProperty({
    type: 'varchar',
    minLength: 10,
    maxLength: 25,
    nullable: true,
    default: null,
  })
  @IsOptional()
  @IsString()
  @MinLength(10)
  @MaxLength(25)
  phone: string;

  /**
   * This variable contains the user's roles.
   *
   * @member {array} roles - the user's roles.
   */
  @ApiProperty({
    required: true,
    type: 'simple-array',
    enum: UserRole,
    default: UserRole.GUEST,
  })
  @IsNotEmpty()
  @IsEnum(UserRole)
  roles: UserRole[];

  /**
   * This variable is `true` when the user is activated.
   *
   * @member {boolean} isActivated - is activated variable.
   */
  @ApiProperty({
    type: 'boolean',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isActivated: boolean;
}
