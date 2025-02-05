"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { FluidBackground } from "@/components/fluid-background"

export function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <motion.section 
      className="relative flex flex-col items-center justify-center min-h-screen text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FluidBackground />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-32 h-32 mb-8"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 animate-pulse" />
        <motion.div
          className="absolute inset-1 rounded-full bg-background"
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <motion.div 
        className="mb-6"
        {...fadeInUp}
      >
        <TypeAnimation
          sequence={[
            'Owusu Kenneth',
            1000,
            'Full Stack Developer',
            1000,
            'UI/UX Enthusiast',
            1000,
          ]}
          wrapper="h1"
          speed={50}
          className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent"
          repeat={Infinity}
        />
      </motion.div>

      <motion.div 
        className="relative mb-8 p-4"
        {...fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-purple-600/20 blur-lg" />
        <p className="relative text-lg sm:text-xl text-muted-foreground">
          Building exceptional digital experiences with modern technologies
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-col sm:flex-row gap-4 mb-12"
        {...fadeInUp}
        transition={{ delay: 0.3 }}
      >
        <Button size="lg" className="group gap-2">
          <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          View Projects
        </Button>
        <Button size="lg" variant="outline" className="group gap-2">
          <Mail className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          Contact Me
        </Button>
      </motion.div>

      <SocialLinks />
      <ScrollIndicator />
    </motion.section>
  )
}

function SocialLinks() {
  return (
    <motion.div 
      className="flex gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon">
          <Github className="w-5 h-5" />
          <span className="sr-only">GitHub</span>
        </Button>
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon">
          <Linkedin className="w-5 h-5" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </a>
    </motion.div>
  )
}

function ScrollIndicator() {
  return (
    <motion.div 
      className="absolute bottom-8"
      animate={{ 
        y: [0, 10, 0],
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <ChevronDown className="w-6 h-6 text-muted-foreground" />
    </motion.div>
  )
}