import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCharConfigs from "app/char-configs/queries/getCharConfigs"

const ITEMS_PER_PAGE = 100

export const CharConfigsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ charConfigs, hasMore }] = usePaginatedQuery(getCharConfigs, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {charConfigs.map((charConfig) => (
          <li key={charConfig.id}>
            <Link href={Routes.ShowCharConfigPage({ charConfigId: charConfig.id })}>
              <a>{charConfig.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      {/* <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button> */}
    </div>
  )
}

const CharConfigsPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>CharConfigs</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewCharConfigPage()}>
            <a>Create CharConfig</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <CharConfigsList />
        </Suspense>
      </div>
    </>
  )
}

CharConfigsPage.authenticate = true
CharConfigsPage.getLayout = (page) => <Layout>{page}</Layout>

export default CharConfigsPage
