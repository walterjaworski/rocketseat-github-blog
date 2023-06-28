import { styled } from 'styled-components'

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.base.post};
  border-radius: 10px;
  padding: 2rem;
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.base.title};
    line-height: 160%;
    flex: 1;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.base.span};
  }
`

export const Main = styled.main`
  margin-top: 1.25rem;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.base.text};
    line-height: 160%;
  }
`
