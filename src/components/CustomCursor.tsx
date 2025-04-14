'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
    }

    window.addEventListener('mousemove', updateCursor)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
    }
  }, [])

  return (
    <div
      className="fixed pointer-events-none z-40"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div 
        className={`
          rounded-full bg-purple-500/20
          transition-all duration-300 ease-out
          ${isPointer ? 'w-8 h-8 scale-150' : 'w-6 h-6 scale-100'}
          blur-sm
        `}
      />
    </div>
  )
} 