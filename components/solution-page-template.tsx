import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { SolutionPageData } from "@/lib/types/solution-page";
import { HeroSection } from "@/components/solution-sections/hero-section";
import { ProblemSection } from "@/components/solution-sections/problem-section";
import { CostCalculatorSection } from "@/components/solution-sections/cost-calculator-section";
import { SolutionSection } from "@/components/solution-sections/solution-section";
import { CaseStudySection } from "@/components/solution-sections/case-study-section";
import { CTASection } from "@/components/solution-sections/cta-section";

interface SolutionPageTemplateProps {
  data: SolutionPageData;
}

export default function SolutionPageTemplate({ data }: SolutionPageTemplateProps) {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <HeroSection data={data.hero} />

      {/* Problem Statement Section */}
      <ProblemSection data={data.problemStatement} />

      {/* Cost Calculator Section (Optional) */}
      {data.costCalculator && (
        <CostCalculatorSection data={data.costCalculator} />
      )}

      {/* Solution Section */}
      <SolutionSection data={data.solution} />

      {/* Case Study Section (Optional) */}
      {data.caseStudy && (
        <CaseStudySection data={data.caseStudy} />
      )}

      {/* Final CTA Section */}
      <CTASection data={data.finalCTA} />
    </div>
  );
} 