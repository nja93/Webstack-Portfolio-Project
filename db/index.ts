import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "@/db/schema";

const client = new Client({
    connectionString: process.env.DATABASE_URL!,
});

await client.connect();
const db = drizzle(client, { schema });

export default db;
