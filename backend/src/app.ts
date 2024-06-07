import fastify from 'fastify'
import AutoLoad from "@fastify/autoload"
import path from "path"
import config from "./config"

const app = fastify()
const start = async () => {
  try {
    await app.register(AutoLoad, {
      dir: path.join(__dirname, "..", "src/routes"),
      ignorePattern: /^.*(?:test|spec).(?:js|ts)$|^.*\/utils\/.*$/,
    })
    app.listen({ port: 3100, host: "0.0.0.0" }, (err, address) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      console.log(`Server listening at ${address}`)
    })
  } catch (err) {
    console.log(err)
    app.log.error(err)
    process.exit(1)
  }
}
start()