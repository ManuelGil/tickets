import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import configurations from '../../config/configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configurations],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: +configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.database'),
        logging: configService.get('database.logging'),
        retryAttempts: 10,
        retryDelay: 3000,
        entities: [__dirname + '/entities/**/*.entity.ts'],
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
