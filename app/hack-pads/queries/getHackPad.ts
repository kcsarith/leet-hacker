import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetHackPad = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetHackPad), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const hackPad = await db.hackPad.findFirst({ where: { id } })

  if (!hackPad) throw new NotFoundError()

  return hackPad
})
