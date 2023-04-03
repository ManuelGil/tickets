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
  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(2)
  @MaxLength(100)
  username: string;

  /**
   * This variable contains the user's password.
   *
   * @member {string} password - the password.
   */
  @IsOptional()
  @MinLength(2)
  @MaxLength(255)
  password: string;
}
