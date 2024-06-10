import { Button, Col, Container, Row } from 'react-bootstrap'
import { useUser } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const user = useUser()

  return (
    <Container>
      <Row>
        <Col>Admin Panel</Col>
      </Row>
      <Row>
        <Col>{`Hello, ${user.user.email}`}</Col>
      </Row>
      <Row>
        <Col>
          <Button variant="outline-danger" onClick={() => user.logOut()}>
            Log Out
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
