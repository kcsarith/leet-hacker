import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCharConfig from "app/char-configs/queries/getCharConfig"
import deleteCharConfig from "app/char-configs/mutations/deleteCharConfig"

export const CharConfig = () => {
  const router = useRouter()
  const charConfigId = useParam("charConfigId", "number")
  const [deleteCharConfigMutation] = useMutation(deleteCharConfig)
  const [charConfig] = useQuery(getCharConfig, { id: charConfigId })

  return (
    <>
      <Head>
        <title>CharConfig {charConfig.id}</title>
      </Head>

      <div>
        <h1>CharConfig {charConfig.id}</h1>
        <pre>{JSON.stringify(charConfig, null, 2)}</pre>

        <Link href={Routes.EditCharConfigPage({ charConfigId: charConfig.id })}>
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm("This will be deleted")) {
              await deleteCharConfigMutation({ id: charConfig.id })
              router.push(Routes.CharConfigsPage())
            }
          }}
          style={{ marginLeft: "0.5rem" }}
        >
          Delete
        </button>
      </div>
    </>
  )
}

const ShowCharConfigPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.CharConfigsPage()}>
          <a>CharConfigs</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <CharConfig />
      </Suspense>
    </div>
  )
}

ShowCharConfigPage.authenticate = true
ShowCharConfigPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowCharConfigPage
