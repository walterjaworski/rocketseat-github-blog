import * as S from './styles'

export function Search() {
  return (
    <S.Container>
      <S.Header>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </S.Header>
      <S.Main>
        <input type="text" placeholder="Buscar conteúdo" />
      </S.Main>
    </S.Container>
  )
}
