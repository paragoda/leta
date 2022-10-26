import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'


const mdToHtml = (md: string) => {
  const result = remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .processSync(md)
  return result.toString()
}

export { mdToHtml }