import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * LoginJwtDto class.
 *
 * The Data Transfer Object to login in the account.
 */
export class LoginJwtDto {
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
  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(4)
  @MaxLength(100)
  username: string;

  /**
   * This variable contains the user's password.
   *
   * @member {string} password - the password.
   */
  @ApiProperty({
    required: true,
    type: 'varchar',
    minLength: 4,
    maxLength: 255,
    nullable: true,
  })
  @IsOptional()
  @MinLength(4)
  @MaxLength(255)
  password: string;
}
