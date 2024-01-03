import { createId } from '@paralleldrive/cuid2'
import { pgTable, integer, varchar, text, date } from 'drizzle-orm/pg-core'

export const clients = pgTable('clients', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  name: varchar('name').notNull(),
  cnpj: varchar('cnpj').notNull().unique(), // Login com cnpj
  opening_date: date('opening_date').notNull(),
  legal_entity_name: varchar('legal_entity_name').notNull(),
  password: varchar('password').notNull(), // e Password
})