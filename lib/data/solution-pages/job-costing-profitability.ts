import { SolutionPageData } from "@/lib/types/solution-page";
import { 
  TrendingDown, 
  AlertTriangle, 
  DollarSign, 
  BarChart3, 
  Calculator, 
  Eye, 
  Zap, 
  Clock,
  Target,
  Users,
  ChartLine,
  AlertCircle
} from "lucide-react";

export const jobCostingProfitabilityData: SolutionPageData = {
  slug: "job-costing-profitability",
  hero: {
    badge: {
      text: "Hidden Profit Killer #1",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    headline: {
      text: "Discover Projects Lost Money",
      highlightedText: "Months Too Late",
      highlightColor: "text-green-600"
    },
    description: "Find out your project bombed 6 weeks after completion? Your field crews think they're crushing it while the office discovers you're bleeding $50K per project. Real-time job costing stops the bleeding today.",
    primaryCTA: {
      text: "Stop The Profit Bleeding - Demo",
      href: "/contact",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700"
    },
    secondaryCTA: {
      text: "See Real-Time Tracking",
      href: "#solution"
    },
    urgencyIndicators: [
      {
        icon: TrendingDown,
        text: "$50K+ Lost Per Project",
        color: "text-green-600"
      },
      {
        icon: Clock,
        text: "Discover Problems Too Late",
        color: "text-green-600"
      },
      {
        icon: AlertTriangle,
        text: "Field vs Office Disconnect",
        color: "text-green-600"
      }
    ]
  },
  problemStatement: {
    headline: "The Blind Profitability Crisis",
    description: "Every ICI subcontractor faces the same nightmare: projects that look profitable in the field but destroy your bottom line. Here's how the disconnect kills profits:",
    painPoints: [
      {
        icon: Eye,
        title: "Flying Blind Until It's Too Late",
        description: "Discover project losses weeks after completion. Field crew says 'we finished early' while accounting reveals you lost 25% margin. No real-time visibility = no course correction.",
        bullets: [
          "Month-end surprises on project profitability",
          "Can't adjust course while project is live",
          "Bid future jobs with wrong cost data"
        ],
        iconColor: "bg-green-100",
        borderColor: "border-green-100"
      },
      {
        icon: Users,
        title: "Field vs Office Misalignment",
        description: "Field crews focus on completion while office tracks costs. Nobody connects productivity to profitability in real-time. Different goals, different metrics, guaranteed losses.",
        bullets: [
          "Field doesn't see cost impact of decisions",
          "Office can't influence field productivity",
          "No shared accountability for profit"
        ],
        iconColor: "bg-green-100",
        borderColor: "border-green-100"
      },
      {
        icon: AlertCircle,
        title: "Overbilling and Client Disputes",
        description: "Bill based on estimates, not actual costs. Client challenges invoices, you can't prove value delivered. Disputes damage relationships and delay payments.",
        bullets: [
          "Invoices based on guesswork not reality",
          "Can't justify costs to suspicious clients",
          "Payment delays hurt cash flow"
        ],
        iconColor: "bg-green-100",
        borderColor: "border-green-100"
      },
      {
        icon: Calculator,
        title: "Broken Estimating Feedback Loop",
        description: "Estimate projects in isolation without learning from past performance. Same mistakes repeated project after project. No historical cost intelligence.",
        bullets: [
          "Estimating blind to actual performance",
          "Repeat costly mistakes on new bids",
          "No learning from completed projects"
        ],
        iconColor: "bg-green-100",
        borderColor: "border-green-100"
      }
    ]
  },
  costCalculator: {
    headline: "What Blind Job Costing Is Really Costing You",
    costs: [
      {
        amount: "$125,000",
        description: "Profit lost per year on projects",
        breakdown: "25% margin loss × $500K revenue"
      },
      {
        amount: "$35,000",
        description: "Overbilling disputes and delays",
        breakdown: "Client challenges, payment delays"
      },
      {
        amount: "$28,000",
        description: "Bad estimating decisions",
        breakdown: "Repeat mistakes, no cost intelligence"
      }
    ],
    totalAmount: "$188,000",
    totalDescription: "Total Annual Cost of Blind Job Costing",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-900"
  },
  solution: {
    id: "solution",
    headline: "See Every Dollar. Save Every Project. In Real-Time.",
    description: "Appello connects field productivity to financial performance instantly. Know if you're profitable while you can still fix it, not months later.",
    solutions: [
      {
        icon: Eye,
        title: "Real-Time Budget Alerts",
        description: "Know project profitability right now, not next month. Live dashboards show budget vs actual as work happens. Alert when margins slip before it's too late.",
        features: [
          "Live profit/loss tracking",
          "Instant budget variance alerts",
          "Phase-level cost visibility"
        ],
        bgColor: "bg-blue-50",
        iconColor: "bg-blue-100",
        featureColor: "text-blue-700"
      },
      {
        icon: ChartLine,
        title: "AI-Assisted Estimating",
        description: "Learn from every project automatically. AI analyzes actual costs vs estimates, identifies patterns, and suggests improvements for future bids.",
        features: [
          "Historical cost intelligence",
          "Pattern recognition & insights",
          "Automated estimate refinement"
        ],
        bgColor: "bg-purple-50",
        iconColor: "bg-purple-100",
        featureColor: "text-purple-700"
      },
      {
        icon: Zap,
        title: "Bi-Directional Field-Office Sync",
        description: "Field updates flow instantly to accounting. Cost centers update in real-time. Everyone sees the same numbers, works toward the same goals.",
        features: [
          "Instant cost center updates",
          "Field productivity visibility",
          "Unified profit accountability"
        ],
        bgColor: "bg-yellow-50",
        iconColor: "bg-yellow-100",
        featureColor: "text-yellow-700"
      }
    ],
    resultsProof: {
      headline: "Real Results From Real-Time Visibility",
      stats: [
        {
          value: "87%",
          description: "Reduction in projects<br />finishing over budget",
          color: "text-green-600"
        },
        {
          value: "34%",
          description: "Increase in project<br />margin accuracy",
          color: "text-green-600"
        },
        {
          value: "$188K",
          description: "Average annual savings<br />from real-time costing",
          color: "text-green-600"
        },
        {
          value: "91%",
          description: "Reduction in billing<br />disputes with clients",
          color: "text-green-600"
        }
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-900"
    }
  },
  resultsProof: {
    headline: "Real Results From Real-Time Visibility",
    stats: [
      {
        value: "87%",
        description: "Reduction in projects finishing over budget",
        color: "text-green-600"
      },
      {
        value: "34%",
        description: "Increase in project margin accuracy",
        color: "text-green-600"
      },
      {
        value: "$188K",
        description: "Average annual savings from real-time costing",
        color: "text-green-600"
      },
      {
        value: "91%",
        description: "Reduction in billing disputes with clients",
        color: "text-green-600"
      }
    ]
  },
  caseStudy: {
    headline: "Case Study: How Arctic Mechanical Turned Around $2M in Failing Projects",
    beforeItems: [
      "Discovering project losses 4-6 weeks after completion",
      "Field crews unaware of cost impact of decisions",
      "Client disputes over 40% of invoices submitted",
      "Estimating new projects with outdated cost data",
      "Average 15% margin loss across all projects"
    ],
    afterItems: [
      "Real-time project profitability visibility daily",
      "Field supervisors making cost-conscious decisions",
      "Client disputes reduced to under 5% of invoices",
      "AI-powered estimating with historical accuracy",
      "Consistent 18-22% margins across all projects"
    ],
    testimonial: {
      quote: "We went from discovering project failures months too late to catching budget issues while we could still fix them. Our field crews now understand the financial impact of their decisions in real-time. Game changer for profitability.",
      author: "David Park",
      title: "Project Manager",
      company: "Arctic Mechanical (95 employees)"
    }
  },
  finalCTA: {
    headline: "Stop Losing $188,000 Per Year to Blind Job Costing",
    description: "See exactly how real-time job costing would transform your project profitability. Get a live demo showing your profit visibility in action.",
    primaryCTA: {
      text: "Get Your Profitability Demo",
      href: "/contact"
    },
    secondaryCTA: {
      text: "Learn About Real-Time Tracking",
      href: "/"
    },
    features: [
      "Real-time profit visibility",
      "AI-powered cost intelligence",
      "Instant budget alerts",
      "Historical performance analysis"
    ],
    bgColor: "bg-green-600",
    textColor: "text-white"
  },
  metadata: {
    title: "Real-Time Job Costing & Profitability Tracking for ICI Subcontractors | Appello",
    description: "Stop discovering project losses months too late. Real-time job costing with budget alerts, AI-assisted estimating, and instant field-office sync. Built for ICI subcontractors.",
    keywords: [
      "real-time job costing",
      "construction profitability tracking",
      "project cost management",
      "construction budget alerts",
      "AI estimating software",
      "field office sync",
      "ICI subcontractor costing"
    ]
  }
}; 