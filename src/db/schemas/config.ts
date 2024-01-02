import { createId } from '@paralleldrive/cuid2'
import { pgTable, integer, varchar, text, date, pgEnum } from 'drizzle-orm/pg-core'
import { clients } from '.'
import { relations } from 'drizzle-orm'

export const planEnum = pgEnum('Plan', ['DEFAULT', 'BASE', 'PREMIUM']);

export const configs = pgTable('configs', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
    clientId: text('client_id').references(() => clients.id, {
      onDelete: 'set null',
    }),
    plan: planEnum('plan').default('DEFAULT').notNull(),
    logo_url: varchar('logo_url'),
    primary_color: varchar('primary_color'),
    secondary_color: varchar('secondary_color'),
    responsible_name: varchar('responsible_name'),
    contact_email: varchar('contact_email'),
    contact_phone: varchar('contact_phone'),
    domain: varchar('domain'),
})


export const configsRelations = relations(configs, ({ one }) => ({
  client: one(clients, {
    fields: [configs.clientId],
    references: [clients.id],
    relationName: 'client',
  }),
}))


