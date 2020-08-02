import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { LabeledTextArea } from "app/core/components/LabeledTextArea"
import { LabeledSelectField } from "app/core/components/LabeledSelectField"
import { z } from "zod"
export { FORM_ERROR } from "app/core/components/Form"

export function HackPadForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  return (
    <Form<S>
      {...props}
      className="flex flex-col justify-center items-center jsx-2095682361 form h-full w-full"
    >
      <div className="flex flex-col justify-center items-center">
        <LabeledTextField name="name" label="Name" placeholder="Name" />
        <LabeledTextField
          name="backgroundSrc"
          label="Background URL"
          placeholder="Background URL"
        />
        <LabeledTextField name="source" label="Source" placeholder="Source" />
        <LabeledTextArea name="textField" label="Text Field" placeholder="Text Field" />
        <div className="flex flex-col justify-between items-center w-64">
          <div className="flex justify-between items-center w-64">
            <LabeledSelectField
              name="applyStyling"
              label="Apply Styling"
              placeholder="Apply Styling"
            />
            <LabeledSelectField
              name="includeSpaces"
              label="Include Spaces"
              placeholder="Include Spaces"
            />
          </div>
          <button type="submit" className="text-center bg-red-800 rounded-xl hover:bg-red-900">
            <h1 className="text-xl text-center px-4 py-2 ">
              <a>Proceed with action</a>
            </h1>
          </button>
        </div>
      </div>
    </Form>
  )
}
