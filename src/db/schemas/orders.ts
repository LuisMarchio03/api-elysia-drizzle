import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'
import { pgTable, integer, varchar, numeric, text, jsonb } from 'drizzle-orm/pg-core'
import { restaurants } from './restaurants'
import { users } from './users'

export const orders = pgTable('orders', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  userId: text('user_id').references(() => users.id, {
    onDelete: 'set null',
  }),
  restaurantId: text('restaurant_id').references(() => restaurants.id, {
    onDelete: 'set null',
  }),
  status: varchar('status').notNull(),
  total: numeric('total', { precision: 5, scale: 2 }).notNull(),
  details: jsonb('details'),
})

export const ordersRelations = relations(orders, ({ one, many }) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
    relationName: 'user',
  }),
  restaurant: one(restaurants, {
    fields: [orders.restaurantId],
    references: [restaurants.id],
    relationName: 'restaurant',
  }),
}))