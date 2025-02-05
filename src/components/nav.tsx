import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Portfolio</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
} 