// src/app.ts
import Fastify from 'fastify'
// Cria e configura a instância do Fastify
const fastify = Fastify({
  logger: true
})
// Adicione suas rotas aqui
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})
// Exporta a instância do Fastify
export default fastify