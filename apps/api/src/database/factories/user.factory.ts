import { hash } from 'bcrypt';
import { setSeederFactory } from 'typeorm-extension';

import { UserRole } from '../../app/app.roles';
import { User } from '../../app/user';

export default setSeederFactory(User, async (faker) => {
  const user = new User();

  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  user.username = faker.internet
    .userName(user.firstName, user.lastName)
    .toLowerCase();
  user.email = faker.internet
    .email(user.firstName, user.lastName)
    .toLowerCase();
  user.password = await hash(faker.internet.password(), 10);
  user.phone = faker.phone.number();
  user.roles = faker.helpers.arrayElements([UserRole.ADMIN, UserRole.GUEST]);
  user.isActivated = faker.datatype.boolean();

  return user;
});
