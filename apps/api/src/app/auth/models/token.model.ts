import { UserRole } from '../../app.roles';

/**
 * TokenInterface interface.
 *
 * This interface is used in the payload of the JWT.
 */
export interface TokenInterface {
  /**
   * This variable contains the user's id.
   *
   * @member {string} id - the user's id.
   */
  id: string;

  /**
   * This variable contains the user's role.
   *
   * @member {array} roles - the user's role.
   */
  roles?: UserRole[];
}
