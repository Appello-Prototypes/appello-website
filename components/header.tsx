"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Features", href: "/features" },
  { name: "Time Tracking", href: "/time-tracking-contractors" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:z-50"
      >
        Skip to main content
      </a>
      
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Appello - Home">
            <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center" aria-hidden="true">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-xl">Appello</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-sm px-1 py-1"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/contact">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]" aria-label="Mobile navigation">
              <div className="flex flex-col space-y-6">
                {/* Mobile Logo */}
                <Link 
                  href="/" 
                  className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-sm" 
                  onClick={() => setIsOpen(false)}
                  aria-label="Appello - Home"
                >
                  <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center" aria-hidden="true">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <span className="font-bold text-xl">Appello</span>
                </Link>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4" aria-label="Mobile navigation menu">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-sm px-1 py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTAs */}
                <div className="flex flex-col space-y-3 pt-6 border-t">
                  <Button variant="ghost" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Schedule Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
} 