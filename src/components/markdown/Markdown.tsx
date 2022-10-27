import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type MarkdownProps = {
  content: string
}

const mdComponent = (tag: keyof JSX.IntrinsicElements, className: string) => {
  const MarkdownTag = tag as keyof JSX.IntrinsicElements
  return (props: any) => <MarkdownTag className={className}  {...props} />
}

const Markdown = ({ content }: MarkdownProps) => (
  <div>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: mdComponent('h1', 'text-5xl mb-3'),
        h2: mdComponent('h2', 'text-4xl mb-3'),
        h3: mdComponent('h3', 'text-3xl mb-3'),
        h4: mdComponent('h4', 'text-2xl mb-2'),
        h5: mdComponent('h5', 'text-xl mb-2'),
        ul: mdComponent('ul', 'list-disc list-inside my-1'),
        ol: mdComponent('ol', 'list-decimal list-inside my-1'),
        blockquote: mdComponent('blockquote', 'border-l-2 p-3 m-2'),
        thead: mdComponent('thead', 'uppercase text-left'),
        tr: mdComponent('tr', 'border-b border-neutral-700'),
        th: mdComponent('th', 'py-2 px-3'),
        td: mdComponent('td', 'py-2 px-3'),
        pre: mdComponent('pre', 'my-3 py-3 px-5 rounded dark:bg-neutral-800 bg-neutral-100'),
        hr: mdComponent('hr', 'my-4'),
        code: mdComponent('code', 'dark:bg-neutral-800 bg-neutral-100 px-2 py-1 rounded'),
        p: mdComponent('p', 'my-3 leading-relaxed'),
        a: mdComponent('a', 'underline')
      }}
    >
      {content}
    </ReactMarkdown >
  </div >
)


export { Markdown }