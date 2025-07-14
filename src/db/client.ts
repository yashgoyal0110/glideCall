// db/client.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { users } from "./schema";

const client = new Client({
  connectionString: process.env.DATABASE_URL!,
});
client.connect();

export const db = drizzle(client, { schema: { users } });
