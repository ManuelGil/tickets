import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Message } from "../../app/message/entities/message.entity";
import { Ticket } from "../../app/ticket/entities/ticket.entity";

export default class MessageSeeder implements Seeder {
    public async run(
      dataSource: DataSource,
      factoryManager: SeederFactoryManager
    ): Promise<any> {
  
      const messageFactory = await factoryManager.get(Message);
      const repository = dataSource.getRepository(Ticket);

      const tickets = await repository.find();
     
      await tickets.forEach(async ticket =>{
         await messageFactory.saveMany(10,{ticket})
      });
      await messageFactory.saveMany(1)
    }
  }