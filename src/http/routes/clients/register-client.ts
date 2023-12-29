import { clients } from '@/db/schemas'

import { db } from '@/db/connection'
import { z } from 'zod'

import Elysia from 'elysia'

const registerClientBodySchema = z.object({
  name: z.string(),
  cnpj: z.string(),
  opening_date: z.string(),
  legal_entity_name: z.string(),
  password: z.string(),
})

export const registerClient = new Elysia().post(
  '/clients',
  async ({ body, set }) => {
    const { cnpj, legal_entity_name, name, opening_date, password } = registerClientBodySchema.parse(body)

    //TODO: Buscar legal_entity_name (Razão social) e opening_date (Data de abertura) -> Via api da receita federal com base no CNPJ
    //TODO: Junto com a criação de um novo cliente, eu devo criar um table no banco de dados para armazenar as configurações desse cliente (WHITE-LABEL) 

    await db.insert(clients).values({
      cnpj, legal_entity_name, name, opening_date, password
    })

    set.status = 401
  },
)