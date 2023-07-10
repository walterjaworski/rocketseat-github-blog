import { ReactNode } from 'react'

import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import * as S from './styles'
import { IssueProps } from '../..'

interface CodeProps {
  node: ReactNode
  inline: boolean
  className: string
  children: ReactNode
}

export function Content({ body }: IssueProps) {
  console.log({ body })
  const content = `# A Importância do HTML para o Desenvolvimento Web
  O HTML (HyperText Markup Language) é a espinha dorsal de qualquer site na Internet. Ele fornece a estrutura básica e os elementos necessários para exibir conteúdo na web. Sem o HTML, não teríamos páginas da web como conhecemos hoje.
  ## O que é HTML?
  O HTML é uma linguagem de marcação que usa tags para definir a estrutura e o significado do conteúdo em uma página da web. Ele permite que os desenvolvedores organizem e apresentem informações de forma hierárquica. Além disso, o HTML é compatível com outros recursos da web, como CSS e JavaScript.
  ## Estrutura básica do HTML
  Um documento HTML consiste em uma série de elementos aninhados. Aqui está uma estrutura básica de um documento HTML:
  \`\`\`html
    <!DOCTYPE html>
    <html>
      <head>
        <title>Título da Página</title>
      </head>
      <body>
        <h1>Meu Primeiro Site</h1>
        <p>Olá, mundo!</p>
      </body>
    </html>
  \`\`\``

  const Code = ({ node, inline, className, children, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        {...props}
        children={String(children).replace(/\n$/, '')}
        style={dracula}
        language={match[1]}
        PreTag="div"
      />
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    )
  }

  return (
    <S.Container remarkPlugins={[remarkGfm]} components={{ code: Code }}>
      {body}
    </S.Container>
  )
}
