import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'
import { pgTable, text, timestamp, boolean, jsonb } from 'drizzle-orm/pg-core'
import { restaurants } from './restaurants'

// - id: int (primary key)
// - name: varchar(255)
// - restaurant_id: int (foreign key to Restaurants table)

export const managers = pgTable('managers', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text('name').notNull(),
  restaurantId: text('restaurant_id').references(() => restaurants.id, {
    onDelete: 'set null',
  })
})

export const managersRelations = relations(managers, ({ one, many }) => ({
  restaurant: one(restaurants, {
    fields: [managers.restaurantId],
    references: [restaurants.id],
    relationName: 'restaurant',
  }),
}))


