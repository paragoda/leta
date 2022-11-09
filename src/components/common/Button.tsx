import { MouseEventHandler, ReactNode } from 'react'


type ButtonProps = {
  className?: string          // additional styles
  onClick?: MouseEventHandler
  children?: ReactNode
}

const sharedButtonStyle = 'rounded select-none'


// Button with background

const FilledButton = ({ className = 'py-3 px-5', onClick, children }: ButtonProps) => (
  <button onClick={onClick} className={`${className} ${sharedButtonStyle}
     text-white bg-neutral-900 hover:bg-neutral-800
     dark:text-neutral-900 dark:bg-white dark:hover:bg-neutral-100`}
  >
    {children}
  </button>
)


// Button with border

const OutlinedButton = ({ className = 'py-3 px-5', onClick, children }: ButtonProps) => (
  <button onClick={onClick} className={`${className} ${sharedButtonStyle} border-2
     text-neutral-900 bg-white hover:bg-neutral-100 border-neutral-900
     dark:text-white dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-white`}
  >
    {children}
  </button>
)


// Button without background, only when hover

const TextButton = ({ className = 'py-3 px-5', onClick, children }: ButtonProps) => (
  <button onClick={onClick} className={`${className} ${sharedButtonStyle}
      text-neutral-900 hover:bg-neutral-100
      dark:text-white dark:hover:bg-neutral-800`}
  >
    {children}
  </button>
)

export { OutlinedButton, FilledButton, TextButton, sharedButtonStyle }
export type { ButtonProps }