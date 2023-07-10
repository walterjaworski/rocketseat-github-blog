/* eslint-disable camelcase */
import { useCallback, useEffect, useState } from 'react'

import { Post } from '../Post'

import * as S from './style'
import { UserProps } from '../Header'
import { api } from '../../../../lib/axios'

interface IssueProps {
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  user: UserProps
  url: string
}

export function PostsList() {
  const [issuesList, setIssuesList] = useState<IssueProps[] | undefined>(
    undefined,
  )

  const getIssuesList = useCallback(async () => {
    try {
      const response = await api.get(
        '/search/issues?q=%20repo:walterjaworski/rocketseat-github-blog',
      )

      const newData = response.data.items.map((item: IssueProps) => {
        const { number, title, body, created_at, comments, user, url } = item

        return {
          number,
          title,
          body,
          created_at,
          comments,
          user,
          url,
        }
      })

      setIssuesList(newData)
    } catch (error) {
      console.error('Error:', error)
    }
  }, [])

  useEffect(() => {
    getIssuesList()
  }, [getIssuesList])

  console.log({ issuesList })

  return (
    <S.Container>
      {issuesList !== undefined ? (
        issuesList.map((issue) => {
          return (
            <Post
              key={issue.number}
              number={issue.number}
              title={issue.title}
              body={issue.body}
              created_at={issue.created_at}
            />
          )
        })
      ) : (
        <span>não tem post</span>
      )}
    </S.Container>
  )
}
