'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.15) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold }
    )

    if (elementRef.current) {
      elementRef.current.classList.add('scroll-reveal')
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold])

  return elementRef
}
