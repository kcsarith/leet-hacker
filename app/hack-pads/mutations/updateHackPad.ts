import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateHackPad = z.object({
  id: z.number(),
  name: z.string().optional(),
  source: z.string().optional(),
  textField: z.string().optional(),
  applyStyling: z.string().optional(),
  includeSpaces: z.string().optional(),
  // userId: z.number().optional(),
  backgroundSrc: z.string().optional(),
})

export default resolver.pipe(
  resolver.zod(UpdateHackPad),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const hackPad = await db.hackPad.update({ where: { id }, data })

    return hackPad
  }
)
