import Modal from "./Modal"

import React, { Suspense } from "react"
import SignupForm from "app/auth/components/SignupForm"

import { Link, BlitzPage, useMutation, Routes } from "blitz"

export const HomepageHeader = () => {
  const [showSignupModal, setShowSignupModal] = React.useState(false)
  return (
    <>
      <div className="w-full">
        <div
          className="container mx-auto rounded-t shadow bg-cover bg-bottom"
          style={{
            backgroundImage:
              'url("https://t3.ftcdn.net/jpg/01/68/76/94/360_F_168769418_GHALsqlIr8jlG6iIhIfuSPOr2hnWk53r.jpg")',
          }}
        >
          <div className="flex flex-col justify-center items-center text-center text-white h-96 py-8">
            <h1 className="font-sans text-4xl">Where Leet Code meets HackerRank</h1>
            <h2 className="text-xl tracking-wide mt-2 mb-4">Become an ELITE HACKER!</h2>
            <button
              className="rounded bg-pink-600 text-white py-2 px-4 font-bold"
              type="button"
              onClick={() => setShowSignupModal(true)}
            >
              Are you ready?
            </button>
          </div>
        </div>
        <div className="text-black">
          <Modal
            modalTitle="Register"
            modalBody={<SignupForm onSuccess={() => setShowSignupModal(false)} />}
            // submitButtonName="Submit"
            // closeButtonName="Close"
            showModal={showSignupModal}
            setShowModal={setShowSignupModal}
            submitButtonAction={undefined}
            closeButtonAction={undefined}
          />
        </div>
      </div>
    </>
  )
}

export default HomepageHeader
