import { defineConfig } from 'drizzle-kit'
import { env } from './env-schema'

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schemas.ts',
  out: './db/migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
