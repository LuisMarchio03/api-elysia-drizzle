import type { Config } from 'drizzle-kit'
import { env } from '@/env'

export default {
  schema: './src/db/schemas/index.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: 'postgresql://docker:docker@localhost:5132/pizzashop',
  },
} satisfies Config

