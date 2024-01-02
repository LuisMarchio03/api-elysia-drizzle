import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'

import { getClients } from './routes/clients/get-clients'
import { registerClient } from './routes/clients/register-client'

const app = new Elysia()
  .use(
    cors({
      credentials: true,
      allowedHeaders: ['content-type'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
      origin: (request): boolean => {
        const origin = request.headers.get('origin')

        if (!origin) {
          return false
        }

        return true
      },
    }),
  )
  .use(getClients)
  .use(registerClient)

app.listen(8888)

console.log(
  `🔥 HTTP server running at ${app.server?.hostname}:${app.server?.port}`,
)