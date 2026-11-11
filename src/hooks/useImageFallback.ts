import { useState } from 'react'

/** Walks through candidate image URLs on error; `src` is null when all failed. */
export function useImageFallback(sources: readonly string[]) {
  const key = sources.join('|')
  const [state, setState] = useState({ key, index: 0 })
  const index = state.key === key ? state.index : 0
  const src = sources[index] ?? null

  const onError = () => setState({ key, index: index + 1 })

  return { src, onError }
}
