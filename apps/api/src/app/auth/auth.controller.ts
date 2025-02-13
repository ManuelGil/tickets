import {
  Body,
  Controller,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginJwtDto } from './dto/login-jwt.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

/**
 * AuthController class.
 *
 * This controller handles the authentication by JWT.
 */
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  /**
   * This method instances the dependencies.
   *
   * @param {AuthService} authService - injects the `AuthService`.
   */
  constructor(private readonly authService: AuthService) {}

  /**
   * This methos gets the user credentials and returns the JWTs.
   *
   * @param {LoginJwtDto} loginJwtDto - contains the `username` and `password`.
   * @returns {Object} - the object with JWT cretentials.
   */
  @ApiOperation({ summary: 'Login to your account' })
  @ApiBody({ type: [LoginJwtDto] })
  @Post('login')
  async login(@Body() loginJwtDto: LoginJwtDto) {
    const data = await this.authService.login(loginJwtDto);
    return data;
  }

  /**
   * This method updates the JWTs.
   *
   * @param {Object} request - injects the `request`.
   * @returns {Object} - the object with JWT cretentials.
   */
  @ApiOperation({ summary: 'Update session token' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('refresh-token')
  async refreshToken(@Req() request) {
    if (!request.user || !request.user.uuid) throw new UnauthorizedException();

    const data = await this.authService.refreshToken(request.user.uuid);

    return data;
  }

  /**
   * This method returns the current user.
   *
   * @param {Object} request - injects the `request`.
   * @returns {User} - the current user.
   */
  @ApiOperation({ summary: 'Get user by token' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('user')
  async getUser(@Req() request) {
    if (!request.user || !request.user.uuid) throw new UnauthorizedException();

    const data: User = await this.authService.getUser(request.user.uuid);

    return data;
  }
}
