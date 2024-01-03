import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'
import { pgTable, integer, text, varchar, decimal } from 'drizzle-orm/pg-core'
import { restaurants } from './restaurants'

export const menus = pgTable('menus', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  restaurantId: text('restaurant_id').references(() => restaurants.id, {
    onDelete: 'set null',
  }),
  dish: varchar('dish').notNull(),
  description: text('description'),
  price: decimal('price').notNull(),
})

export const menusRelations = relations(menus, ({ one, many }) => ({
  restaurant: one(restaurants, {
    fields: [menus.restaurantId],
    references: [restaurants.id],
    relationName: 'restaurant',
  }),
}))