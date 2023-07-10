import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function truncateTextWithEllipsis(
  text: string,
  maxLength: number,
): string {
  let truncatedText = text

  if (truncatedText.length > maxLength) {
    truncatedText = truncatedText.substring(0, maxLength - 3) + '...'
  }

  return truncatedText
}

export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString)
  return formatDistanceToNow(date, { addSuffix: true, locale: ptBR })
}
