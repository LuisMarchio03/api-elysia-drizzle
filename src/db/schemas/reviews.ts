import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'
import { pgTable, integer, text } from 'drizzle-orm/pg-core'
import { restaurants } from './restaurants'
import { users } from './users'

export const reviews = pgTable('reviews', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  restaurantId: text('restaurant_id').references(() => restaurants.id, {
    onDelete: 'set null',
  }),
  userId: text('user_id').references(() => users.id, {
    onDelete: 'set null',
  }),
  rating: integer('rating').notNull(),
  comment: text('comment'),
})

export const reviewsRelations = relations(reviews, ({ one, many }) => ({
  restaurant: one(restaurants, {
    fields: [reviews.restaurantId],
    references: [restaurants.id],
    relationName: 'restaurant',
  }),
  user: one(users, {
    fields: [reviews.userId],
    references: [users.id],
    relationName: 'user',
  }),
}))