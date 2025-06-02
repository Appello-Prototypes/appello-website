import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroSection as HeroSectionType } from "@/lib/types/solution-page";

interface HeroSectionProps {
  data: HeroSectionType;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="text-center max-w-4xl mx-auto py-20" aria-labelledby="hero-heading">
      <div className="mb-6">
        <span 
          className={`inline-block px-4 py-2 ${data.badge.bgColor} ${data.badge.textColor} text-sm font-medium rounded-full mb-4`}
        >
          {data.badge.text}
        </span>
      </div>
      <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        {data.headline.text}{" "}
        <span className={data.headline.highlightColor}>
          {data.headline.highlightedText}
        </span>
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
        {data.description}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Button 
          size="lg" 
          className={`text-lg px-8 py-6 ${data.primaryCTA.bgColor || 'bg-red-600'} ${data.primaryCTA.hoverColor || 'hover:bg-red-700'}`} 
          asChild
        >
          <Link href={data.primaryCTA.href}>{data.primaryCTA.text}</Link>
        </Button>
        <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
          <Link href={data.secondaryCTA.href}>{data.secondaryCTA.text}</Link>
        </Button>
      </div>

      {/* Urgency Indicators */}
      {data.urgencyIndicators.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
          {data.urgencyIndicators.map((indicator, index) => (
            <div key={index} className="flex items-center gap-2">
              <indicator.icon className={`h-4 w-4 ${indicator.color}`} />
              <span>{indicator.text}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
} 