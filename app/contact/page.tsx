import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle, Clock, DollarSign, Shield, Phone, Mail, MapPin, Users } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto py-20" aria-labelledby="hero-heading">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-4">
            Get Your Free Demo & Cost Analysis
          </span>
        </div>
        <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          See How Much Appello Will{" "}
          <span className="text-blue-600">Save Your Business</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Get a personalized demo and see exactly how much time and money Appello will save your 
          mechanical, electrical, or specialty contracting business. Most contractors save $50,000+ in year one.
        </p>

        {/* Value Props */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground mb-12">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>15-minute demo</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>Custom cost analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>No sales pressure</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>Setup in same day</span>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
        {/* Demo Request Form - Takes up 2 columns */}
        <div className="lg:col-span-2">
          <Card className="border-2 border-blue-100">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold">
                Schedule Your Free Demo & Cost Analysis
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll show you exactly how Appello can transform your 
                timesheet and payroll process. Most demos result in immediate setup.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      required 
                      placeholder="Your first name"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      required 
                      placeholder="Your last name"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="your.email@company.com"
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      required 
                      placeholder="(555) 123-4567"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      required 
                      placeholder="Your company name"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contractorType">Contractor Type *</Label>
                    <select 
                      id="contractorType" 
                      name="contractorType" 
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Select your trade</option>
                      <option value="electrical">Electrical Contractor</option>
                      <option value="mechanical">Mechanical/HVAC</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="specialty">Specialty Contractor</option>
                      <option value="general">General Contractor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employees">Number of Employees *</Label>
                    <select 
                      id="employees" 
                      name="employees" 
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">Select size</option>
                      <option value="5-15">5-15 employees</option>
                      <option value="16-30">16-30 employees</option>
                      <option value="31-50">31-50 employees</option>
                      <option value="51-100">51-100 employees</option>
                      <option value="100+">100+ employees</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentProcess">Current Timesheet Process</Label>
                  <Textarea 
                    id="currentProcess" 
                    name="currentProcess" 
                    placeholder="Briefly describe how you currently handle timesheets and payroll (Excel, paper, other software, etc.)"
                    className="border-gray-300 focus:border-blue-500 min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="biggestChallenge">Biggest Challenge *</Label>
                  <Textarea 
                    id="biggestChallenge" 
                    name="biggestChallenge" 
                    required
                    placeholder="What's your biggest pain point with time tracking and payroll? (e.g., collecting timesheets, payroll errors, job costing, compliance reporting)"
                    className="border-gray-300 focus:border-blue-500 min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Implementation Timeline</Label>
                  <select 
                    id="timeline" 
                    name="timeline"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">When do you need a solution?</option>
                    <option value="immediate">Immediately (ASAP)</option>
                    <option value="1-2weeks">Within 1-2 weeks</option>
                    <option value="1month">Within 1 month</option>
                    <option value="3months">Within 3 months</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-900">
                      <strong>What happens next:</strong> We'll review your information and contact you within 
                      2 hours to schedule a personalized demo. No sales pitch—just a real demo of how Appello 
                      solves your specific challenges.
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700"
                >
                  Get My Free Demo & Cost Analysis
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive communications from Appello. 
                  We never share your information and you can unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar with additional info */}
        <div className="space-y-6">
          {/* Why Choose Appello */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why Contractors Choose Appello</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Save 12+ Hours Weekly</div>
                  <div className="text-xs text-muted-foreground">Eliminate timesheet collection and data entry</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Increase Profits 25%</div>
                  <div className="text-xs text-muted-foreground">Real-time job costing and profit tracking</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">100% Compliance</div>
                  <div className="text-xs text-muted-foreground">Automated certified payroll and reporting</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">Crews Love It</div>
                  <div className="text-xs text-muted-foreground">Mobile-first design, GPS verification</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Other Ways to Reach Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-sm">(555) 123-4567</div>
                  <div className="text-xs text-muted-foreground">Mon-Fri 8AM-6PM EST</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-sm">demo@appello.com</div>
                  <div className="text-xs text-muted-foreground">We respond within 2 hours</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <div className="font-semibold text-sm">Austin, TX</div>
                  <div className="text-xs text-muted-foreground">Serving contractors nationwide</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-lg text-green-900">Proven Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-xs text-green-700">Happy contractors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$50K</div>
                <div className="text-xs text-green-700">Average first-year savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99.8%</div>
                <div className="text-xs text-green-700">Payroll accuracy rate</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-slate-50 py-16 -mx-4">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-8">
            Join These Successful Contractors
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <blockquote className="text-muted-foreground italic mb-4">
                "Setup took 10 minutes. Within a week, our payroll time dropped from 8 hours 
                to 30 minutes. Wish we'd found Appello years ago."
              </blockquote>
              <div>
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">Owner, Elite Electrical Solutions (42 employees)</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <blockquote className="text-muted-foreground italic mb-4">
                "The ROI was immediate. We caught a $30K project going over budget in real-time 
                and saved the whole job. Paid for itself in month one."
              </blockquote>
              <div>
                <div className="font-semibold">Mike Rodriguez</div>
                <div className="text-sm text-muted-foreground">Project Manager, Martinez HVAC (85 employees)</div>
              </div>
            </div>
          </div>

          {/* Customer Logos */}
          <div className="text-center">
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-12">
            Common Demo Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">How long does the demo take?</h3>
              <p className="text-muted-foreground text-sm">
                Most demos are 15-20 minutes. We focus on your specific challenges and show 
                exactly how Appello solves them. No generic sales pitch.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Can I start using it the same day?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! Setup takes about 15 minutes. We'll get your crew members set up with 
                the mobile app and you can start tracking time immediately.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">What if my crews aren't tech-savvy?</h3>
              <p className="text-muted-foreground text-sm">
                Appello is designed for construction crews. Most workers are clocking in/out 
                within minutes. We provide free training and support.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">How much does it cost?</h3>
              <p className="text-muted-foreground text-sm">
                Pricing starts at $8/user/month. Most contractors save 10x more than they spend. 
                We'll show you exact ROI calculations in the demo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white py-16 -mx-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Stop losing money to Excel timesheets. See how Appello can save your business 
            $50,000+ per year. Get your personalized demo today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="#demo-form">Get My Free Demo Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/time-tracking-contractors">Learn More About Our Solution</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 