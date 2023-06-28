import * as S from './styles'

import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <S.Container>
      <div>
        <img src={Logo} alt="" />
      </div>
    </S.Container>
  )
}
