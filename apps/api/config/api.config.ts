import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { DataSourceOptions } from 'typeorm/data-source';
import InitSeeder from '../src/database/seeds/init.seeder';
import { SeederOptions } from 'typeorm-extension';

ConfigModule.forRoot({
  envFilePath: '.env',
});

export const dbPorpertiesCreator = () => {
  const baseConfig = () => {
    return {
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(String(process.env.DATABASE_PORT), 10) || 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [__dirname + '/../src/**/*.entity.ts'],
      migrationsTableName: 'migrations',
      migrations: [__dirname + '/../src/database/migrations/**/*.ts'],
      seeds: [InitSeeder],
    };
  };
  const extendedConfig = () => {
    const basicConfigObj = baseConfig();
    return {
      ...basicConfigObj,
      logging: process.env.DATABASE_LOGGING || false,
      retryAttempts: process.env.DATABASE_RETRY_ATTEMPTS,
      retryDelay: process.env.DATABASE_RETRY_DELAY,
    };
  };

  return {
    basicConfig: baseConfig(),
    extendedConfig: extendedConfig(),
  };
};

export const source = new DataSource(
  dbPorpertiesCreator().extendedConfig as DataSourceOptions & SeederOptions
);

export const configs = () => ({
  port: parseInt(String(process.env.API_PORT), 10) || 3000,
  database: {
    ...dbPorpertiesCreator().extendedConfig,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});
