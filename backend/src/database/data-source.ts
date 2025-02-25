import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { UserRegisters } from '../app/models/models';

const portDB: number = Number(process.env.DATABASE_PORT);
const hostDB: string = String(process.env.DATABASE_HOST);
const nameDB: string = String(process.env.DATABASE_NAME);
const usernameDB: string = String(process.env.DATABASE_USERNAME);
const passwordDB: string = String(process.env.DATABASE_PASSWORD)

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: hostDB,
  port: portDB,
  username: usernameDB,
  password: passwordDB,
  database: nameDB,
  entities: [
    UserRegisters
  ],
  migrations: [
   "src/database/migrations/*.ts"
  ],
})