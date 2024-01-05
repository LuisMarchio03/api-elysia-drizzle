import Elysia from 'elysia'
import { db } from '@/db/connection'

export const getClients = new Elysia()
  .get('/clients', async () => {
    return await db.query.clients.findMany()
  })
  