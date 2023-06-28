import { styled } from 'styled-components'

import ReactMarkdown from 'react-markdown'

export const Container = styled(ReactMarkdown)`
  color: ${({ theme }) => theme.colors.base.text};
  margin-bottom: 2rem;

  * {
    margin: 1rem 0;
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
