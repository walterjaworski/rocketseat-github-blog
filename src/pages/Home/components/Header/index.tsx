import { Github } from 'styled-icons/fa-brands'
import {
  Building,
  UserGroup,
  ArrowUpRightFromSquare,
} from 'styled-icons/fa-solid'

import * as S from './styles'

export function HeaderHome() {
  return (
    <S.Container>
      <S.Avatar>
        <img
          src="https://github.com/walterjaworski.png"
          alt=""
          width="148"
          height="148"
        />
      </S.Avatar>
      <S.Data>
        <S.DataHeader>
          <h1>Walter Jaworski</h1>
          <strong>
            <a href="#">
              Github <ArrowUpRightFromSquare size={18} />
            </a>
          </strong>
        </S.DataHeader>
        <S.DataMain>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </S.DataMain>
        <S.DataFooter>
          <span>
            <Github size={18} /> walterjaworski
          </span>
          <span>
            <Building size={18} /> Rocketseat
          </span>
          <span>
            <UserGroup size={18} /> 32 seguidores
          </span>
        </S.DataFooter>
      </S.Data>
    </S.Container>
  )
}
