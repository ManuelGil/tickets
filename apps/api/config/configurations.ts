export default () => ({
  port: parseInt(process.env.API_PORT, 10) || 3000,
  database: {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    logging: process.env.DATABASE_LOGGING || false,
  },
});
