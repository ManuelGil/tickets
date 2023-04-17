import { hash } from 'bcrypt';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

import { UserRole } from '../../app/app.roles';
import { User } from '../../app/user/entities/user.entity';

/**
 * UserSeeder class.
 */
export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const repository = dataSource.getRepository(User);

    const data = {
      username: 'admin',
      email: 'admin@localhost',
      password: await hash('admin', 10),
      roles: [UserRole.ADMIN],
      isActivated: true,
    };

    const user = await repository.findOneBy({ username: data.username });

    // Insert only one record with this username.
    if (!user) {
      await repository.insert([data]);
    }

    // ---------------------------------------------------

    const userFactory = await factoryManager.get(User);

    // Insert only one record.
    await userFactory.save();

    // Insert many records in database.
    await userFactory.saveMany(40);
  }
}
