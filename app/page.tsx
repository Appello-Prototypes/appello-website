import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
          Construction Management Software for{" "}
          <span className="text-blue-600">ICI Subcontractors</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Transform your construction business with time tracking, job costing, and project management 
          software built specifically for mechanical, electrical, and specialty contractors.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Schedule Demo</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/features">View Features</Link>
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Performance Statistics</h2>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2" role="img" aria-label="50 plus">50+</div>
          <div className="text-muted-foreground">Hours Saved Per Week</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2" role="img" aria-label="95 percent">95%</div>
          <div className="text-muted-foreground">Payroll Accuracy</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2" role="img" aria-label="25 percent">25%</div>
          <div className="text-muted-foreground">Profit Increase</div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="mt-24 text-center" aria-labelledby="problem-heading">
        <h2 id="problem-heading" className="text-3xl font-bold mb-6">
          Stop Fighting Excel Timesheets & Manual Processes
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          ICI subcontractors waste hours every week on paperwork, manual time tracking, and 
          estimating guesswork. Appello automates these processes so you can focus on what matters most - 
          building great projects and growing your business.
        </p>
      </section>

      {/* CTA Section */}
      <section className="mt-24 bg-blue-50 rounded-lg p-12 text-center" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join hundreds of contractors who&apos;ve streamlined their operations with Appello.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Get Started Today</Link>
        </Button>
      </section>
    </div>
  );
}
