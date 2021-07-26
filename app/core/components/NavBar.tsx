import logout from "app/auth/mutations/logout"
import login from "app/auth/mutations/login"
import React, { Suspense } from "react"

import { Link, BlitzPage, useMutation, Routes } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Modal from "./Modal"
import Image from "next/image"
import LoginForm from "app/auth/components/LoginForm"
import SignupForm from "app/auth/components/SignupForm"

const NavButton = ({ buttonText, onClickEvent, link }) => {
  return (
    <>
      {link != null ? (
        <Link href={link}>
          <button
            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-3 m-h-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={onClickEvent}
          >
            {buttonText}
          </button>
        </Link>
      ) : (
        <button
          className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-3 m-h-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={onClickEvent}
        >
          {buttonText}
        </button>
      )}
    </>
  )
}

NavButton.defaultProps = {
  buttonText: "Button",
  onClickEvent: () => {},
  link: null,
}

const NavBarRight = () => {
  const [logoutMutation] = useMutation(logout)
  const [loginMutation] = useMutation(login)

  const currentUser = useCurrentUser()
  const [showLoginModal, setShowLoginModal] = React.useState(false)
  const [showSignupModal, setShowSignupModal] = React.useState(false)
  if (currentUser) {
    return (
      <>
        <div className="text-white hidden md:inline">User name: {currentUser.email}</div>
        <NavButton link={Routes.HackPadsPage()} buttonText="Hack!" />
        <NavButton
          onClickEvent={async () => {
            await logoutMutation()
          }}
          link="/"
          buttonText="Logout"
        />
      </>
    )
  } else {
    return (
      <>
        <button
          className="bg-green-500 text-white active:bg-red-600 font-bold uppercase text-sm px-3 m-h-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={async () => {
            await loginMutation({ email: "demolition@demo.com", password: "demolitionman" })
          }}
        >
          DEMOLOGIN
        </button>
        <NavButton
          onClickEvent={async () => {
            await setShowLoginModal(true)
          }}
          buttonText="Login"
        />
        <Modal
          modalTitle="Login"
          modalBody={<LoginForm onSuccess={() => setShowLoginModal(false)} />}
          // submitButtonName="Submit"
          // closeButtonName="Close"
          showModal={showLoginModal}
          setShowModal={setShowLoginModal}
          submitButtonAction={undefined}
          closeButtonAction={undefined}
        />
        <NavButton
          onClickEvent={async () => {
            await setShowSignupModal(true)
          }}
          buttonText="Register"
        />
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
      </>
    )
  }
}

export const NavBar = () => {
  return (
    <nav className="bg-gradient-to-l from-blue-800 via-green-800 to-purple-500">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-8">
          <div className="flex items-center justify-around w-full min-h-full">
            <div className="flex-shrink-0 text-white text-xl">
              <Link href="/">Leet Hacker</Link>
            </div>
            <div className="md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Suspense fallback="Loading...">
                  <NavBarRight />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
