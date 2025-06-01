import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Clock, DollarSign, Shield, Users, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto py-20" aria-labelledby="hero-heading">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-4">
            Trusted by 500+ ICI Subcontractors
          </span>
        </div>
        <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Stop Wasting 10+ Hours Weekly on{" "}
          <span className="text-blue-600">Excel Timesheets</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Appello helps mechanical, electrical, and specialty contractors eliminate manual timesheet chaos, 
          boost payroll accuracy to 99.8%, and increase project profitability by 25% on average.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="/contact">Schedule Your Demo</Link>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="/time-tracking-contractors">See How It Works</Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-600" />
            <span>SOC 2 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-blue-600" />
            <span>500+ Contractors</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span>99.8% Uptime</span>
          </div>
        </div>
      </section>

      {/* Problem/Results Stats */}
      <section className="bg-slate-50 py-16 -mx-4" aria-labelledby="results-heading">
        <div className="container mx-auto px-4">
          <h2 id="results-heading" className="text-center text-3xl font-bold mb-12">
            See What Contractors Are Achieving With Appello
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-sm text-muted-foreground">Hours Saved<br />Per Week</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">Payroll<br />Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
              <div className="text-sm text-muted-foreground">Profit<br />Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2 min</div>
              <div className="text-sm text-muted-foreground">Setup<br />Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-20" aria-labelledby="benefits-heading">
        <div className="text-center mb-16">
          <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Built Specifically for ICI Subcontractors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlike generic construction software, Appello understands the unique challenges 
            of mechanical, electrical, and specialty contractors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Replace Excel Chaos</h3>
            <p className="text-muted-foreground">
              Eliminate error-prone spreadsheets with automated time tracking that actually works 
              for field crews and office staff.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-Time Job Costing</h3>
            <p className="text-muted-foreground">
              Know exactly if your projects are profitable before it's too late. 
              Track labor, materials, and overhead in real-time.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Compliance Made Simple</h3>
            <p className="text-muted-foreground">
              Automatically track prevailing wage requirements, certified payroll, 
              and union reporting without the paperwork nightmare.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-blue-50 py-16 -mx-4" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <h2 id="testimonials-heading" className="text-center text-3xl font-bold mb-12">
            Why ICI Contractors Choose Appello
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">M</span>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground italic mb-3">
                    "We were spending 15+ hours every week just on timesheets and payroll prep. 
                    Appello cut that down to under 2 hours. Our crews love the mobile app."
                  </p>
                  <div>
                    <div className="font-semibold">Mike Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Project Manager, Martinez HVAC</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">S</span>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground italic mb-3">
                    "Finally know which jobs are actually making money! Appello's job costing 
                    helped us identify we were losing money on service calls. Increased profits 30%."
                  </p>
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">Owner, Elite Electrical Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Logos */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-6">Trusted by contractors nationwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-bold text-gray-600">ACME HVAC</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-bold text-gray-600">Elite Electric</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-bold text-gray-600">Pro Mechanical</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="font-bold text-gray-600">Precision Plumbing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20" aria-labelledby="problem-heading">
        <div className="text-center max-w-4xl mx-auto">
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Are You Still Fighting These Daily Frustrations?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-600 text-sm">✗</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Timesheet Collection Nightmare</h3>
                <p className="text-muted-foreground text-sm">Chasing down paper timesheets, dealing with illegible handwriting, and manually entering data</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-600 text-sm">✗</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Payroll Errors & Disputes</h3>
                <p className="text-muted-foreground text-sm">Constant arguments about hours worked, overtime calculations, and job assignments</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-600 text-sm">✗</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Unknown Job Profitability</h3>
                <p className="text-muted-foreground text-sm">Finding out projects lost money weeks or months after completion</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-red-600 text-sm">✗</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Compliance Headaches</h3>
                <p className="text-muted-foreground text-sm">Scrambling to prepare certified payroll and prevailing wage reports</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            You didn't get into construction to become a spreadsheet expert. 
            Let Appello handle the paperwork so you can focus on building great projects.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white py-16 -mx-4" aria-labelledby="final-cta-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Eliminate Timesheet Chaos?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ contractors who've transformed their operations with Appello. 
            See results in your first week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="/contact">Schedule Your Free Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/time-tracking-contractors">Learn More</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>15-minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
