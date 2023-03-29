import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { DataSource } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { DataSourceOptions } from 'typeorm/data-source';

ConfigModule.forRoot({
  envFilePath: '.env',
});

const configService = new ConfigService();

const options = {
  ...configService.get('database'),
  entities: [__dirname + '/../src/**/*.entity.ts'],
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../src/migrations/**/*.ts'],
};

export const dataSource = new DataSource(
  options as DataSourceOptions & SeederOptions
);
