import Elysia from 'elysia'
import { db } from '@/db/connection'
import { eq } from 'drizzle-orm'
import { clients } from '@/db/schemas'

export const getClient = new Elysia()
  .get('/clients/:id', async ({ params }) => {
    const { id }: { id: string } = params;
    
    return await db.query.clients.findFirst({
      where: eq(clients.id, id)
    })
  })
  