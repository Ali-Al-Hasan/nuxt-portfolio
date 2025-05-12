// plugins/lenis.client.ts
import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothTouch: false,
  })

  const raf = time => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})
