import { DataSource } from 'typeorm';
import { runSeeders, Seeder } from 'typeorm-extension';

import userFactory from '../factories/user.factory';
import UserSeeder from './user.seeder';
import TicketSeeder from './ticket.seeder';
import ticketFactory from '../factories/ticket.factory';
import messageFactory from '../factories/message.factory';
import MessageSeeder from './message.seeder';

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
