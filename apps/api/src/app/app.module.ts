import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as Joi from 'joi';
import { configs } from '../../config/api.config';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { GroupModule } from './group/group.module';
import { MessageModule } from './message/message.module';
import { NoteModule } from './note/note.module';
import { PriorityModule } from './priority/priority.module';
import { ProductModule } from './product/product.module';
import { TicketModule } from './ticket/ticket.module';
import { UserModule } from './user/user.module';

/**
 * AppModule class.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configs],
      validationSchema: Joi.object({
        API_PORT: Joi.number().required(),
        DATABASE_TYPE: Joi.string().required(),
        DATABASE_HOST: Joi.string().default('localhost').required(),
        DATABASE_PORT: Joi.number().default(5432).required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_LOGGING: Joi.any().default(false).optional(),
        DATABASE_RETRY_ATTEMPTS: Joi.number().default(10).optional(),
        DATABASE_RETRY_DELAY: Joi.number().default(3000).optional(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get('database'),
        entities: [__dirname + '/**/*.entity.ts'],
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    AuthModule,
    CategoryModule,
    GroupModule,
    MessageModule,
    NoteModule,
    PriorityModule,
    ProductModule,
    TicketModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
