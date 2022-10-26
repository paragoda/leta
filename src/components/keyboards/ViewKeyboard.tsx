import { FingerColors, KeyFinger } from '../../models'
import { Key, SystemKey } from './keys'
import { Row } from './Row'

type ViewKeyboardProps = {
  keys: readonly (readonly KeyFinger[])[]
}

const ViewKeyboard = ({ keys }: ViewKeyboardProps) => {

  // top row of keyboard where last key is larger
  const TopViewRow = (row: number) => keys[row]
    .map(({ key, finger }, col) => <Key key={`view-key-${row}`}
      className={`cursor-default ${FingerColors.get(finger)} ${col == keys[0].length - 1 ? 'w-[6.75rem]' : 'w-16'}`}
    >
      {key}
    </Key>
    )

  // home
  const ViewRow = (row: number) => keys[row]
    .map(({ key, finger }) => <Key key={`view-key-${row}`} className={` ${FingerColors.get(finger)} w-16 cursor-default`}>{key}</Key>)


  return (
    <div className='aspect-[282/52] select-none'>
      <div className='flex flex-col h-full gap-1 md:gap-2 text-neutral-900 md:text-xl'>

        <Row className='gap-1 md:gap-2'>
          <SystemKey className='w-[6.75rem]'>Tab</SystemKey>
          {TopViewRow(0)}
        </Row>

        <Row className='gap-1 md:gap-2'>
          <SystemKey className='w-[7.75rem]'>Caps</SystemKey>
          {ViewRow(1)}
          <SystemKey className='w-[10.5rem]'>Enter</SystemKey>
        </Row>

        <Row className='gap-1 md:gap-2'>
          <SystemKey className='w-[10rem]'>Shift</SystemKey>
          {ViewRow(2)}
          <SystemKey className='w-[13rem]'>Shift</SystemKey>
        </Row>


      </div>
    </div>
  )
}

export { ViewKeyboard }