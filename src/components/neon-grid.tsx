"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function NeonGrid() {
  const { theme, systemTheme } = useTheme()
  const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark")

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 gap-4 p-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            className={`h-full rounded-lg border ${
              isDark ? 'border-primary/40' : 'border-primary/30'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.02, 1],
              filter: [
                'brightness(1)',
                'brightness(1.5)',
                'brightness(1)'
              ]
            }}
            transition={{
              duration: 4,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className={`h-full w-full rounded-lg bg-gradient-to-br ${
              isDark ? 'from-primary/30 to-purple-600/30' : 'from-primary/20 to-purple-600/20'
            }`} />
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
    </div>
  )
} 