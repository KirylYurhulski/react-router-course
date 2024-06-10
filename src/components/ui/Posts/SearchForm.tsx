import { FC } from 'react'
import { Col, Form } from 'react-bootstrap'

interface Props {
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
}

export const SearchForm: FC<Props> = ({ onChange }) => {
  return (
    <Form>
      <Form.Group className="row justify-content-center mb-1">
        <Col sm={6}>
          <Form.Control
            id="inputSearchTitle"
            type="search"
            placeholder="Search by Title..."
            onChange={event => onChange(event)}
          />
        </Col>
      </Form.Group>
    </Form>
  )
}
