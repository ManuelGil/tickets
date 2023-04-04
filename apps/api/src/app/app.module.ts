import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as Joi from 'joi';
import { configs } from '../../config/api.config';
import { AuthModule } from './auth/auth.module';
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
        DATABASE_LOGGING: Joi.boolean().default(false).optional(),
        DATABASE_RETRY_ATTEMPTS: Joi.number().default(10).required(),
        DATABASE_RETRY_DELAY: Joi.number().default(3000).required(),
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
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
