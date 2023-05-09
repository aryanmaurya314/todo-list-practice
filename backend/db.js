import { createConnection } from 'mysql';
import dotenv from 'dotenv';
// configure dotenv file
dotenv.config();

const connection = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME ?? 'todo_list',
});

export default connection;
