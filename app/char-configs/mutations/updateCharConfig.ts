import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateCharConfig = z.object({
  id: z.number(),
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateCharConfig),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const charConfig = await db.charConfig.update({ where: { id }, data })

    return charConfig
  }
)
