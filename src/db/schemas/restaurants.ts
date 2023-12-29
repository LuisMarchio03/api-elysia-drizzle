import { createId } from '@paralleldrive/cuid2'
import { pgTable, text, timestamp, boolean, jsonb } from 'drizzle-orm/pg-core'

export const restaurants = pgTable('restaurants', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text('name').notNull(),
  public_profile: text('public_profile'),
  open: boolean('open').notNull(),
  metrics: jsonb('metrics'),
  createdAt: timestamp('created_at').defaultNow(),
})

