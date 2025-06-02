import { SolutionPageData } from "@/lib/types/solution-page";
import { 
  Puzzle, 
  Zap, 
  Database, 
  Link, 
  Settings, 
  TrendingUp, 
  Shield, 
  Smartphone,
  RefreshCw,
  BarChart3,
  Users,
  Clock
} from "lucide-react";

export const unifiedPlatformData: SolutionPageData = {
  slug: "unified-platform",
  hero: {
    badge: {
      text: "End the Software Juggling Act",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700"
    },
    headline: {
      text: "Stop Juggling",
      highlightedText: "18 Different Systems",
      highlightColor: "text-orange-600"
    },
    description: "Your crew is drowning in disconnected software. Email here, timesheet there, project data somewhere else. Every task requires 3 different logins and costs you 2+ hours daily in system switching alone.",
    primaryCTA: {
      text: "Unify Your Systems - Get Demo",
      href: "/contact",
      bgColor: "bg-orange-600",
      hoverColor: "hover:bg-orange-700"
    },
    secondaryCTA: {
      text: "See the Integration Power",
      href: "#solution"
    },
    urgencyIndicators: [
      {
        icon: Puzzle,
        text: "18+ Systems to Manage",
        color: "text-orange-600"
      },
      {
        icon: Clock,
        text: "2+ Hours Lost Daily",
        color: "text-orange-600"
      },
      {
        icon: Database,
        text: "Data Living in Silos",
        color: "text-orange-600"
      }
    ]
  },
  problemStatement: {
    headline: "The System Fragmentation Nightmare",
    description: "Every ICI subcontractor battles the same enemy: disconnected systems that don't talk to each other. Here's how it's killing your efficiency:",
    painPoints: [
      {
        icon: Puzzle,
        title: "System Switching Chaos",
        description: "Jump between 5-10 different platforms daily. Timesheet app, project management tool, accounting software, safety platform, equipment tracker - none connected.",
        bullets: [
          "18+ logins to manage daily operations",
          "Data entry duplicated across systems",
          "Constant app switching kills focus"
        ],
        iconColor: "bg-orange-100",
        borderColor: "border-orange-100"
      },
      {
        icon: Database,
        title: "Data Lives in Silos",
        description: "Critical information trapped in separate systems. Project costs here, timesheets there, equipment status somewhere else. No single source of truth.",
        bullets: [
          "Can't see project profitability in real-time",
          "Safety data disconnected from projects",
          "Equipment utilization invisible"
        ],
        iconColor: "bg-orange-100",
        borderColor: "border-orange-100"
      },
      {
        icon: RefreshCw,
        title: "Manual Data Syncing Hell",
        description: "Spend hours weekly copying data between systems. Export from timesheet app, import to accounting, manually update project status. Error-prone and time-consuming.",
        bullets: [
          "Weekly export/import data routines",
          "Human error in manual transfers",
          "Delayed reporting and decisions"
        ],
        iconColor: "bg-orange-100",
        borderColor: "border-orange-100"
      },
      {
        icon: Link,
        title: "Integration Promises Broken",
        description: "Vendors promise 'seamless integration' but deliver basic data dumps or expensive custom development. Real-time sync remains a dream.",
        bullets: [
          "Promised integrations don't work",
          "$10K+ custom integration quotes",
          "Still manual workarounds required"
        ],
        iconColor: "bg-orange-100",
        borderColor: "border-orange-100"
      }
    ]
  },
  costCalculator: {
    headline: "What System Fragmentation Is Really Costing You",
    costs: [
      {
        amount: "$78,000",
        description: "Lost productivity per year",
        breakdown: "2 hrs/day × $65/hr × 3 office staff × 250 days"
      },
      {
        amount: "$45,000",
        description: "Multiple software subscriptions",
        breakdown: "Average 12 systems × $312/month each"
      },
      {
        amount: "$25,000",
        description: "Data errors and rework",
        breakdown: "Manual entry mistakes, delayed decisions"
      }
    ],
    totalAmount: "$148,000",
    totalDescription: "Total Annual Cost of System Fragmentation",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-900"
  },
  solution: {
    id: "solution",
    headline: "One Platform. 18 Functions. Zero Fragmentation.",
    description: "Appello unifies every aspect of your ICI subcontracting operation in one integrated platform. No more system switching, no more data silos, no more manual syncing.",
    solutions: [
      {
        icon: Database,
        title: "Unified Data Architecture",
        description: "All your business data lives in one place. Projects, timesheets, equipment, safety, accounting - everything connected and synchronized automatically.",
        features: [
          "Single source of truth for all data",
          "Real-time sync across all functions",
          "Unified reporting and analytics"
        ],
        bgColor: "bg-blue-50",
        iconColor: "bg-blue-100",
        featureColor: "text-blue-700"
      },
      {
        icon: Zap,
        title: "Native Integration Engine",
        description: "Built-in connections to your existing tools. QuickBooks, Sage, Procore - we speak their language fluently without expensive custom development.",
        features: [
          "Bi-directional data sync",
          "Pre-built integrations included",
          "Trimble App XChange certified"
        ],
        bgColor: "bg-green-50",
        iconColor: "bg-green-100",
        featureColor: "text-green-700"
      },
      {
        icon: Settings,
        title: "Modular Platform Design",
        description: "Use what you need, when you need it. Start with time tracking, add job costing, expand to full operations. Grows with your business organically.",
        features: [
          "Pick your modules",
          "Seamless expansion",
          "Consistent user experience"
        ],
        bgColor: "bg-purple-50",
        iconColor: "bg-purple-100",
        featureColor: "text-purple-700"
      }
    ],
    resultsProof: {
      headline: "Real Results From Unified Operations",
      stats: [
        {
          value: "89%",
          description: "Reduction in time spent<br />switching between systems",
          color: "text-green-600"
        },
        {
          value: "95%",
          description: "Decrease in manual<br />data entry tasks",
          color: "text-green-600"
        },
        {
          value: "$148K",
          description: "Average annual savings<br />from system unification",
          color: "text-green-600"
        },
        {
          value: "72%",
          description: "Faster reporting<br />and decision making",
          color: "text-green-600"
        }
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-900"
    }
  },
  resultsProof: {
    headline: "Real Results From Unified Operations",
    stats: [
      {
        value: "89%",
        description: "Reduction in time spent switching between systems",
        color: "text-green-600"
      },
      {
        value: "95%",
        description: "Decrease in manual data entry tasks",
        color: "text-green-600"
      },
      {
        value: "$148K",
        description: "Average annual savings from system unification",
        color: "text-green-600"
      },
      {
        value: "72%",
        description: "Faster reporting and decision making",
        color: "text-green-600"
      }
    ]
  },
  caseStudy: {
    headline: "Case Study: How Sterling Electric Eliminated 14 Systems in 6 Months",
    beforeItems: [
      "Managing 14 different software platforms daily",
      "3+ hours weekly copying data between systems",
      "Delayed project reporting due to manual processes",
      "Data inconsistencies causing billing disputes",
      "$4,200/month in overlapping software subscriptions"
    ],
    afterItems: [
      "Single unified platform for all operations",
      "Automatic data sync across all functions",
      "Real-time project visibility and reporting",
      "Eliminated data errors and billing disputes",
      "$1,400/month total platform cost (66% savings)"
    ],
    testimonial: {
      quote: "We went from managing 14 different systems to one unified platform. Our office productivity increased 40% and we eliminated $2,800 in monthly software costs. The integration with our existing QuickBooks was seamless.",
      author: "Sarah Chen",
      title: "Operations Manager",
      company: "Sterling Electric (125 employees)"
    }
  },
  finalCTA: {
    headline: "Stop Losing $148,000 Per Year to System Fragmentation",
    description: "See how Appello unifies your entire operation in one powerful platform. Get a personalized demo showing your specific integration scenarios.",
    primaryCTA: {
      text: "Get Your Integration Demo",
      href: "/contact"
    },
    secondaryCTA: {
      text: "See All 18 Functions",
      href: "/"
    },
    features: [
      "Native integrations included",
      "30-day money-back guarantee",
      "No custom development fees",
      "Free data migration"
    ],
    bgColor: "bg-orange-600",
    textColor: "text-white"
  },
  metadata: {
    title: "Unified Platform for ICI Subcontractors | Eliminate System Fragmentation | Appello",
    description: "Stop juggling 18 different systems. Appello unifies time tracking, job costing, safety, equipment, and accounting in one powerful platform. Native integrations included.",
    keywords: [
      "unified contractor platform",
      "integrated construction software",
      "eliminate system fragmentation",
      "construction software integration",
      "all-in-one contractor management",
      "ICI subcontractor platform",
      "native construction integrations"
    ]
  }
}; 