/* eslint-disable camelcase */
import { Github } from 'styled-icons/fa-brands'
import {
  ChevronLeft,
  ArrowUpRightFromSquare,
  CalendarDay,
  Comment,
} from 'styled-icons/fa-solid'

import * as S from './styles'
import { IssueProps } from '../..'
import { formatRelativeDate } from '../../../../utils/formatter'

export function Header({ title, created_at, comments, url, user }: IssueProps) {
  return (
    <S.Container>
      <S.Header>
        <strong>
          <a href="/">
            <ChevronLeft size={12} />
            Voltar
          </a>
        </strong>
        <strong>
          <a href={url}>
            Ver no Github <ArrowUpRightFromSquare size={12} />
          </a>
        </strong>
      </S.Header>
      <S.Main>
        <h1>{title}</h1>
      </S.Main>
      <S.Footer>
        <span>
          <Github size={18} /> {user?.login}
        </span>
        <span>
          <CalendarDay size={18} />
          {!!created_at && formatRelativeDate(created_at)}
        </span>
        <span>
          <Comment size={18} />{' '}
          {comments === 0
            ? 'Sem comentários'
            : comments === 1
              ? '1 comentário'
              : `${comments} comentários`}
        </span>
      </S.Footer>
    </S.Container>
  )
}
