import { Analysis, StrNumPair } from '../models/analysis'

const jsonToAnalysis = (data: any): Analysis => (
  {
    ...data,
    weightedHighestSpeed: {
      str: data.weightedHighestSpeed.finger,
      num: data.weightedHighestSpeed.value
    },
    unweightedHighestSpeed: {
      str: data.unweightedHighestSpeed.finger,
      num: data.unweightedHighestSpeed.value
    },
    topSfbs: data.topSfbs.map((pair: any): StrNumPair => ({ str: pair.ngram, num: pair.count })),
    worstBigrams: data.worstBigrams
      .map((pair: any): StrNumPair => ({ str: pair.ngram, num: pair.count }))
  }
)

const analyze = async (keys: string, fingers: string): Promise<Analysis> => {
  const uri = `https://genkey-api.herokuapp.com/together/?keys=${encodeURIComponent(keys)}&fingers=${fingers}`
  return await fetch(uri).then(data => data.json()).then(json => jsonToAnalysis(json))
}

export { analyze }