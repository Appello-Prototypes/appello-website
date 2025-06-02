import Link from "next/link"

const footerNavigation = {
  solutions: [
    { name: "Time Tracking & Payroll", href: "/solutions/time-tracking-payroll" },
    { name: "Unified Platform", href: "/solutions/unified-platform" },
    { name: "Job Costing & Profitability", href: "/solutions/job-costing-profitability" },
    { name: "Equipment & Asset Tracking", href: "/solutions/equipment-asset-tracking" },
    { name: "Safety & Compliance", href: "/solutions/safety-compliance-management" },
    { name: "Workforce Scheduling", href: "/solutions/workforce-scheduling" },
    { name: "Financial Integration", href: "/solutions/financial-integration" },
    { name: "Sales & Estimation", href: "/solutions/sales-estimation-management" },
  ],
  industries: [
    { name: "Electrical Contractors", href: "/industries/electrical" },
    { name: "HVAC Contractors", href: "/industries/hvac" },
    { name: "Mechanical Insulation", href: "/industries/mechanical-insulation" },
    { name: "General Contractors", href: "/industries/general" },
    { name: "Plumbing Contractors", href: "/industries/plumbing" },
    { name: "Specialty Contractors", href: "/industries/specialty" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Customer Success", href: "/customer-success" },
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Resource Center", href: "/resources" },
  ],
  support: [
    { name: "Help Center", href: "/support" },
    { name: "Training", href: "/training" },
    { name: "System Status", href: "/status" },
    { name: "API Documentation", href: "/api-docs" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "/security" },
    { name: "Data Processing", href: "/data-processing" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl">Appello</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              Construction management software that helps contractors streamline operations, 
              track time, and increase profitability.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-sm text-muted-foreground">
                <strong>Phone:</strong> (555) 123-4567
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Email:</strong> hello@appello.com
              </p>
            </div>
            
            {/* CTA in Footer */}
            <div className="space-y-3">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 h-9 px-4 py-2 transition-colors"
              >
                Schedule Demo
              </Link>
              <p className="text-xs text-muted-foreground">
                Free 30-minute consultation with our experts
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerNavigation.solutions.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {footerNavigation.solutions.length > 6 && (
                <li>
                  <Link
                    href="/solutions"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    View All Solutions →
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Industries</h3>
            <ul className="space-y-3">
              {footerNavigation.industries.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Support</h3>
            <ul className="space-y-3">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold text-sm mt-8 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Appello. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sitemap
                </Link>
                <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <p className="text-sm text-muted-foreground">Follow us:</p>
              <Link href="https://linkedin.com/company/appello" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://twitter.com/appello" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 