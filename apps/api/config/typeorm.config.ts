import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { DataSourceOptions } from 'typeorm/data-source';
import InitSeeder from '../src/database/seeds/init.seeder';

ConfigModule.forRoot({
  envFilePath: '.env',
});

export const options = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(String(process.env.DATABASE_PORT), 10) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  logging: process.env.DATABASE_LOGGING || false,
  retryAttempts: process.env.DATABASE_RETRY_ATTEMPTS,
  retryDelay: process.env.DATABASE_RETRY_DELAY,
  entities: [__dirname + '/../src/**/*.entity.ts'],
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../src/database/migrations/**/*.ts'],
  seeds: [InitSeeder],
};

export const source = new DataSource(
  options as DataSourceOptions & SeederOptions
);
