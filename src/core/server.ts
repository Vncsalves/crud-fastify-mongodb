// src/server.ts
import app from './app'

const port = 3000
const host = '0.0.0.0'

app.listen({ port, host }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`Servidor rodando em ${address}`)
})