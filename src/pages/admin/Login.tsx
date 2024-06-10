import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useUser } from '../../context/UserContext'

export const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const user = useUser()
  const [validated, setValidated] = useState(false)

  const fromPage = location.state?.from?.pathname || '/'

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()

    const form = event.currentTarget

    if (form.checkValidity()) {
      user.signIn(form.userEmail.value, form.userPassword.value, () => {
        navigate(fromPage, { replace: true })
      })
      setValidated(true)
    }
  }

  return (
    <Container>
      <Row style={{ marginTop: '10%' }}>
        <Col>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group
              className="row justify-content-center mb-1"
              controlId="loginFormEmail"
            >
              <Form.Label column sm="2">
                Email:
              </Form.Label>
              <Col sm="4">
                <Form.Control type="email" name="userEmail" required />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group
              className="row justify-content-center mb-2"
              controlId="loginFormPassword"
            >
              <Form.Label column sm="2">
                Password:
              </Form.Label>
              <Col sm="4">
                <Form.Control type="password" name="userPassword" required />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter a password.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group
              className="row justify-content-center mb-2"
              controlId="loginFormButtonSubmit"
            >
              <Col sm="2">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
