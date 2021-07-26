import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createCharConfig from "app/char-configs/mutations/createCharConfig"
import { CharConfigForm, FORM_ERROR } from "app/char-configs/components/CharConfigForm"

const NewCharConfigPage: BlitzPage = () => {
  const router = useRouter()
  const [createCharConfigMutation] = useMutation(createCharConfig)

  return (
    <div>
      <h1>Create New CharConfig</h1>

      <CharConfigForm
        submitText="Create CharConfig"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateCharConfig}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const charConfig = await createCharConfigMutation(values)
            router.push(Routes.ShowCharConfigPage({ charConfigId: charConfig.id }))
          } catch (error) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <Link href={Routes.CharConfigsPage()}>
          <a>CharConfigs</a>
        </Link>
      </p>
    </div>
  )
}

NewCharConfigPage.authenticate = true
NewCharConfigPage.getLayout = (page) => <Layout title={"Create New CharConfig"}>{page}</Layout>

export default NewCharConfigPage
