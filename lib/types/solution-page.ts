import { LucideIcon } from "lucide-react";

export interface SolutionPageData {
  slug: string;
  hero: HeroSection;
  problemStatement: ProblemSection;
  costCalculator?: CostCalculatorSection;
  solution: SolutionSection;
  resultsProof: ResultsSection;
  caseStudy?: CaseStudySection;
  finalCTA: CTASection;
  metadata: PageMetadata;
}

export interface HeroSection {
  badge: {
    text: string;
    bgColor: string;
    textColor: string;
  };
  headline: {
    text: string;
    highlightedText: string;
    highlightColor: string;
  };
  description: string;
  primaryCTA: {
    text: string;
    href: string;
    bgColor?: string;
    hoverColor?: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  urgencyIndicators: UrgencyIndicator[];
}

export interface UrgencyIndicator {
  icon: LucideIcon;
  text: string;
  color: string;
}

export interface ProblemSection {
  headline: string;
  description: string;
  painPoints: PainPoint[];
}

export interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  iconColor: string;
  borderColor: string;
}

export interface CostCalculatorSection {
  headline: string;
  costs: CostItem[];
  totalAmount: string;
  totalDescription: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

export interface CostItem {
  amount: string;
  description: string;
  breakdown?: string;
}

export interface SolutionSection {
  id: string;
  headline: string;
  description: string;
  solutions: Solution[];
  resultsProof: {
    headline: string;
    stats: Stat[];
    bgColor: string;
    textColor: string;
  };
}

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  bgColor: string;
  iconColor: string;
  featureColor: string;
}

export interface Stat {
  value: string;
  description: string;
  color: string;
}

export interface ResultsSection {
  headline: string;
  stats: Stat[];
}

export interface CaseStudySection {
  headline: string;
  beforeItems: string[];
  afterItems: string[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
    company: string;
  };
}

export interface CTASection {
  headline: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  features: string[];
  bgColor: string;
  textColor: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
} 