import styled from 'styled-components'

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.base.profile};
  border-radius: 10px;
  padding: 2rem 2.5rem;
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  strong {
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Main = styled.main`
  margin: 1.25rem 0 0.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    line-height: 160%;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.base.subtitle};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
