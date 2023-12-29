import { createId } from '@paralleldrive/cuid2'
import { pgTable, integer, varchar, text } from 'drizzle-orm/pg-core'

export const customers = pgTable('customers', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull(),
  password: varchar('password').notNull(),
})