import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';

import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { LoginJwtDto } from './dto/login-jwt.dto';

/**
 * AuthService class.
 *
 * This service uses a UserService and JwtService to create JWT credentials.
 */
@Injectable()
export class AuthService {
  /**
   * This method instances the dependencies.
   *
   * @param {UserService} userService - injects the `UserService`.
   * @param {JwtService} jwtService - injects the `JwtService`.
   */
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}

  /**
   * This method checks the user credentials and generates a new JWT credentials.
   *
   * @param {LoginJwtDto} loginJwtDto - contains the `username` and `password`.
   * @returns {Promise<object>} - the object with JWT cretentials.
   */
  async login(loginJwtDto: LoginJwtDto): Promise<object> {
    const { username, password } = loginJwtDto;

    const user = await this.userService.findOneBy({ username });

    if (!user || !user.isActivated) throw new UnauthorizedException();

    if (!compareSync(password, user.password))
      throw new UnauthorizedException();

    const token = await this.jwtService.sign({
      iat: Math.ceil(Date.now() / 1000),
      exp: Math.ceil((Date.now() + 30 * 60 * 1000) / 1000),
      id: user.uuid,
      username: user.username,
      email: user.email,
      roles: user.roles,
    });

    const refreshToken = await this.jwtService.sign({
      iat: Math.ceil(Date.now() / 1000),
      exp: Math.ceil((Date.now() + 4 * 60 * 60 * 1000) / 1000),
      id: user.uuid,
    });

    return { token, refreshToken };
  }

  /**
   * This method renews the JWT credentials.
   *
   * @param {string} uuid - the user's id.
   * @returns {Promise<object>} - the object with JWT cretentials.
   */
  async refreshToken(uuid: string): Promise<object> {
    const user = await this.userService.findOne(uuid);

    if (!user || !user.isActivated) throw new UnauthorizedException();

    const token = await this.jwtService.sign({
      iat: Math.ceil(Date.now() / 1000),
      exp: Math.ceil((Date.now() + 30 * 60 * 1000) / 1000),
      id: user.uuid,
      roles: user.roles,
    });

    const refreshToken = await this.jwtService.sign({
      iat: Math.ceil(Date.now() / 1000),
      exp: Math.ceil((Date.now() + 4 * 60 * 60 * 1000) / 1000),
      id: user.uuid,
    });

    return { token, refreshToken };
  }

  /**
   * This method returns the current user.
   *
   * @param {string} uuid - the user's id.
   * @returns {Promise<User>} - the authenticated user.
   */
  async getUser(uuid: string): Promise<User> {
    const user = await this.userService.findOne(uuid);

    if (!user || !user.isActivated) throw new UnauthorizedException();

    delete user.password;

    return user;
  }
}
