/* eslint-disable camelcase */
import { useCallback, useEffect, useState } from 'react'
import { UserProps } from '../Home/components/Header'

import { Content } from './components/Content'
import { Header } from './components/Header'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'

export interface IssueProps {
  title?: string | undefined
  body?: string | undefined
  created_at?: string | undefined
  comments?: number | undefined
  user?: UserProps | undefined
  url?: string | undefined
}

export function Post() {
  const { number } = useParams()

  const [issueDetails, setIssueDetails] = useState<IssueProps | null>(null)

  const getIssueDetails = useCallback(async () => {
    try {
      const response = await api.get(
        `/repos/walterjaworski/rocketseat-github-blog/issues/${number}`,
      )
      const { title, body, created_at, comments, user, url } = response.data

      const newData: IssueProps = {
        title,
        body,
        created_at,
        comments,
        user,
        url,
      }
      setIssueDetails(newData)
    } catch (error) {
      console.error('Error:', error)
    }
  }, [])

  useEffect(() => {
    getIssueDetails()
  }, [getIssueDetails])

  return (
    <>
      <Header
        title={issueDetails?.title}
        created_at={issueDetails?.created_at}
        comments={issueDetails?.comments}
        url={issueDetails?.url}
        user={issueDetails?.user}
      />
      <Content body={issueDetails?.body} />
    </>
  )
}
