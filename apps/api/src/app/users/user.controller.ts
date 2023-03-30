import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common/pipes/parse-uuid.pipe';
import { ApiTags } from '@nestjs/swagger/dist';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

/**
 * UserController class.
 */
@ApiTags('user')
@Controller('user')
export class UserController {
  /**
   * This is the constructor method.
   *
   * @param {UserService} userService - injects the UserService.
   */
  constructor(private readonly userService: UserService) {}

  /**
   * This method created a new user.
   *
   * @param {CreateUserDto} createUserDto - contains the user's information.
   * @returns - the new user.
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  /**
   * This method gets all user.
   *
   * @returns - all user.
   */
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  /**
   * This method gets an user.
   *
   * @param {string} uuid - the user's id.
   * @returns - the user.
   */
  @Get(':uuid')
  findOne(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.userService.findOne(uuid);
  }

  /**
   * This method updates an user.
   *
   * @param {string} uuid - the user's id.
   * @param {UpdateUserDto} updateUserDto - contains the user's information.
   * @returns - the user.
   */
  @Patch(':uuid')
  update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(uuid, updateUserDto);
  }

  /**
   * This method deletes an user.
   *
   * @param uuid - the user's id.
   * @returns - the operation result.
   */
  @Delete(':uuid')
  remove(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.userService.remove(uuid);
  }
}
