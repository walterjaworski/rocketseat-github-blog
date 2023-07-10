/* eslint-disable camelcase */
import { Github } from 'styled-icons/fa-brands'
import {
  Building,
  UserGroup,
  ArrowUpRightFromSquare,
} from 'styled-icons/fa-solid'

import * as S from './styles'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

export interface UserProps {
  avatarUrl: string
  bio: string
  htmlUrl: string
  login: string
  name: string
  location: string
  company: string
  followers: number
}

export function HeaderHome() {
  const [userData, setUserData] = useState<UserProps | null>(null)

  const getUserData = useCallback(async () => {
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

      const newData: UserProps = {
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
    getUserData()
  }, [getUserData])

  return (
    <S.Container>
      <S.Avatar>
        <img src={userData?.avatarUrl || ''} alt="" width="148" height="148" />
      </S.Avatar>
      <S.Data>
        <S.DataHeader>
          <h1>{userData?.name || 'Loading...'}</h1>
          <strong>
            <a href={userData?.htmlUrl || '#'}>
              Github <ArrowUpRightFromSquare size={18} />
            </a>
          </strong>
        </S.DataHeader>
        <S.DataMain>
          <p>{userData?.bio || 'Loading...'}</p>
        </S.DataMain>
        <S.DataFooter>
          <span>
            <Github size={18} /> {userData?.login || 'Loading...'}
          </span>
          <span>
            <Building size={18} /> {userData?.company || 'Loading...'}
          </span>
          <span>
            <UserGroup size={18} /> {userData?.followers || 0} seguidores
          </span>
        </S.DataFooter>
      </S.Data>
    </S.Container>
  )
}
