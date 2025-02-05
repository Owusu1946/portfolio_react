"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations and dark mode support.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.com"
  },
  // Add more projects here
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-background relative">
      <motion.div 
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent"
          variants={cardVariants}
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          className="text-muted-foreground mb-12 max-w-2xl"
          variants={cardVariants}
        >
          Here are some of my recent projects that showcase my skills and experience in building modern web applications.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-card rounded-lg overflow-hidden border transition-colors"
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="gap-2" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 