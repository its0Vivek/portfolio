'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      const target = e.target as HTMLElement
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      <div 
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* Main cursor */}
        <div 
          className={`
            rounded-full bg-purple-500
            transition-all duration-200 ease-out
            ${isPointer ? 'w-5 h-5 opacity-50' : 'w-3 h-3'}
            ${isClicking ? 'scale-75' : 'scale-100'}
          `}
        />
      </div>

      {/* Glow effect */}
      <div
        className="fixed pointer-events-none z-40 opacity-30 blur-xl"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s'
        }}
      >
        <div 
          className={`
            rounded-full bg-purple-500
            transition-all duration-300 ease-out
            ${isPointer ? 'w-10 h-10' : 'w-6 h-6'}
            ${isClicking ? 'scale-75' : 'scale-100'}
          `}
        />
      </div>
    </>
  )
} 