import React from "react"

export const Modal = ({
  modalTitle,
  modalBody,
  submitButtonName,
  closeButtonName,
  submitButtonAction,
  closeButtonAction,
  showModal,
  setShowModal,
}) => {
  // const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      {showModal ? (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
                <div className="bg-gradient-to-l from-pink-800 via-red-800 to-pink-500">
                  <h1 className="text-4xl font-medium text-center py-4 text-white">{modalTitle}</h1>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"></div>
                {modalBody}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

Modal.defaultProps = {
  modalTitle: "THE MODAL",
  modalBody: (
    <div className="mt-2">
      <p className="text-sm text-gray-500">
        Are you sure you want to deactivate your account? All of your data will be permanently
        removed. This action cannot be undone.
      </p>
    </div>
  ),
  submitButtonName: "Submit",
  closeButtonName: "Close",
  icon: (
    <svg
      className="h-6 w-6 text-red-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  ),
}

export default Modal
