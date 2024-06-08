// drizzle.config.ts
import type { Config } from 'drizzle-kit';
export default {
	schema: './src/lib/server/database/drizzle-schemas.ts',
	out: './src/lib/server/database/migrations',
    dialect: 'postgresql',
	dbCredentials: {
		url: "postgres://postgres:wkkBbO3Qa8haKDt2teBv8uXB4Yd77iFmWQ183jB2HzJiAHCF22LaOkbFrWkz7zkw@8.208.81.207:5432/postgres"
	}
} satisfies Config;