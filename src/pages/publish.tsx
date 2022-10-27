import { NextPage } from 'next';
import { useRef, useState } from 'react';
import { useSnapshot } from 'valtio';
import { FilledButton, Input, Markdown, OutlinedButton, TextButton, Title, ViewKeyboard } from '../components';
import { layoutStore } from '../utils';

const PublishPage: NextPage = () => {
  const { keys } = useSnapshot(layoutStore)
  const { description, name } = useSnapshot(layoutStore, { sync: true })

  const [markdown, setMarkdown] = useState(true)
  const [preview, setPreview] = useState(false)

  const changeName = (e: any) => layoutStore.name = e.target.value
  const changeDescription = (e: any) => layoutStore.description = e.target.value

  const clickMarkdown = () => setMarkdown(!markdown)
  const clickPreview = () => setPreview(!preview)

  const textareaRows = () => {
    const lines = description.match(/\n/g)?.length ?? 0
    return lines < 6 ? 6 : lines + 1
  }

  const publish = () => {

  }

  return <>
    <Title>Publish layout | LETA</Title>

    <div className='mb-20'>
      <ViewKeyboard keys={keys} />

      <div className='my-10'>
        <Input type='text' value={name} onChange={changeName} placeholder='Layout name' />
      </div>

      <h2 className='text-xl'>Description:</h2>
      <div className='flex gap-5 my-4'>
        <OutlinedButton className={`py-3 px-5 ${markdown ? 'flex-1' : 'flex-none'}`}
          onClick={clickMarkdown}>Markdown</OutlinedButton>
        <OutlinedButton className={`py-3 px-5 ${preview ? 'flex-1' : 'flex-none'}`}
          onClick={clickPreview}>Preview</OutlinedButton>
      </div>

      <div className={`my-5 grid gap-5 ${markdown && preview ? 'grid-cols-2' : 'grid-cols-1'}`}>

        {markdown ?
          <textarea value={description} onChange={changeDescription}
            className='bg-neutral-100 dark:bg-neutral-800 w-full h-full rounded p-5 outline-0'
            rows={textareaRows()}></textarea>
          : null}

        {preview ? <Markdown content={description} /> : null}
      </div>

      <FilledButton onClick={publish} className='w-full py-3'>Publish</FilledButton>
    </div>
  </>
}

export default PublishPage