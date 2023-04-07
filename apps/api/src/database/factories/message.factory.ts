import { setSeederFactory } from 'typeorm-extension';
import { Message } from '../../app/message/entities/message.entity';

export default setSeederFactory(Message, async (faker) => {
  const message = new Message();
  message.data = faker.lorem.paragraphs();
  message.user = faker.name.fullName();

  return message;
});
