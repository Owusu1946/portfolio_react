"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from "next-themes"

export function FluidBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"
  
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = container.getBoundingClientRect()
      
      const x = (clientX - left) / width
      const y = (clientY - top) / height
      
      container.style.setProperty('--mouse-x', x.toString())
      container.style.setProperty('--mouse-y', y.toString())
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div 
      ref={containerRef}
      className="fixed inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(1000px at var(--mouse-x, 50%) var(--mouse-y, 50%), ${isDark ? 'rgba(29, 78, 216, 0.25)' : 'rgba(29, 78, 216, 0.15)'}, transparent 70%)`,
            `radial-gradient(1000px at var(--mouse-x, 50%) var(--mouse-y, 50%), ${isDark ? 'rgba(147, 51, 234, 0.25)' : 'rgba(147, 51, 234, 0.15)'}, transparent 70%)`
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      <div 
        className={`absolute inset-0 ${
          isDark ? 'bg-background/30' : 'bg-background/40'
        } backdrop-blur-[80px]`}
      />
    </motion.div>
  )
} 