import styled from 'styled-components'

interface TruncatedTextProps {
  maxLines: number
}

export const TruncatedText = styled.p<TruncatedTextProps>`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.maxLines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
