import { forwardRef, PropsWithoutRef } from "react"
import { useField } from "react-final-form"

export interface LabeledSelectFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["select"]> {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const LabeledSelectField = forwardRef<HTMLSelectElement, LabeledSelectFieldProps>(
  ({ name, label, outerProps, ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name, {})

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError

    return (
      <div {...outerProps} className="my-4">
        <label>
          {label}
          <select
            className="w-full text-black"
            {...input}
            disabled={submitting}
            {...props}
            ref={ref}
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </label>

        {touched && normalizedError && (
          <div role="alert" style={{ color: "red" }}>
            {normalizedError}
          </div>
        )}

        <style jsx>{`
          label {
            display: flex;
            flex-direction: column;
            align-items: start;
            font-size: 1rem;
          }
          select {
            font-size: 1rem;
            padding: 0.25rem 0.5rem;
            border-radius: 3px;
            border: 1px solid purple;
            appearance: none;
            margin-top: 0.5rem;
          }
        `}</style>
      </div>
    )
  }
)

export default LabeledSelectField
