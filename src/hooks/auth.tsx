import React, { createContext, useCallback, useState, useContext } from 'react'

import { api } from '../services/api'

interface User {
  id: string
  email: string
  username: string
  active: boolean
  name: string
  phone: string
  birthday: string
  verified_email: boolean
  invite_guid: string
  zip_code: string
  street: string
  number: string
  region: string
  city: string
  state: string
}

interface AuthState {
  token: string
  user: User
}

interface LoginCredentials {
  usernameoremail: string
  password: string
}

interface AuthContextData {
  user: User
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
  updateProfile: (user: User) => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@SeuBet:token')
    const user = localStorage.getItem('@SeuBet:user')

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const login = useCallback(async ({ usernameoremail, password }) => {
    const response = await api.post('sessions', {
      usernameoremail,
      password
    })

    const { token, user } = response.data

    localStorage.setItem('@SeuBet:token', token)
    localStorage.setItem('@SeuBet:user', JSON.stringify(user))

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({ token, user })
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('@SeuBet:token')
    localStorage.removeItem('@SeuBet:user')

    setData({} as AuthState)
  }, [])

  const updateProfile = useCallback(
    (user: User) => {
      localStorage.setItem('@SeuBet:user', JSON.stringify(user))

      setData({
        token: data.token,
        user
      })
    },
    [setData, data.token]
  )

  return (
    <AuthContext.Provider
      value={{ user: data.user, login, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth (): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
