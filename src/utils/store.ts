import { Finger, KeyFinger, keyFingerMatrixToLayout, Position, QWERTY } from '../models'
import { proxy } from 'valtio'
import { type } from 'os'

type LayoutStore = {
  name: string
  keys: KeyFinger[][]
}

const layoutStore = proxy<LayoutStore>({
  name: '',
  keys: QWERTY,
})

const swapKeys = (f: Position, s: Position) => {
  const firstKey = layoutStore.keys[f.row][f.col].key

  layoutStore.keys[f.row][f.col].key = layoutStore.keys[s.row][s.col].key
  layoutStore.keys[s.row][s.col].key = firstKey
}

const setFinger = (position: Position, finger: Finger) => {
  layoutStore.keys[position.row][position.col].finger = finger
}

const keysToLayout = (name: string) => keyFingerMatrixToLayout(name, layoutStore.keys)

export { layoutStore, swapKeys, setFinger, keysToLayout }