/**
 * Throttle para eventos frequentes (ex.: scroll).
 * Garante no máximo uma execução a cada `limitMs` ms.
 */
export function throttle(fn: () => void, limitMs: number): () => void {
  let lastCall = 0
  return () => {
    const now = Date.now()
    if (now - lastCall >= limitMs) {
      lastCall = now
      fn()
    }
  }
}
