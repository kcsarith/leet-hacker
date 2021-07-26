import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetHackPadsInput
  extends Pick<Prisma.HackPadFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetHackPadsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: hackPads,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.hackPad.count({ where }),
      query: (paginateArgs) => db.hackPad.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      hackPads,
      nextPage,
      hasMore,
      count,
    }
  }
)
