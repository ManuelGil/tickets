import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

/**
 * UserController class.
 *
 * This controller handles the user.
 */
@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  /**
   * This is the constructor method.
   *
   * @param {UserService} userService - injects the `UserService`.
   */
  constructor(private readonly userService: UserService) {}

  /**
   * This method create a new user.
   *
   * @param {CreateUserDto} createUserDto - contains the user's information.
   * @param {Object} request - injects the `request`.
   * @returns
   */
  @ApiOperation({ summary: 'Create an user' })
  @ApiBody({ type: [CreateUserDto] })
  @Post()
  create(@Body() createUserDto: CreateUserDto, @Req() request) {
    if (!request.user || !request.user.roles) throw new UnauthorizedException();

    return this.userService.create(createUserDto);
  }

  /**
   * This method gets all users.
   *
   * @param {FilterCompaniesDto} params - filters for the searh.
   * @param {Object} request - injects the `request`.
   */
  @ApiOperation({ summary: 'List all user' })
  @Get()
  findAll(@Req() request) {
    if (!request.user) throw new UnauthorizedException();

    return this.userService.findAll();
  }

  /**
   * This method return one user.
   *
   * @param {string} uuid - the user's id.
   * @returns {User} - the user object.
   */
  @ApiOperation({ summary: 'Get an user by uuid' })
  @ApiParam({ name: 'uuid', description: 'The user id' })
  @Get(':uuid')
  findOne(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.userService.findOne(uuid);
  }

  /**
   * This method updates an user.
   *
   * @param {string} uuid - the user's id.
   * @param {UpdateUserDto} updateUserDto - contains the user's information.
   * @param {Object} request - injects the `request`.
   * @returns {User} - the updated user.
   */
  @ApiOperation({ summary: 'Update an user by uuid' })
  @ApiParam({ name: 'uuid', description: 'The user id' })
  @ApiBody({ type: [UpdateUserDto] })
  @Patch(':uuid')
  update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() updateUserDto: UpdateUserDto,
    @Req() request
  ) {
    if (!request.user || !request.user.roles) throw new UnauthorizedException();

    if (request.user.uuid !== uuid) throw new NotFoundException();

    delete updateUserDto.roles;
    delete updateUserDto.isActivated;

    return this.userService.update(uuid, updateUserDto);
  }

  /**
   * This method deletes an user.
   *
   * @param {string} uuid - the user's id.
   * @returns {Object} - the result of delete.
   */
  @ApiOperation({ summary: 'Delete an user by uuid' })
  @ApiParam({ name: 'uuid', description: 'The user id' })
  @Delete(':uuid')
  remove(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.userService.remove(uuid);
  }
}
