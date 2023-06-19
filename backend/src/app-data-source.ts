import { DataSource } from 'typeorm'
import { configDotenv } from 'dotenv'

configDotenv()

export const myDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_NAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'postgres',
  entities: ['src/domain/entity/*.ts'],
  logging: true,
  synchronize: false,
})
