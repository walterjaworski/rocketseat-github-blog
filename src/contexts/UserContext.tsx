/* eslint-disable camelcase */
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface User {
  avatarUrl: string
  bio: string
  htmlUrl: string
  login: string
  name: string
  location: string
  company: string
  followers: number
}

interface UserContextType {
  userData: User | undefined
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState<User | undefined>()

  const fetchUserData = useCallback(async () => {
    try {
      const response = await api.get('/users/walterjaworski')

      const {
        avatar_url,
        bio,
        html_url,
        login,
        name,
        location,
        company,
        followers,
      } = response.data

      const newData: User = {
        avatarUrl: avatar_url,
        htmlUrl: html_url,
        bio,
        login,
        name,
        location,
        company,
        followers,
      }

      setUserData(newData)
    } catch (error) {
      console.error('Error:', error)
    }
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  )
}
