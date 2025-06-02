import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionNotFound() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Solution Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Sorry, we couldn't find the solution page you're looking for. 
          It may have been moved or doesn't exist yet.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild>
            <Link href="/">Back to Homepage</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">Looking for a specific solution?</h2>
          <p className="text-muted-foreground mb-4">
            We're constantly adding new solution pages. Contact us to learn about our full platform capabilities.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Time Tracking & Payroll Automation</li>
            <li>• Real-Time Job Costing</li>
            <li>• Equipment & Asset Management</li>
            <li>• Safety & Compliance Management</li>
            <li>• And much more...</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 