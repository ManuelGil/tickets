import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Ticket } from '../../app/ticket/entities/ticket.entity';
import { Message } from '../../app/message/entities/message.entity';

export default class TicketSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {

    const ticketFactory = await factoryManager.get(Ticket);
    await ticketFactory.saveMany(10);
  }
}
