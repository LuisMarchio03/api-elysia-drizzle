import { clients } from '@/db/schemas'
import { configs } from '@/db/schemas/config'

import { db } from '@/db/connection'
import { z } from 'zod'

import Elysia from 'elysia'
import { eq, sql } from 'drizzle-orm'


interface IDataCnpj {
  razao_social: string,
  simples: {
    data_opcao_mei: string
  }
}

const registerClientBodySchema = z.object({
  name: z.string(),
  cnpj: z.string(),
  password: z.string(),
})

export const registerClient = new Elysia().post(
  '/clients',
  async ({ body, set }) => {
    try {
      const { cnpj, name, password } = registerClientBodySchema.parse(body)

      const alreadyExists = await db.query.clients.findFirst({
        where: eq(clients.cnpj, cnpj)
      })

      if (alreadyExists) {
        throw new Error("Client already exists")
      }

      const res = await fetch(`https://publica.cnpj.ws/cnpj/${cnpj}`)
      const data: IDataCnpj = await res.json() as IDataCnpj
      const { razao_social: legal_entity_name, simples: { data_opcao_mei: opening_date } } = data
          
      await db.insert(clients).values({
        cnpj, legal_entity_name, name, opening_date, password
      })
    
      //TODO: Junto com a criação de um novo cliente, eu devo criar um table no banco de dados para armazenar as configurações desse cliente (WHITE-LABEL) 
      // console.log("created", created)
      // await db.insert(configs).values({
      //   company_name,
      //   // clientId
      // })

      set.status = 201
    } catch {
      set.status = 400
    }
  },
)