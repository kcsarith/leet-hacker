import { AuthenticationError, Link, useMutation, Routes } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/Form"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"

type LoginFormProps = {
  onSuccess?: () => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  async function submitForm(values) {
    try {
      await loginMutation(values)
      props.onSuccess?.()
      alert("Login Success")
    } catch (error) {
      if (error instanceof AuthenticationError) {
        alert("Sorry, those credentials are invalid")
        return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
      } else {
        // alert("Sorry, we had an unexpected error. Please try again. - " + error.toString())
        return {
          [FORM_ERROR]:
            "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
        }
      }
    }
  }

  return (
    <div className="w-full">
      <Form
        schema={Login}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => submitForm(values)}
      >
        <LabeledTextField name="email" label="Email" placeholder="Email" />
        <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="submit"
            onClick={(values) => submitForm(values)}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => props.onSuccess?.()}
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Close
          </button>
        </div>
      </Form>
    </div>
  )
}

export default LoginForm
