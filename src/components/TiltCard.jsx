import React, { useRef, useState } from 'react'

export default function TiltCard({ children, className = '', shine = true }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height

    const rotateY = (px - 0.5) * 12 // deg
    const rotateX = (0.5 - py) * 12 // deg
    const translateZ = 30 // px

    const gx = px * 100
    const gy = py * 100

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
      boxShadow: `${-rotateY * 2}px ${rotateX * 2}px 30px rgba(15, 23, 42, 0.15), 0 10px 20px rgba(0,0,0,0.06)` ,
      backgroundImage: shine ? `radial-gradient(800px 200px at ${gx}% ${gy}%, rgba(59,130,246,0.12), transparent)` : undefined,
    })
  }

  const handleLeave = () => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg) translateZ(0px)' })
  }

  return (
    <div className={`[perspective:1000px]`}> 
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`will-change-transform transition-transform duration-150 ${className}`}
        style={style}
      >
        {children}
      </div>
    </div>
  )
}
