import { FC, ReactNode } from 'react'
import { Nav } from 'react-bootstrap'
import { Link, useMatch } from 'react-router-dom'

interface Props {
  to: string
  children: ReactNode
}

export const CustomLink: FC<Props> = ({ to, children }) => {
  const match = useMatch(to)

  const linkStyle = (): { color: string; textDecoration: string } => {
    return match
      ? {
          color: 'red',
          textDecoration: 'none',
        }
      : {
          color: 'gray',
          textDecoration: 'underline',
        }
  }

  return (
    <Nav.Link as={Link} to={to} style={linkStyle()}>
      {children}
    </Nav.Link>
  )
}
