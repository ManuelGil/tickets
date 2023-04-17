import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ticket } from '../ticket/entities/ticket.entity';
import { Group } from './entities/group.entity';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';

/**
 * GroupModule class.
 *
 * @module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Group, Ticket])],
  controllers: [GroupController],
  providers: [GroupService],
})
export class GroupModule {}
