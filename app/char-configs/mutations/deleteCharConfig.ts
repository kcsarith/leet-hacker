import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteCharConfig = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(DeleteCharConfig),
  resolver.authorize(),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const charConfig = await db.charConfig.deleteMany({ where: { id } })

    return charConfig
  }
)
