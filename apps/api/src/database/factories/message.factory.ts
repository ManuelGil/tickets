import { setSeederFactory } from 'typeorm-extension';

import { Message } from '../../app/message/entities/message.entity';

export default setSeederFactory(Message, async (faker) => {
  const message = new Message();

  message.fullName = faker.name.fullName();
  message.data = faker.lorem.paragraphs();

  return message;
});
