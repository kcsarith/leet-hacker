import { Suspense, useState } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getHackPads from "app/hack-pads/queries/getHackPads"
import deleteHackPad from "app/hack-pads/mutations/deleteHackPad"
import { useMutation } from "blitz"
import Card from "app/core/components/Card"

import Modal from "app/core/components/Modal"

const ITEMS_PER_PAGE = 25

export const HackPadsList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ hackPads, hasMore }] = usePaginatedQuery(getHackPads, {
    orderBy: { id: "desc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [hackPadState, setHackPadState] = useState({
    id: 0,
    name: "unknown",
    applyingStyles: "false",
  })
  const [deleteHackPadMutation] = useMutation(deleteHackPad)
  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })
  return (
    <>
      <h1 className="text-2xl md:text-4xl text-center align-center pt-8">{`Newest Hack Pads Page ${page}`}</h1>
      <div className="flex flex-rows justify-center items-center my-6">
        <button
          className="text-center bg-red-800 rounded-sm hover:bg-red-900 w-24 mx-4 my-2 "
          disabled={page === 0}
          onClick={goToPreviousPage}
        >
          Previous
        </button>
        <button
          className="text-center bg-red-800 rounded-sm hover:bg-red-900  w-24 mx-4 my-2 "
          disabled={!hasMore}
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
      <div className=" flex flex-col justify-center items-center md:grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-0 md:gap-8 md:p-12">
        {hackPads.map((hackPad) => (
          <Card
            key={hackPad.id}
            title={hackPad.name}
            message={hackPad.textField}
            href={`hack-pads/${hackPad.id}`}
            source={hackPad.source}
            backgroundSrc={hackPad.backgroundSrc}
            deleteAction={() => {
              setHackPadState({
                id: hackPad.id,
                name: hackPad.name,
                applyingStyles: hackPad.applyStyling,
              })
              setShowDeleteModal(true)
            }}
          />
        ))}
      </div>
      {showDeleteModal ? (
        <Modal
          modalTitle="Delete"
          modalBody={
            <>
              <div className="text-black">
                Are you sure you want to delete the **{hackPadState.name}** hack pad?
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  onClick={async () => {
                    await deleteHackPadMutation({ id: hackPadState.id })
                    await setShowDeleteModal(false)
                    alert(`Deleted the "${hackPadState.name}" hack pad.`)
                  }}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowDeleteModal(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </>
          }
          // submitButtonName="Submit"
          // closeButtonName="Close"
          showModal={showDeleteModal}
          setShowModal={setShowDeleteModal}
          submitButtonAction={undefined}
          closeButtonAction={undefined}
        />
      ) : null}
      <div className="flex justify-center align-center w-full">
        <Link href={Routes.NewHackPadPage()}>
          <button className="text-center bg-red-800 rounded-sm hover:bg-red-900 px-4 py-4 my-4">
            <h1 className="text-xl text-center  ">
              <a>Create new hack pad</a>
            </h1>
          </button>
        </Link>
      </div>
      <div className="flex flex-rows justify-center items-center">
        <button
          className="text-center bg-red-800 rounded-sm hover:bg-red-900 w-24 mx-4 my-2 "
          disabled={page === 0}
          onClick={goToPreviousPage}
        >
          Previous
        </button>
        <button
          className="text-center bg-red-800 rounded-sm hover:bg-red-900  w-24 mx-4 my-2 "
          disabled={!hasMore}
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </>
  )
}

const HackPadsPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>HackPads</title>
      </Head>

      <Suspense fallback={<div>Loading...</div>}>
        <HackPadsList />
      </Suspense>
    </>
  )
}

HackPadsPage.authenticate = true
HackPadsPage.getLayout = (page) => <Layout>{page}</Layout>

export default HackPadsPage
