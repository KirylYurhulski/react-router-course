import { Link, Outlet } from 'react-router-dom'
import { Container, Nav, Navbar, Row } from 'react-bootstrap'
import { CustomNavbar } from './Nav/CustomNavbar'

export const Layout = () => {
  return (
    <Container style={{ marginTop: '15px' }}>
      <Row className="mb-3">
        <CustomNavbar />
      </Row>
      <Row>
        <Outlet />
      </Row>
      <Row className="justify-content-md-center">
        <hr />
        2024
      </Row>
    </Container>
  )
}
