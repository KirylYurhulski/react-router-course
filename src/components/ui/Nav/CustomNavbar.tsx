import { Container, Nav, Navbar } from 'react-bootstrap'
import { CustomBrand } from './CustomBrand'
import { CustomLink } from './CustomLink'

export const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      bg="primary"
      data-bs-theme="light"
      className="bg-body-tertiary"
    >
      <Container>
        <CustomBrand to={'/'}>React Router Course</CustomBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <CustomLink to={'/'}>Home</CustomLink>
            <CustomLink to={'/blog'}>Blog</CustomLink>
            <CustomLink to={'/contact'}>Contact</CustomLink>
            <CustomLink to={'/admin'}>Admin</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
