import { setSeederFactory } from 'typeorm-extension';

import { Ticket } from '../../app/ticket/entities/ticket.entity';

export default setSeederFactory(Ticket, async (faker) => {
  const ticket = new Ticket();

  ticket.code = faker.random.alphaNumeric(16);
  ticket.title = faker.lorem.sentence();
  ticket.description = faker.lorem.paragraphs();
  ticket.isActivated = faker.datatype.boolean();

  return ticket;
});
