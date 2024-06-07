import { z } from "zod"

const config = z
  .object({
    BACKEND_PORT: z.coerce.number(),
  })
  .transform((env) => ({
    port: env.BACKEND_PORT,
  }))
  .parse(process.env)

export type Config = typeof config
export default config