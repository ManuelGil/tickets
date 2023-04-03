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
   * @member {string} roles - the user's role.
   */
  roles?: string;
}
