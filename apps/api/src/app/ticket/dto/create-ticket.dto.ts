import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

import { Message } from '../../message/entities/message.entity';

/**
 * CreateTicketDto class.
 *
 * The Data Transfer Object to create a new ticket.
 */
export class CreateTicketDto {
  /**
   * This variable contains the ticket's title of the user.
   *
   * @member {string} title - the ticket's title.
   */
  @ApiProperty({
    required: true,
    type: 'string',
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title: string;

  /**
   * This variable contains the ticket's description of the user.
   *
   * @member {string} description - the ticket's description.
   */
  @ApiProperty({
    required: true,
    type: 'string',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  /**
   * This variable is `true` when the user is activated.
   *
   * @member {boolean} isActivated - is activated variable.
   */
  @ApiProperty({
    required: true,
    type: 'boolean',
    default: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  isActivated: boolean;

  /**
   * This variable contains the messages of the ticket.
   *
   * @member {array} message - messages of the ticket.
   */
  @ApiProperty({
    required: true,
    type: 'array',
  })
  @IsNotEmpty()
  @IsArray()
  messages: Message[];
}
