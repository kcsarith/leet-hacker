import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getHackPad from "app/hack-pads/queries/getHackPad"
import updateHackPad from "app/hack-pads/mutations/updateHackPad"
import { HackPadForm, FORM_ERROR } from "app/hack-pads/components/HackPadForm"

export const EditHackPad = () => {
  const router = useRouter()
  const hackPadId = useParam("hackPadId", "number")
  const [hackPad, { setQueryData }] = useQuery(
    getHackPad,
    { id: hackPadId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateHackPadMutation] = useMutation(updateHackPad)

  return (
    <>
      <Head>
        <title>Edit HackPad {hackPad.id}</title>
      </Head>

      <div>
        <h1>Edit HackPad {hackPad.id}</h1>
        <pre>{JSON.stringify(hackPad)}</pre>

        <HackPadForm
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateHackPad}
          initialValues={hackPad}
          onSubmit={async (values) => {
            try {
              const updated = await updateHackPadMutation({
                id: hackPad.id,
                ...values,
              })
              await setQueryData(updated)
              router.push(Routes.ShowHackPadPage({ hackPadId: updated.id }))
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

const EditHackPadPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditHackPad />
      </Suspense>

      <p>
        <Link href={Routes.HackPadsPage()}>
          <a>HackPads</a>
        </Link>
      </p>
    </div>
  )
}

EditHackPadPage.authenticate = true
EditHackPadPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditHackPadPage
