import { NextPage } from 'next'
import { useState } from 'react'
import {
  Center, Input, OutlinedButton, sharedButtonStyle, TextButton, Title, AnalysisTable, ActionKeyboard
} from '../components'
import {
  Analysis, Finger, FingerColors, FingerNames, Position
} from '../models'
import { analyze, download, layoutStore, keysToLayout, setFinger } from '../utils'
import { useSnapshot } from 'valtio'
import Link from 'next/link'
import { useUser } from '@supabase/auth-helpers-react'

const Create: NextPage = () => {
  // hooks
  const { name, keys } = useSnapshot(layoutStore)
  const { user } = useUser()
  const [selected, setSelected] = useState<Position>({ row: -1, col: -1 })
  const [analysis, setAnalysis] = useState<Analysis | undefined>()

  const exportLayout = async (target: string) => {
    const trimName = name.trim()
    if (trimName != '') {
      const getLayoutFile = (await import(`../utils/export/${target}`)).default
      download(getLayoutFile(keysToLayout(name)));
    } else {
      alert('Name of layout can\'t be empty')
    }
  }

  const changeName = (e: any) => layoutStore.name = e.target.value
  const changeFinger = (finger: Finger) => setFinger(selected, finger)

  const analyzeLayout = async () => setAnalysis(await analyze(keysToLayout(name)))

  const FingerButton = ({ finger }: { finger: Finger }) => {
    const bg = FingerColors.get(finger) ?? ''

    return (
      <button onClick={() => changeFinger(finger)} key={`finger${finger}`}
        className={`${sharedButtonStyle} py-3 px-5 text-neutral-900 ${bg}`}
      >
        {FingerNames[finger > 3 ? 7 - finger : finger]}
      </button>
    )
  }

  return <>
    <Title>Create layout | LETA</Title>

    <Center className='text-lg pb-10'>

      <div className='w-full'>
        <ActionKeyboard selected={{ val: selected, set: setSelected }} />
      </div>

      <div className='mt-10 w-full'>
        {selected.col != -1 ?
          <div className='flex justify-between items-center mb-10'>
            Hand: {keys[selected.row][selected.col].finger > 3 ? 'Right' : 'Left'}
            <div className='flex gap-2'>
              {Object.values(Finger)
                .map(f => typeof f != 'string' ? <FingerButton finger={f} /> : <></>)
              }
            </div>

            <TextButton onClick={() => setSelected({ row: -1, col: -1 })}>Close</TextButton>
          </div>
          : <></>
        }

        <div className='flex justify-between flex-wrap gap-y-5'>
          <OutlinedButton onClick={analyzeLayout}>Analyze</OutlinedButton>

          <Link href={user ? '/' : '/auth'}>
            <OutlinedButton onClick={analyzeLayout}>Publish</OutlinedButton>
          </Link>

          <div className='flex items-center gap-5'>
            Export
            <Input type='text' value={name} placeholder='layout name' className='py-3 px-5'
              onChange={changeName} />
            for
          </div>
          <TextButton onClick={() => exportLayout('mac')}>MacOS</TextButton>
          <TextButton onClick={() => exportLayout('linux')}>Linux</TextButton>
          <TextButton onClick={() => exportLayout('win')}>Windows</TextButton>
        </div>

        {analysis ? <AnalysisTable analysis={analysis} className='mt-10' /> : <></>}

      </div>
    </Center >
  </>

}

export default Create