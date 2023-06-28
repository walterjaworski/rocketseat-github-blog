import { styled } from 'styled-components'

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.base.profile};
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: grid;
  grid-template-columns: 9.25rem 1fr;
  gap: 2rem;
`

export const Avatar = styled.div`
  img {
    border-radius: 8px;
  }
`

export const Data = styled.div``

export const DataHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    line-height: 160%;
  }

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

export const DataMain = styled.div`
  margin: 0.5rem 0 1.5rem;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.base.text};
    line-height: 160%;
  }
`

export const DataFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
`
