import { TruncatedText } from '../../../../utils/truncateWithCss'
import * as S from './styles'

export function Post() {
  return (
    <S.Container>
      <S.Header>
        <h3>JavaScript data types and data structures</h3>
        <span>Há 1 dia</span>
      </S.Header>
      <S.Main>
        <TruncatedText maxLines={4}>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </TruncatedText>
      </S.Main>
    </S.Container>
  )
}
