import { FC } from 'react'

interface Props {
  id: string
  title: string
  type: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage: string
}

export const InputWithValidation: FC<Props> = ({
  id,
  title,
  type,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="col-md-4">
      <label htmlFor={id} className="form-label">
        {title}
      </label>
      <input
        type={type}
        className="form-control is-valid"
        id={id}
        required
        value={value}
        onChange={event => {
          onChange(event)
        }}
      />
      <div className="invalid-feedback">{errorMessage}</div>
    </div>
  )
}
