import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { CTASection as CTASectionType } from "@/lib/types/solution-page";

interface CTASectionProps {
  data: CTASectionType;
}

export function CTASection({ data }: CTASectionProps) {
  return (
    <section className={`${data.bgColor} ${data.textColor} py-16 -mx-4`} aria-labelledby="final-cta-heading">
      <div className="container mx-auto px-4 text-center">
        <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
          {data.headline}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {data.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link href={data.primaryCTA.href}>{data.primaryCTA.text}</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600" 
            asChild
          >
            <Link href={data.secondaryCTA.href}>{data.secondaryCTA.text}</Link>
          </Button>
        </div>

        {data.features.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-75">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 