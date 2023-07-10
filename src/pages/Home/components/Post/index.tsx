/* eslint-disable camelcase */
import { useNavigate } from 'react-router-dom'
import {
  formatRelativeDate,
  truncateTextWithEllipsis,
} from '../../../../utils/formatter'

import * as S from './styles'

interface PostProps {
  number: number
  title: string
  body: string
  created_at: string
}

export function Post({ number, title, body, created_at }: PostProps) {
  const navigate = useNavigate()

  function handleClickGoToPost() {
    navigate(`/${number}`)
  }

  return (
    <S.Container onClick={handleClickGoToPost}>
      <S.Header>
        <h3>{title}</h3>
        <span>{formatRelativeDate(created_at)}</span>
      </S.Header>
      <S.Main>
        <p>{truncateTextWithEllipsis(body, 200)}</p>
      </S.Main>
    </S.Container>
  )
}
