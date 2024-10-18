import { defineConfig } from 'drizzle-kit'
import { env } from './env-schema'

console.log('🚀  env.DATABASE_URL:', env.DATABASE_URL)

export default defineConfig({
  schema: './db/schemas.ts',
  out: './db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
