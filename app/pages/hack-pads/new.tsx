import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createHackPad from "app/hack-pads/mutations/createHackPad"
import { HackPadForm, FORM_ERROR } from "app/hack-pads/components/HackPadForm"

const NewHackPadPage: BlitzPage = () => {
  const router = useRouter()
  const [createHackPadMutation] = useMutation(createHackPad)

  return (
    <div className="flex flex-col justify-center items-center h-full pt-24">
      <h1 className="text-4xl text-center align-center pt-8">Create New HackPad</h1>

      <HackPadForm
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateHackPad}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const hackPad = await createHackPadMutation(values)
            router.push(Routes.ShowHackPadPage({ hackPadId: hackPad.id }))
          } catch (error) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />
      <div className="flex justify-center align-center w-full my-12"></div>
    </div>
  )
}

NewHackPadPage.authenticate = true
NewHackPadPage.getLayout = (page) => <Layout title={"Create New HackPad"}>{page}</Layout>

export default NewHackPadPage
