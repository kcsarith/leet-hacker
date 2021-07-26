import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getHackPad from "app/hack-pads/queries/getHackPad"

import TextStats from "app/hack-pads/components/TextStats"

import updateHackPad from "app/hack-pads/mutations/updateHackPad"
import { HackPadForm, FORM_ERROR } from "app/hack-pads/components/HackPadForm"

export const HackPad = () => {
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
        <title>HackPad {hackPad.id}</title>
      </Head>
      <div
        className="w-full bg-center bg-cover h-48"
        style={{
          backgroundImage: `url('${hackPad.backgroundSrc}')`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
              {hackPad.name}
            </h1>
            <p>In {hackPad.source}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <TextStats hackPad={hackPad} />
        <div className="flex flex-col justify-center items-center ">
          <div className="bg-blue-900 rounded-3xl w-full h-full lg:ml-24 lg:mr-36 mx-auto my-12 py-24">
            <h1 className="text-4xl text-center m-8">EDIT THE HACK PAD</h1>
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
        </div>
      </div>
    </>
  )
}

const ShowHackPadPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HackPad />
      </Suspense>
    </div>
  )
}

ShowHackPadPage.authenticate = true
ShowHackPadPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowHackPadPage
