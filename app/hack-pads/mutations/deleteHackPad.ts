import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteHackPad = z.object({
  id: z.number(),
})

export default resolver.pipe(resolver.zod(DeleteHackPad), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const hackPad = await db.hackPad.deleteMany({ where: { id } })

  return hackPad
})
