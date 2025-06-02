import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, DollarSign, Shield, TrendingUp, Users, Zap } from "lucide-react"

const solutionCategories = {
  "Operations & Efficiency": {
    description: "Streamline your daily operations and boost team productivity",
    icon: Zap,
    color: "bg-blue-50 text-blue-600",
    solutions: [
      {
        name: "Time Tracking & Payroll",
        href: "/solutions/time-tracking-payroll",
        description: "Automate time tracking and streamline payroll processing with real-time accuracy",
        benefits: ["Reduce payroll errors by 95%", "Save 10+ hours per week", "Ensure compliance"],
        icon: Clock
      },
      {
        name: "Unified Platform",
        href: "/solutions/unified-platform", 
        description: "Replace 18+ disconnected systems with one integrated construction management solution",
        benefits: ["Eliminate data silos", "Reduce system costs", "Increase efficiency by 40%"],
        icon: TrendingUp
      },
      {
        name: "Workforce Scheduling",
        href: "/solutions/workforce-scheduling",
        description: "Advanced scheduling and resource optimization for maximum productivity",
        benefits: ["Optimize crew utilization", "Reduce scheduling conflicts", "Improve project timelines"],
        icon: Users
      }
    ]
  },
  "Financial Management": {
    description: "Take control of your financial performance and profitability",
    icon: DollarSign,
    color: "bg-green-50 text-green-600",
    solutions: [
      {
        name: "Job Costing & Profitability", 
        href: "/solutions/job-costing-profitability",
        description: "Real-time financial tracking and profit analysis for every project",
        benefits: ["Increase margins by 15%", "Real-time cost visibility", "Prevent budget overruns"],
        icon: TrendingUp
      },
      {
        name: "Sales & Estimation",
        href: "/solutions/sales-estimation-management", 
        description: "AI-assisted sales processes and intelligent estimating tools",
        benefits: ["Win more profitable jobs", "Faster proposal generation", "Accurate estimates"],
        icon: DollarSign
      },
      {
        name: "Financial Integration",
        href: "/solutions/financial-integration",
        description: "Seamless connections with QuickBooks, Sage, and other accounting systems",
        benefits: ["Eliminate double entry", "Real-time sync", "Automated reporting"],
        icon: TrendingUp
      }
    ]
  },
  "Asset & Compliance": {
    description: "Protect your assets and maintain compliance with digital precision",
    icon: Shield,
    color: "bg-orange-50 text-orange-600",
    solutions: [
      {
        name: "Equipment & Asset Tracking",
        href: "/solutions/equipment-asset-tracking",
        description: "QR codes and GPS tracking for valuable equipment and tools",
        benefits: ["Reduce theft by 96%", "Optimize equipment utilization", "Track maintenance schedules"],
        icon: Shield
      },
      {
        name: "Safety & Compliance",
        href: "/solutions/safety-compliance-management", 
        description: "Digital documentation and automated compliance management",
        benefits: ["Reduce incidents", "Streamline inspections", "Ensure regulatory compliance"],
        icon: Shield
      }
    ]
  }
}

export default function SolutionsPage() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Construction Management Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Streamline operations, boost profitability, and scale your construction business with our integrated platform designed specifically for contractors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Schedule Demo</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Categories */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Run Your Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From time tracking to financial management, our comprehensive solutions work together to help you build a more profitable, efficient operation.
            </p>
          </div>

          <div className="space-y-20">
            {Object.entries(solutionCategories).map(([categoryName, category]) => {
              const CategoryIcon = category.icon
              return (
                <div key={categoryName}>
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} mb-4`}>
                      <CategoryIcon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {categoryName}
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>

                  {/* Solutions Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.solutions.map((solution) => {
                      const SolutionIcon = solution.icon
                      return (
                        <div key={solution.name} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-lg ${category.color}`}>
                              <SolutionIcon className="w-6 h-6" />
                            </div>
                            <Link 
                              href={solution.href}
                              className="text-blue-600 hover:text-blue-700 transition-colors"
                              aria-label={`Learn more about ${solution.name}`}
                            >
                              <ArrowRight className="w-5 h-5" />
                            </Link>
                          </div>
                          
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">
                            <Link href={solution.href} className="hover:text-blue-600 transition-colors">
                              {solution.name}
                            </Link>
                          </h4>
                          
                          <p className="text-gray-600 mb-4">
                            {solution.description}
                          </p>
                          
                          <ul className="space-y-2 mb-6">
                            {solution.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-center text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                          
                          <Link 
                            href={solution.href}
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                          >
                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Real Results From Real Contractors
              </h2>
              <p className="text-lg text-gray-600">
                See the measurable impact our solutions have on construction businesses like yours
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-gray-900 font-semibold mb-1">Efficiency Increase</div>
                <div className="text-sm text-gray-600">Average improvement in operational efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$50K+</div>
                <div className="text-gray-900 font-semibold mb-1">Annual Savings</div>
                <div className="text-sm text-gray-600">Typical cost reduction per contractor</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-gray-900 font-semibold mb-1">Error Reduction</div>
                <div className="text-sm text-gray-600">Decrease in payroll and billing errors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of contractors who have streamlined their operations and increased profitability with Appello.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Free demo • No credit card required • Setup in under 24 hours
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 