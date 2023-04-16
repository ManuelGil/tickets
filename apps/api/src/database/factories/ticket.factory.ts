import { setSeederFactory } from 'typeorm-extension';
import { Ticket } from '../../app/ticket/entities/ticket.entity';

export default setSeederFactory(Ticket, async (faker) => {
  const ticket = new Ticket();
  ticket.description = faker.lorem.paragraphs();
  ticket.status = faker.word.verb();
  ticket.techSupport = faker.company.name();
  ticket.title = faker.word.adjective({ strategy: 'fail' });
  ticket.user = faker.name.fullName();

  return ticket;
});
