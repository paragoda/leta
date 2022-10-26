import { Remark } from 'react-remark'

type MarkdownProps = {
  content: string
}

// const Markdown = ({ content }: MarkdownProps) => <div
//   dangerouslySetInnerHTML={{ __html: mdToHtml(content) }}
//   className={styles.md}
// />


const mdComponent = (tag: keyof JSX.IntrinsicElements, className: string) => {
  const MarkdownTag = tag as keyof JSX.IntrinsicElements
  return (props: any) => <MarkdownTag className={className}  {...props} />
}

const Markdown = ({ content }: MarkdownProps) => (
  <div>
    <Remark rehypeReactOptions={{
      components: {
        h1: mdComponent('h1', 'text-5xl'),
        ul: mdComponent('ul', 'list-disc list-inside'),
        ol: mdComponent('ol', 'list-decimal list-inside'),
        blockquote: mdComponent('blockquote', 'border-l-2 p-3 m-2'),
        thead: mdComponent('thead', 'uppercase text-left'),
        tr: mdComponent('tr', 'border-b border-neutral-700'),
        th: mdComponent('th', 'py-2 px-3'),
        td: mdComponent('td', 'py-2 px-3'),
        pre: mdComponent('pre', 'my-3 py-3 px-5 rounded border-neutral-700 border'),
        hr: mdComponent('hr', 'my-4'),
        h2: mdComponent('h2', 'text-4xl'),
        h3: mdComponent('h3', 'text-3xl'),
        h4: mdComponent('h4', 'text-2xl'),
        h5: mdComponent('h5', 'text-xl')
      },
    }
    }>
      {content}
    </Remark >
  </div >
)


export { Markdown }