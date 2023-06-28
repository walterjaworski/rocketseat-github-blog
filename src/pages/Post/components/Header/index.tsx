import { Github } from 'styled-icons/fa-brands'
import {
  ChevronLeft,
  ArrowUpRightFromSquare,
  CalendarDay,
  Comment,
} from 'styled-icons/fa-solid'

import * as S from './styles'

export function Header() {
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
          <a href="#">
            Ver no Github <ArrowUpRightFromSquare size={12} />
          </a>
        </strong>
      </S.Header>
      <S.Main>
        <h1>JavaScript data types and data structures</h1>
      </S.Main>
      <S.Footer>
        <span>
          <Github size={18} /> walterjaworski
        </span>
        <span>
          <CalendarDay size={18} />
          Há 1 dia
        </span>
        <span>
          <Comment size={18} /> 5 comentários
        </span>
      </S.Footer>
    </S.Container>
  )
}
