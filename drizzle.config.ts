import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";
import { env } from "@/env.mjs";

const DATABASE_URL = env.DATABASE_URL;

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
} satisfies Config);
