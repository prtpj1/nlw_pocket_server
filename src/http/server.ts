import fastify from 'fastify'
import { env } from '../../env-schema'

const PORT = env.PORT
const app = fastify()

app.listen({ port: PORT }).then(() => {
  console.log(`🌎 Server running on port ${PORT}`)
})
