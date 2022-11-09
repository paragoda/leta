import { KeyFinger } from './key';

/*
{
  keys: "qwertyuiop[]\asdfghjkl;'zxcvbnm,./",
  fingers: '0123344567777012334456770123344567'
}
*/

type LayoutData = {
  keys: string
  fingers: string
}

type LayoutInsertModel = LayoutData & {
  name: string
  description?: string

  slug: string
  uid: string // user id, who published
}

type LayoutModel = LayoutInsertModel & {
  id: string
}

const shiftKeys = new Map([
  ['[', '{'],
  [']', '}'],
  ['\\', '|'],
  [';', ':'],
  ['\'', '"'],
  [',', '<'],
  ['.', '>'],
  ['/', '?'],
])

const toLayoutData = (matrix: KeyFinger[][]): LayoutData => {
  let keys = ''
  let fingers = ''

  for (const row of matrix) {
    for (const keyFinger of row) {
      keys += keyFinger.key
      fingers += keyFinger.finger
    }
  }

  return { keys, fingers }
}

export type { LayoutData, LayoutInsertModel, LayoutModel }
export { shiftKeys, toLayoutData }