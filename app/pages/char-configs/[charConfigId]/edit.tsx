import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getCharConfig from "app/char-configs/queries/getCharConfig"
import updateCharConfig from "app/char-configs/mutations/updateCharConfig"
import { CharConfigForm, FORM_ERROR } from "app/char-configs/components/CharConfigForm"

export const EditCharConfig = () => {
  const router = useRouter()
  const charConfigId = useParam("charConfigId", "number")
  const [charConfig, { setQueryData }] = useQuery(
    getCharConfig,
    { id: charConfigId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateCharConfigMutation] = useMutation(updateCharConfig)

  return (
    <>
      <Head>
        <title>Edit CharConfig {charConfig.id}</title>
      </Head>

      <div>
        <h1>Edit CharConfig {charConfig.id}</h1>
        <pre>{JSON.stringify(charConfig)}</pre>

        <CharConfigForm
          submitText="Update CharConfig"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateCharConfig}
          initialValues={charConfig}
          onSubmit={async (values) => {
            try {
              const updated = await updateCharConfigMutation({
                id: charConfig.id,
                ...values,
              })
              await setQueryData(updated)
              router.push(Routes.ShowCharConfigPage({ charConfigId: updated.id }))
            } catch (error) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </div>
    </>
  )
}

const EditCharConfigPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditCharConfig />
      </Suspense>

      <p>
        <Link href={Routes.CharConfigsPage()}>
          <a>CharConfigs</a>
        </Link>
      </p>
    </div>
  )
}

EditCharConfigPage.authenticate = true
EditCharConfigPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditCharConfigPage
