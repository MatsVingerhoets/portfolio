import { FastifyInstance } from "fastify"

export default async (app: FastifyInstance) => {
  app.get('/', async (request, reply) => {
    return { hello: "test" }
  })
}