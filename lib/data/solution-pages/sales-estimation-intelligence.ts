import { SolutionPageData } from "@/lib/types/solution-page";
import { 
  Calculator, 
  Target, 
  TrendingUp, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Brain, 
  Zap,
  BarChart3,
  CheckCircle2,
  Users,
  DollarSign
} from "lucide-react";

export const salesEstimationIntelligenceData: SolutionPageData = {
  slug: "sales-estimation-intelligence",
  hero: {
    badge: {
      text: "End Estimation Guesswork",
      bgColor: "bg-violet-50",
      textColor: "text-violet-700"
    },
    headline: {
      text: "Your Estimates are",
      highlightedText: "Killing Profits",
      highlightColor: "text-violet-600"
    },
    description: "Spend 40 hours on estimates that lose money or lose bids. Manual takeoffs, outdated pricing, and gut-feeling proposals against competitors with AI. Smart estimation isn't coming - it's here.",
    primaryCTA: {
      text: "Optimize Your Estimating - Demo",
      href: "/contact",
      bgColor: "bg-violet-600",
      hoverColor: "hover:bg-violet-700"
    },
    secondaryCTA: {
      text: "See AI Estimation",
      href: "#solution"
    },
    urgencyIndicators: [
      {
        icon: Target,
        text: "25% Bid Win Rate",
        color: "text-violet-600"
      },
      {
        icon: Calculator,
        text: "Estimation Errors Cost $$$",
        color: "text-violet-600"
      },
      {
        icon: Clock,
        text: "40+ Hours Per Proposal",
        color: "text-violet-600"
      }
    ]
  },
  problemStatement: {
    headline: "The Manual Estimation Disaster",
    description: "Every ICI subcontractor fights the same uphill battle: manual estimating that's slow, inaccurate, and consistently beaten by competitors with better tools. Here's how manual estimation destroys profitability:",
    painPoints: [
      {
        icon: Calculator,
        title: "Estimation Accuracy Nightmare",
        description: "Manual takeoffs, outdated unit prices, and subjective adjustments. Estimates consistently 15-30% off actual costs. Win unprofitable jobs or lose profitable ones.",
        bullets: [
          "Manual takeoffs prone to errors",
          "Outdated pricing databases",
          "15-30% estimation variance"
        ],
        iconColor: "bg-violet-100",
        borderColor: "border-violet-100"
      },
      {
        icon: Clock,
        title: "Proposal Speed Disaster",
        description: "40+ hours to prepare a single proposal. Miss bid deadlines, lose rush opportunities, and watch competitors submit faster bids with AI-powered tools.",
        bullets: [
          "40+ hours per proposal",
          "Missed bid deadlines",
          "Competitors with AI speed advantage"
        ],
        iconColor: "bg-violet-100",
        borderColor: "border-violet-100"
      },
      {
        icon: Target,
        title: "Low Bid Win Rates",
        description: "Win rate stuck at 25% or lower. No data-driven insights into why bids lose. Pricing strategy based on gut feeling instead of market intelligence.",
        bullets: [
          "25% or lower win rates",
          "No bid loss analysis",
          "Gut-feeling pricing strategy"
        ],
        iconColor: "bg-violet-100",
        borderColor: "border-violet-100"
      },
      {
        icon: BarChart3,
        title: "Sales Pipeline Chaos",
        description: "No visibility into opportunity pipeline, proposal status, or revenue forecasting. Sales team works in spreadsheets, opportunities fall through cracks.",
        bullets: [
          "No pipeline visibility",
          "Spreadsheet-based sales process",
          "Opportunities fall through cracks"
        ],
        iconColor: "bg-violet-100",
        borderColor: "border-violet-100"
      }
    ]
  },
  costCalculator: {
    headline: "What Manual Estimation Is Really Costing You",
    costs: [
      {
        amount: "$195,000",
        description: "Lost profitable opportunities",
        breakdown: "Low win rates and missed competitive bids"
      },
      {
        amount: "$125,000",
        description: "Estimation errors and overruns",
        breakdown: "Inaccurate estimates leading to project losses"
      },
      {
        amount: "$85,000",
        description: "Proposal preparation inefficiency",
        breakdown: "40+ hours per proposal at $80/hour"
      }
    ],
    totalAmount: "$405,000",
    totalDescription: "Total Annual Cost of Manual Estimation",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    textColor: "text-violet-900"
  },
  solution: {
    id: "solution",
    headline: "AI-Powered Estimation. Intelligent Bidding. Maximum Profit.",
    description: "Appello's estimation intelligence analyzes historical data, market trends, and competitor patterns to create accurate estimates in minutes, not weeks.",
    solutions: [
      {
        icon: Brain,
        title: "AI-Powered Estimation Engine",
        description: "Machine learning analyzes thousands of completed projects to predict accurate costs, optimal pricing, and win probability for every bid.",
        features: [
          "Historical data analysis",
          "Predictive cost modeling",
          "Win probability scoring"
        ],
        bgColor: "bg-green-50",
        iconColor: "bg-green-100",
        featureColor: "text-green-700"
      },
      {
        icon: Zap,
        title: "Automated Proposal Generation",
        description: "Generate professional proposals in minutes, not days. Smart templates, automated takeoffs, and dynamic pricing based on project complexity and market conditions.",
        features: [
          "Automated takeoff generation",
          "Smart proposal templates",
          "Dynamic market pricing"
        ],
        bgColor: "bg-blue-50",
        iconColor: "bg-blue-100",
        featureColor: "text-blue-700"
      },
      {
        icon: TrendingUp,
        title: "Intelligent Sales Pipeline",
        description: "Track opportunities from lead to close. AI-powered lead scoring, automated follow-ups, and revenue forecasting that actually predicts your future.",
        features: [
          "AI lead scoring",
          "Automated follow-up sequences",
          "Predictive revenue forecasting"
        ],
        bgColor: "bg-yellow-50",
        iconColor: "bg-yellow-100",
        featureColor: "text-yellow-700"
      }
    ],
    resultsProof: {
      headline: "Real Results From Estimation Intelligence",
      stats: [
        {
          value: "78%",
          description: "Improvement in<br />bid win rates",
          color: "text-green-600"
        },
        {
          value: "89%",
          description: "Reduction in<br />estimation errors",
          color: "text-green-600"
        },
        {
          value: "$405K",
          description: "Average annual savings<br />from intelligent estimation",
          color: "text-green-600"
        },
        {
          value: "85%",
          description: "Faster proposal<br />generation time",
          color: "text-green-600"
        }
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-900"
    }
  },
  resultsProof: {
    headline: "Real Results From Estimation Intelligence",
    stats: [
      {
        value: "78%",
        description: "Improvement in bid win rates",
        color: "text-green-600"
      },
      {
        value: "89%",
        description: "Reduction in estimation errors",
        color: "text-green-600"
      },
      {
        value: "$405K",
        description: "Average annual savings from intelligent estimation",
        color: "text-green-600"
      },
      {
        value: "85%",
        description: "Faster proposal generation time",
        color: "text-green-600"
      }
    ]
  },
  caseStudy: {
    headline: "Case Study: How Apex Construction Increased Win Rate from 22% to 67%",
    beforeItems: [
      "22% bid win rate with manual estimation process",
      "45+ hours to prepare each detailed proposal",
      "Estimation errors causing 18% average project overruns",
      "No visibility into why bids were lost",
      "Sales pipeline managed in spreadsheets"
    ],
    afterItems: [
      "67% bid win rate with AI-powered estimation",
      "6 hours to generate comprehensive proposals",
      "Estimation accuracy within 3% of actual costs",
      "AI analysis identifies optimal pricing strategies",
      "Intelligent pipeline with predictive revenue forecasting"
    ],
    testimonial: {
      quote: "The AI estimation completely transformed our competitive position. We went from losing most bids to winning two-thirds of them. The system learns from every project and gets smarter, while our proposals went from taking weeks to taking hours. Our revenue has doubled.",
      author: "Michael Rodriguez",
      title: "VP of Business Development",
      company: "Apex Construction (98 employees)"
    }
  },
  finalCTA: {
    headline: "Stop Losing $405,000 Per Year to Manual Estimation",
    description: "See how AI-powered estimation intelligence would increase your win rates and eliminate costly estimation errors. Get a demo showing your complete sales optimization solution.",
    primaryCTA: {
      text: "Get Your Estimation Demo",
      href: "/contact"
    },
    secondaryCTA: {
      text: "Learn About AI Estimation",
      href: "/"
    },
    features: [
      "AI-powered cost prediction",
      "Automated proposal generation",
      "Intelligent sales pipeline",
      "Win rate optimization"
    ],
    bgColor: "bg-violet-600",
    textColor: "text-white"
  },
  metadata: {
    title: "Sales & Estimation Intelligence for ICI Subcontractors | AI-Powered Bidding | Appello",
    description: "End estimation guesswork. AI-powered estimation intelligence with automated proposal generation and intelligent sales pipeline. Increase win rates by 78% for ICI subcontractors.",
    keywords: [
      "construction estimation software",
      "AI bidding intelligence",
      "automated proposal generation",
      "construction sales pipeline",
      "intelligent estimation",
      "bid optimization",
      "ICI sales intelligence"
    ]
  }
}; 