import { FC, ReactNode } from 'react'
import { useUser } from '../context/UserContext'
import { Navigate, useLocation } from 'react-router-dom'

interface Props {
  children: ReactNode
}

export const RequireAuth: FC<Props> = ({ children }) => {
  const location = useLocation()
  const user = useUser()

  if (!user.user.id) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return <>{children}</>
}
