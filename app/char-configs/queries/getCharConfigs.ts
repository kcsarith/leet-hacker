import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetCharConfigsInput
  extends Pick<Prisma.CharConfigFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetCharConfigsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: charConfigs,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.charConfig.count({ where }),
      query: (paginateArgs) => db.charConfig.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      charConfigs,
      nextPage,
      hasMore,
      count,
    }
  }
)
