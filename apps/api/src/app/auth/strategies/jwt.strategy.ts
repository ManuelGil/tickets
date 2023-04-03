import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokenInterface } from '../models/token.model';

/**
 * JwtStrategy class.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  /**
   * This method configures the strategy.
   *
   * @param configService - used to hydrate environment variables.
   */
  constructor(private configService: ConfigService) {
    super({
      // Get token source
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Force validation of token expiration
      ignoreExpiration: false,
      // Get secret key
      secretOrKey: configService.get('jwt.secret'),
    });
  }

  /**
   * @typedef {Object} User
   * @property {string} uuid - the user's uuid.
   * @property {array} roles - the user's role as array (this array is required by the access control).
   */
  /**
   * This method transforms the payload.
   *
   * @param {TokenInterface} payload - the payload in the JWT.
   * @returns {User} - this object can be use like as <i>user</i> in the `request`. e.g.: `request.user`.
   */
  async validate(payload: TokenInterface) {
    return {
      uuid: payload.id,
      roles: payload.roles, // this field must be of type array and named 'roles' for the access control requirement.
    };
  }
}
