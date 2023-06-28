import { styled } from 'styled-components'

import Cover from '../../assets/cover.png'

export const Container = styled.header`
  width: 100%;
  height: 296px;
  background: url(${Cover}) center center no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`
