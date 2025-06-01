import Link from "next/link"

const footerNavigation = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Time Tracking", href: "/time-tracking-contractors" },
    { name: "Job Costing", href: "/job-costing-software" },
    { name: "Compliance", href: "/construction-compliance" },
  ],
  industries: [
    { name: "Mechanical Insulation", href: "/mechanical-insulation-software" },
    { name: "HVAC Contractors", href: "/hvac-contractor-software" },
    { name: "Electrical", href: "/electrical-contractor-software" },
    { name: "General Contractors", href: "/general-contractors" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Customer Success", href: "/customer-success" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong>Phone:</strong> (555) 123-4567
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Email:</strong> hello@appello.com
              </p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-3">
              {footerNavigation.product.map((item) => (
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
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Appello. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <p className="text-sm text-muted-foreground">
                Built for ICI subcontractors
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 