import { ReactNode } from 'react'

type KeyboardProps = {
  gap?: string
  children: ReactNode
}

const Keyboard = ({ gap = 'gap-3 md:gap-5', children }: KeyboardProps) => {
  return (
    <div className='aspect-[282/52] md:aspect-[282/68] w-[70rem] md:w-[106.25rem]
    md:self-center'>
      <div className={`flex flex-col h-full ${gap}`}>
        {children}
      </div>
    </div>
  )
}

export { }