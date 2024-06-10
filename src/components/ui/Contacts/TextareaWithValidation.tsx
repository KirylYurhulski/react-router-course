import { FC } from 'react'

interface Props {
  id: string
  title: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  errorMessage: string
}

export const TextareaWithValidation: FC<Props> = ({
  id,
  title,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {title}
      </label>
      <textarea
        className="form-control"
        id={id}
        required
        value={value}
        onChange={event => onChange(event)}
      ></textarea>
      <div className="invalid-feedback">
        {errorMessage}
      </div>
    </div>
  )
}
