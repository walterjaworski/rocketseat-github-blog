import { styled } from 'styled-components'

export const Container = styled.section`
  margin: 4.5rem 0 3rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  h2 {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.base.subtitle};
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.base.span};
  }
`

export const Main = styled.main`
  input[type='text'] {
    width: 100%;
    background: ${({ theme }) => theme.colors.base.input};
    color: ${({ theme }) => theme.colors.base.text};
    border: 1px solid ${({ theme }) => theme.colors.base.border};
    border-radius: 6px;
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.base.label};
    }
  }
`
