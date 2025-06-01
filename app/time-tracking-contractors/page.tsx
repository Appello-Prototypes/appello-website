import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Clock, DollarSign, Shield, Users, TrendingUp, AlertTriangle, Calculator, FileText, Smartphone } from "lucide-react";

export default function TimeTrackingContractors() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section - Problem Focused */}
      <section className="text-center max-w-4xl mx-auto py-20" aria-labelledby="hero-heading">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-red-50 text-red-700 text-sm font-medium rounded-full mb-4">
            The #1 Problem Killing Contractor Profits
          </span>
        </div>
        <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Your Excel Timesheets Are{" "}
          <span className="text-red-600">Bleeding Money</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Every week you lose 12+ hours chasing down paper timesheets, fixing payroll errors, 
          and discovering projects lost money months too late. There's a better way.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700" asChild>
            <Link href="/contact">Stop The Bleeding - Get Demo</Link>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="#solution">See How We Fix This</Link>
          </Button>
        </div>

        {/* Urgency Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <span>$50K+ Lost Per Year</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-red-600" />
            <span>12+ Hours Wasted Weekly</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-red-600" />
            <span>25% Hidden Profit Loss</span>
          </div>
        </div>
      </section>

      {/* Problem Statement - Deep Dive */}
      <section className="bg-slate-50 py-20 -mx-4" aria-labelledby="problem-heading">
        <div className="container mx-auto px-4">
          <h2 id="problem-heading" className="text-center text-3xl md:text-4xl font-bold mb-4">
            The Excel Timesheet Death Spiral
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
            Every mechanical, electrical, and specialty contractor knows this pain. 
            Here's exactly how it's destroying your business:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Monday Morning Chaos */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-red-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-red-900">Monday Morning Timesheet Hunt</h3>
                  <p className="text-muted-foreground mb-4">
                    Start every week chasing down missing timesheets from your crews. Half are illegible, 
                    a quarter are missing, and the rest have "creative" math that doesn't add up.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-red-600">
                      <span>✗</span>
                      <span>3+ hours spent collecting paper sheets</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600">
                      <span>✗</span>
                      <span>Crews "forget" to submit timesheets</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600">
                      <span>✗</span>
                      <span>Handwriting is unreadable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payroll Nightmare */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-red-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calculator className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-red-900">Payroll Processing Hell</h3>
                  <p className="text-muted-foreground mb-4">
                    Spend 6+ hours every payroll period manually entering data, fixing errors, 
                    and arguing with workers about their hours. Overtime calculations are a nightmare.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-red-600">
                      <span>✗</span>
                      <span>Manual data entry errors</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600">
                      <span>✗</span>
                      <span>Overtime calculation mistakes</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600">
                      <span>✗</span>
                      <span>Worker disputes about hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hidden Profit Loss */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-red-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-red-900">Invisible Profit Bleeding</h3>
                  <p className="text-muted-foreground mb-4">
                    Discover projects lost money weeks or months after completion. 
                    No real-time job costing means you're flying blind on every project.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-red-600">
                      <span>✗</span>
                      <span>No real-time job costing</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600">
                      <span>✗</span>
                      <span>Labor allocation guesswork</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600">
                      <span>✗</span>
                      <span>Profit loss discovered too late</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Headaches */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-red-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-red-900">Compliance Panic Mode</h3>
                  <p className="text-muted-foreground mb-4">
                    Scramble every month to prepare certified payroll reports. 
                    Prevailing wage tracking is a manual nightmare that keeps you up at night.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-red-600">
                      <span>✗</span>
                      <span>Manual certified payroll prep</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600">
                      <span>✗</span>
                      <span>Prevailing wage miscalculations</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600">
                      <span>✗</span>
                      <span>Audit stress and penalties</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Calculator */}
          <div className="mt-16 bg-red-50 p-8 rounded-lg max-w-4xl mx-auto border-2 border-red-200">
            <h3 className="text-2xl font-bold text-center mb-6 text-red-900">
              What This Is Really Costing You
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">$52,000</div>
                <div className="text-sm text-muted-foreground">Lost productivity per year<br />(12 hrs/week × $50/hr × 20 workers)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">$75,000</div>
                <div className="text-sm text-muted-foreground">Profit lost to poor job costing<br />(25% margin loss on $300K revenue)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">$15,000</div>
                <div className="text-sm text-muted-foreground">Payroll errors & disputes<br />(Overtime mistakes, compliance fines)</div>
              </div>
            </div>
            <div className="text-center mt-6 pt-6 border-t border-red-200">
              <div className="text-5xl font-bold text-red-700 mb-2">$142,000</div>
              <div className="text-lg text-red-800 font-semibold">Total Annual Cost of Excel Timesheets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20" aria-labelledby="solution-heading">
        <div className="text-center mb-16">
          <h2 id="solution-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Here's How Appello Stops The Bleeding
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Eliminate timesheet chaos in 15 minutes. No more Excel. No more paper. 
            No more payroll headaches. Just accurate, automated time tracking that actually works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mobile First */}
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Mobile-First Time Tracking</h3>
            <p className="text-muted-foreground">
              Your crews clock in/out with their phones. GPS verification, photo uploads, 
              and job notes. No more chasing paper timesheets.
            </p>
            <div className="mt-4 space-y-1 text-sm text-green-700">
              <div>✓ GPS location verification</div>
              <div>✓ Photo time stamps</div>
              <div>✓ Offline capability</div>
            </div>
          </div>

          {/* Real-Time Job Costing */}
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-Time Job Costing</h3>
            <p className="text-muted-foreground">
              Know exactly if your projects are profitable RIGHT NOW. 
              Track labor, materials, and overhead in real-time.
            </p>
            <div className="mt-4 space-y-1 text-sm text-blue-700">
              <div>✓ Live profit/loss tracking</div>
              <div>✓ Budget vs actual alerts</div>
              <div>✓ Phase-level visibility</div>
            </div>
          </div>

          {/* Automated Compliance */}
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Automated Compliance</h3>
            <p className="text-muted-foreground">
              Certified payroll reports generated automatically. 
              Prevailing wage calculations done right, every time.
            </p>
            <div className="mt-4 space-y-1 text-sm text-purple-700">
              <div>✓ Auto certified payroll</div>
              <div>✓ Prevailing wage tracking</div>
              <div>✓ Union reporting ready</div>
            </div>
          </div>
        </div>

        {/* Results Proof */}
        <div className="bg-green-50 py-12 -mx-4">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8 text-green-900">
              Real Results From Real Contractors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
                <div className="text-sm text-muted-foreground">Reduction in timesheet<br />collection time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99.8%</div>
                <div className="text-sm text-muted-foreground">Payroll accuracy<br />improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$50K</div>
                <div className="text-sm text-muted-foreground">Average annual<br />savings per contractor</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2 weeks</div>
                <div className="text-sm text-muted-foreground">Time to see<br />full ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Case Study: How Martinez HVAC Saved $73,000 in Year One
          </h2>
          
          <div className="bg-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-600">Before Appello:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 18 hours/week collecting timesheets</li>
                  <li>• 3-4 payroll disputes every period</li>
                  <li>• Discovered $45K loss on hospital project</li>
                  <li>• Failed 2 certified payroll audits</li>
                  <li>• Office manager working 55+ hours/week</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">After Appello:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 1.5 hours/week timesheet management</li>
                  <li>• Zero payroll disputes in 8 months</li>
                  <li>• Identified profitable opportunities early</li>
                  <li>• 100% compliant reports automatically</li>
                  <li>• Office manager back to 40 hours/week</li>
                </ul>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-blue-600 pl-6 text-lg italic text-muted-foreground">
              "Appello didn't just save us time—it saved our sanity. We can actually bid projects 
              with confidence now because we know our real labor costs. Best investment we've made."
              <footer className="mt-2 text-sm font-semibold">
                — Mike Rodriguez, Project Manager, Martinez HVAC (85 employees)
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white py-16 -mx-4" aria-labelledby="final-cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Stop Losing $142,000 Per Year to Excel
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See exactly how much time and money Appello will save your business. 
            Get a personalized demo in 15 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="/contact">Get Your Free Cost Analysis</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/">Learn More About Appello</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>15-minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>ROI in 2 weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>No long-term contracts</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 