import type { Config } from 'drizzle-kit'
import { env } from '@/env'

export default {
  schema: './src/db/schema/index.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DB_URL as string,
  },
} satisfies Config
