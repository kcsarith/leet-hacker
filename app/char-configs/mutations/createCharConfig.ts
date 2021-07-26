import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateCharConfig = z.object({
  name: z.string(),
  // hackPadId: z.number(),
  // listOrder: z.number(),
  // count: z.number(),
  // color: z.string(),
  // bold: z.boolean(),
  // italics: z.boolean(),
  // strikeThrough: z.boolean(),
  // underline: z.boolean(),
  // fontFamily: z.string(),
  // size: z.number(),
})

export default resolver.pipe(
  resolver.zod(CreateCharConfig),
  resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const charConfig = await db.charConfig.create({ data: input })

    return charConfig
  }
)
