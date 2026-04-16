'use client'

import React, { useEffect } from 'react'

export function PageTransition() {
  useEffect(() => {
    // Animate sections as user scrolls
    const sections = document.querySelectorAll('section')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'sectionSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
          }
        })
      },
      { threshold: 0.1 }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return null
}
