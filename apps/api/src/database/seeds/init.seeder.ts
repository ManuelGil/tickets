import { DataSource } from 'typeorm';
import { runSeeders, Seeder } from 'typeorm-extension';

import messageFactory from '../factories/message.factory';
import ticketFactory from '../factories/ticket.factory';
import userFactory from '../factories/user.factory';
import MessageSeeder from './message.seeder';
import TicketSeeder from './ticket.seeder';
import UserSeeder from './user.seeder';

/**
 * InitSeeder class.
 */
export default class InitSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    await runSeeders(dataSource, {
      seeds: [UserSeeder, TicketSeeder, MessageSeeder],
      factories: [userFactory, ticketFactory, messageFactory],
    });
  }
}
