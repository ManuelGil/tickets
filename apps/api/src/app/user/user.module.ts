import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Annotation } from '../annotation/entities/annotation.entity';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

/**
 * UserModule class.
 *
 * @module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Annotation, User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
