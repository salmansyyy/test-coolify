const DATABASE_URL = "postgres://postgres:wkkBbO3Qa8haKDt2teBv8uXB4Yd77iFmWQ183jB2HzJiAHCF22LaOkbFrWkz7zkw@8.208.81.207:5432/postgres"
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
const pool = new pg.Pool({
	connectionString: DATABASE_URL,
});

await pool.connect();
const db = drizzle(pool);

export default db;