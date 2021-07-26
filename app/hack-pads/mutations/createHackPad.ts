import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateHackPad = z.object({
  name: z.string(),
  source: z.string().optional(),
  textField: z.string().optional(),
  applyStyling: z.string().optional(),
  includeSpaces: z.string().optional(),
  // userId: z.number().optional(),
  backgroundSrc: z.string().optional(),
})

export default resolver.pipe(resolver.zod(CreateHackPad), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const hackPad = await db.hackPad.create({ data: input })

  return hackPad
})
