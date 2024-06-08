import { pgTable, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const teamTable = pgTable('teams', {
	id: text('id').notNull().primaryKey(),
    name: text('name').notNull(),
    createdAt: timestamp('created_at', {
		withTimezone: true,
		mode: 'date'
	}).notNull(),
	updatedAt: timestamp('updated_at', {
		withTimezone: true,
		mode: 'date'
	}).notNull()
});

export type Team = typeof teamTable.$inferInsert;