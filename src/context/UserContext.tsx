import React, { FC, ReactNode, useContext, useState } from 'react'
import { User } from '../models/User'

interface Context {
  user: User
  signIn: (email: string, password: string, callback: Function) => void
  logOut: () => void
}

const UserContext = React.createContext<Context>({
  user: { id: 0, email: '', password: '' },
  signIn: () => {},
  logOut: () => {},
})

export const useUser = (): Context => {
  return useContext(UserContext)
}

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({ id: 0, email: '', password: '' })

  const signIn = (email: string, password: string, callback: Function) => {
    setUser({
      id: Math.random(),
      email,
      password,
    })
    callback()
  }

  const logOut = () => {
    setUser({ id: 0, email: '', password: '' })
  }

  return (
    <UserContext.Provider
      value={{
        user,
        signIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
