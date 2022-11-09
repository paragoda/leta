import { createClient } from '@supabase/supabase-js';
import { LayoutInsertModel, LayoutModel } from '../models';
import { analyze } from './analyze';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

// const supa = supabaseClient
const supa = createClient(supabaseUrl, supabaseAnonKey)

const insertLayout = async (layout: LayoutInsertModel): Promise<boolean> => {

  const analysis = await analyze(layout.keys, layout.fingers)
  const layoutInsert = await supa.from<LayoutModel>('layouts').insert(layout)

  if (layoutInsert.error) return false

  const analysisInsert = await supa.from('analyses').insert({
    layout: layoutInsert.data[0].id,
    ...analysis
  })

  return !analysisInsert.error
}


export { supa, insertLayout }