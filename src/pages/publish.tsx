import { NextPage } from 'next';
import { useState } from 'react';
import { useSnapshot } from 'valtio';
import { Input, Markdown, TextButton, Title, ViewKeyboard } from '../components';
import { layoutStore, mdToHtml } from '../utils';

const PublishPage: NextPage = () => {
  const { name, keys } = useSnapshot(layoutStore)
  const [description, setDescription] = useState('')

  const [markdown, setMarkdown] = useState(true)
  const [preview, setPreview] = useState(false)

  const changeName = (e: any) => layoutStore.name = e.target.value
  const changeDescription = (e: any) => setDescription(e.target.value)

  const clickMarkdown = () => {
    setMarkdown(!markdown)
    if (preview) {

    }
  }

  return <>
    <Title>Publish layout | LETA</Title>

    <div className='mb-20'>
      <ViewKeyboard keys={keys} />

      <div className='my-10'>
        <Input type='text' value={name} onChange={changeName} placeholder='Layout name' />
      </div>

      <div className='flex gap-5 mb-5'>
        <TextButton className={`py-3 px-5 ${markdown ? 'flex-1' : 'flex-none'}`} onClick={clickMarkdown}>Markdown</TextButton>
        <TextButton className={`py-3 px-5 ${preview ? 'flex-1' : 'flex-none'}`} onClick={() => setPreview(!preview)}>Preview</TextButton>
      </div>

      <div className={`grid gap-5 ${markdown && preview ? 'grid-cols-2' : 'grid-cols-1'}`}>

        {markdown ?
          <textarea value={description}
            className='bg-neutral-100 dark:bg-neutral-800 w-full h-full rounded p-5 outline-0'
            rows={30} onChange={changeDescription}></textarea>
          : null}

        {preview ? <Markdown content={description} /> : null}
      </div>

      <div>
        {mdToHtml(description)}
      </div>
    </div>
  </>
}

export default PublishPage