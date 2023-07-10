import { styled } from 'styled-components'

import ReactMarkdown from 'react-markdown'

export const Container = styled(ReactMarkdown)`
  color: ${({ theme }) => theme.colors.base.text};
  margin: 2rem 0;
  padding: 0 2.5rem;

  * {
    margin: 0 0 1.5rem;
  }

  ul {
    list-style-position: outside;
    margin: 0 2.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.white};
  }
`
