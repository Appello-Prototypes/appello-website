"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const solutionCategories = {
  "Operations & Efficiency": [
    {
      name: "Time Tracking & Payroll",
      href: "/solutions/time-tracking-payroll",
      description: "Automate time tracking and streamline payroll processing"
    },
    {
      name: "Unified Platform",
      href: "/solutions/unified-platform", 
      description: "Replace 18+ systems with one integrated solution"
    },
    {
      name: "Workforce Scheduling",
      href: "/solutions/workforce-scheduling",
      description: "Advanced scheduling and resource optimization"
    }
  ],
  "Financial Management": [
    {
      name: "Job Costing & Profitability", 
      href: "/solutions/job-costing-profitability",
      description: "Real-time financial tracking and profit analysis"
    },
    {
      name: "Sales & Estimation",
      href: "/solutions/sales-estimation-management", 
      description: "AI-assisted sales processes and smart estimating"
    },
    {
      name: "Financial Integration",
      href: "/solutions/financial-integration",
      description: "Seamless accounting and financial system connections"
    }
  ],
  "Asset & Compliance": [
    {
      name: "Equipment & Asset Tracking",
      href: "/solutions/equipment-asset-tracking",
      description: "QR codes and GPS tracking for valuable equipment"
    },
    {
      name: "Safety & Compliance",
      href: "/solutions/safety-compliance-management", 
      description: "Digital documentation and automated compliance"
    }
  ]
}

const navigation = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState<string | null>(null)

  return (
    <>
      {/* Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded focus:z-50"
      >
        Skip to main content
      </a>
      
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 relative">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2 z-10" aria-label="Appello - Home">
            <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center" aria-hidden="true">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-xl">Appello</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 z-50 relative" aria-label="Main navigation">
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 px-3 py-2 rounded-md"
              >
                Solutions
                <ChevronDown className={cn("h-4 w-4 transition-transform", solutionsOpen && "rotate-180")} />
              </button>
              
              {/* Dropdown Content */}
              {solutionsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[800px] bg-white border border-gray-200 shadow-lg rounded-md p-6 z-[9999]"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {Object.entries(solutionCategories).map(([category, solutions]) => (
                      <div key={category}>
                        <h3 className="font-semibold text-sm text-gray-900 mb-3">{category}</h3>
                        <ul className="space-y-3">
                          {solutions.map((solution) => (
                            <li key={solution.name}>
                              <Link
                                href={solution.href}
                                className="block p-2 -m-2 rounded-md hover:bg-gray-50 transition-colors"
                                onClick={() => setSolutionsOpen(false)}
                              >
                                <div className="font-medium text-sm text-gray-900">{solution.name}</div>
                                <div className="text-xs text-gray-500 mt-1">{solution.description}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 mt-6 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">Ready to get started?</h4>
                        <p className="text-xs text-gray-500 mt-1">See how Appello can transform your operations</p>
                      </div>
                      <Button asChild size="sm">
                        <Link href="/contact" onClick={() => setSolutionsOpen(false)}>Schedule Demo</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
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
          <div className="hidden md:flex items-center space-x-4 z-10">
            <Button variant="ghost" asChild>
              <Link href="/contact">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden z-10">
              <Button variant="ghost" size="sm" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto" aria-label="Mobile navigation">
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

                {/* Mobile Solutions Menu */}
                <div className="space-y-4">
                  <button
                    onClick={() => setMobileMenuExpanded(mobileMenuExpanded === 'solutions' ? null : 'solutions')}
                    className="flex items-center justify-between w-full text-lg font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-sm px-1 py-1"
                  >
                    Solutions
                    <ChevronDown className={cn("h-4 w-4 transition-transform", mobileMenuExpanded === 'solutions' && "rotate-180")} />
                  </button>
                  
                  {mobileMenuExpanded === 'solutions' && (
                    <div className="pl-4 space-y-4">
                      {Object.entries(solutionCategories).map(([category, solutions]) => (
                        <div key={category}>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">{category}</h4>
                          <ul className="space-y-2 pl-2">
                            {solutions.map((solution) => (
                              <li key={solution.name}>
                                <Link
                                  href={solution.href}
                                  className="block text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-sm px-1 py-1"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {solution.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

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
                  <Button variant="ghost" asChild className="w-full">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Sign In</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Schedule Demo</Link>
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