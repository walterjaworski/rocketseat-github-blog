import { styled } from 'styled-components'

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.base.post};
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 2rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors.base.text};
  }

  cursor: pointer;
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 160%;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.base.title};
    }
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.base.span};
    text-align: right;
  }
`

export const Main = styled.main`
  margin-top: 1.25rem;

  p {
    font-size: 1rem;
    line-height: 160%;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.base.text};
    }
  }
`
