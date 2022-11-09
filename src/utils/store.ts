import { Finger, KeyFinger, toLayoutData, Position, QWERTY } from '../models'
import { proxy } from 'valtio'

type LayoutStore = {
  name: string
  keys: KeyFinger[][]
  description: string
}

const layoutStore = proxy<LayoutStore>({
  name: '',
  keys: QWERTY,
  description: ''
})

const swapKeys = (f: Position, s: Position) => {
  const firstKey = layoutStore.keys[f.row][f.col].key

  layoutStore.keys[f.row][f.col].key = layoutStore.keys[s.row][s.col].key
  layoutStore.keys[s.row][s.col].key = firstKey
}

const setFinger = (position: Position, finger: Finger) => {
  layoutStore.keys[position.row][position.col].finger = finger
}

const keysToLayout = () => toLayoutData(layoutStore.keys)

export { layoutStore, swapKeys, setFinger, keysToLayout }