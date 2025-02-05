"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -50])

  return (
    <div ref={containerRef} className="relative min-h-[200vh]">
      <div className="sticky top-0 h-screen">
        <main className="relative">
          <motion.div style={{ opacity, scale, y }}>
            <Hero />
          </motion.div>
        </main>
      </div>
      <div className="relative z-10 bg-background">
        <Projects />
      </div>
    </div>
  )
}
