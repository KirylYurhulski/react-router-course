import { FC, ReactNode } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface Props {
  to: string,
  children: ReactNode
}

export const CustomBrand: FC<Props> = ({ to, children }) => {
  return (
    <Navbar.Brand as={Link} to={to}>
      {children}
    </Navbar.Brand>
  )
}
