import { SolutionPageData } from "@/lib/types/solution-page";
import { 
  Receipt, 
  DollarSign, 
  RefreshCw, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Zap, 
  Database,
  Link,
  BarChart3,
  CheckCircle2,
  Settings
} from "lucide-react";

export const financialIntegrationData: SolutionPageData = {
  slug: "financial-integration",
  hero: {
    badge: {
      text: "End Accounting Chaos",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-700"
    },
    headline: {
      text: "Your Accounting is",
      highlightedText: "Double Entry Hell",
      highlightColor: "text-indigo-600"
    },
    description: "Enter the same invoice 3 times - field system, office spreadsheet, QuickBooks. Financial data scattered across systems, reports always outdated, and month-end closing takes forever. Integration isn't luxury - it's sanity.",
    primaryCTA: {
      text: "Connect Your Accounting - Demo",
      href: "/contact",
      bgColor: "bg-indigo-600",
      hoverColor: "hover:bg-indigo-700"
    },
    secondaryCTA: {
      text: "See Financial Sync",
      href: "#solution"
    },
    urgencyIndicators: [
      {
        icon: Clock,
        text: "20+ Hours Weekly Data Entry",
        color: "text-indigo-600"
      },
      {
        icon: AlertTriangle,
        text: "Financial Reporting Delays",
        color: "text-indigo-600"
      },
      {
        icon: Receipt,
        text: "Accounting Error Costs",
        color: "text-indigo-600"
      }
    ]
  },
  problemStatement: {
    headline: "The Financial Data Nightmare",
    description: "Every ICI subcontractor fights the same battle: financial data trapped in silos, endless double entry, and accounting that's always behind reality. Here's how disconnected systems destroy profitability:",
    painPoints: [
      {
        icon: FileText,
        title: "Triple Data Entry Torture",
        description: "Same financial data entered multiple times - field app, office spreadsheet, accounting software. Each entry risks errors, consumes time, and delays financial visibility.",
        bullets: [
          "Data entered 3+ times manually",
          "Errors multiply with each entry",
          "Hours wasted on redundant work"
        ],
        iconColor: "bg-indigo-100",
        borderColor: "border-indigo-100"
      },
      {
        icon: Clock,
        title: "Month-End Closing Marathon",
        description: "Takes 2+ weeks to close books. Hunting for missing invoices, reconciling mismatched entries, and praying the numbers add up. Financial reporting is always outdated.",
        bullets: [
          "2+ weeks to close monthly books",
          "Constant data reconciliation",
          "Outdated financial reporting"
        ],
        iconColor: "bg-indigo-100",
        borderColor: "border-indigo-100"
      },
      {
        icon: BarChart3,
        title: "Financial Visibility Blackout",
        description: "Can't see real-time profitability, cash flow, or job costs. Financial decisions made on gut feeling and 30-day-old data. Opportunities missed, problems discovered too late.",
        bullets: [
          "No real-time financial visibility",
          "Decisions based on old data",
          "Profitability discovered after projects end"
        ],
        iconColor: "bg-indigo-100",
        borderColor: "border-indigo-100"
      },
      {
        icon: Settings,
        title: "Integration Complexity Chaos",
        description: "Every system speaks a different language. Custom exports, manual imports, data formatting nightmares. IT becomes a full-time job just keeping data flowing.",
        bullets: [
          "Systems don't communicate",
          "Manual export/import processes",
          "Data formatting inconsistencies"
        ],
        iconColor: "bg-indigo-100",
        borderColor: "border-indigo-100"
      }
    ]
  },
  costCalculator: {
    headline: "What Financial Disconnection Is Really Costing You",
    costs: [
      {
        amount: "$85,000",
        description: "Double data entry labor costs",
        breakdown: "20+ hours weekly at $80/hour average"
      },
      {
        amount: "$65,000",
        description: "Accounting errors and corrections",
        breakdown: "Mismatched entries, missed invoices, reconciliation"
      },
      {
        amount: "$95,000",
        description: "Delayed financial decision costs",
        breakdown: "Missed opportunities, late problem detection"
      }
    ],
    totalAmount: "$245,000",
    totalDescription: "Total Annual Cost of Financial Disconnection",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    textColor: "text-indigo-900"
  },
  solution: {
    id: "solution",
    headline: "Seamless Integration. Real-Time Sync. Zero Double Entry.",
    description: "Appello connects your field operations directly to QuickBooks, Sage, and other accounting systems. Data flows automatically, books close in hours, and financial visibility is instant.",
    solutions: [
      {
        icon: Link,
        title: "Native Accounting Integrations",
        description: "Direct connections to QuickBooks, Sage 300, Sage 50, Xero, and more. No custom coding, no middleware headaches. Data syncs automatically in real-time.",
        features: [
          "QuickBooks & Sage native integration",
          "Real-time bidirectional sync",
          "No custom coding required"
        ],
        bgColor: "bg-green-50",
        iconColor: "bg-green-100",
        featureColor: "text-green-700"
      },
      {
        icon: Zap,
        title: "Automated Financial Workflows",
        description: "Invoices, expenses, payroll, and job costs flow automatically from field to books. Approval workflows, GL coding, and tax handling all automated.",
        features: [
          "Automated invoice creation",
          "Smart GL account mapping",
          "Built-in approval workflows"
        ],
        bgColor: "bg-blue-50",
        iconColor: "bg-blue-100",
        featureColor: "text-blue-700"
      },
      {
        icon: BarChart3,
        title: "Real-Time Financial Dashboards",
        description: "Live profitability, cash flow, and job costing data. Financial KPIs update instantly as field data comes in. Make decisions on current data, not month-old reports.",
        features: [
          "Live profitability tracking",
          "Real-time cash flow visibility",
          "Instant financial KPIs"
        ],
        bgColor: "bg-yellow-50",
        iconColor: "bg-yellow-100",
        featureColor: "text-yellow-700"
      }
    ],
    resultsProof: {
      headline: "Real Results From Financial Integration",
      stats: [
        {
          value: "87%",
          description: "Reduction in data<br />entry time",
          color: "text-green-600"
        },
        {
          value: "92%",
          description: "Faster month-end<br />closing process",
          color: "text-green-600"
        },
        {
          value: "$245K",
          description: "Average annual savings<br />from financial integration",
          color: "text-green-600"
        },
        {
          value: "96%",
          description: "Improvement in<br />financial accuracy",
          color: "text-green-600"
        }
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-900"
    }
  },
  resultsProof: {
    headline: "Real Results From Financial Integration",
    stats: [
      {
        value: "87%",
        description: "Reduction in data entry time",
        color: "text-green-600"
      },
      {
        value: "92%",
        description: "Faster month-end closing process",
        color: "text-green-600"
      },
      {
        value: "$245K",
        description: "Average annual savings from financial integration",
        color: "text-green-600"
      },
      {
        value: "96%",
        description: "Improvement in financial accuracy",
        color: "text-green-600"
      }
    ]
  },
  caseStudy: {
    headline: "Case Study: How Phoenix Electrical Cut Month-End Closing from 12 Days to 2 Hours",
    beforeItems: [
      "12-day month-end closing process with manual reconciliation",
      "Triple data entry consuming 25 hours weekly",
      "Financial reports consistently 3+ weeks behind",
      "Accounting errors requiring 8+ hours monthly to resolve",
      "No real-time visibility into job profitability"
    ],
    afterItems: [
      "2-hour month-end closing with automated reconciliation",
      "Zero double data entry with real-time sync",
      "Financial reports updated instantly and automatically",
      "99.8% financial accuracy with error alerts",
      "Live job profitability tracking and instant alerts"
    ],
    testimonial: {
      quote: "The financial integration completely transformed our back office. We went from a 12-day month-end nightmare to closing books in 2 hours. Our CFO can finally focus on strategy instead of data entry, and we know our profitability on every job in real-time.",
      author: "David Chen",
      title: "CFO",
      company: "Phoenix Electrical (142 employees)"
    }
  },
  finalCTA: {
    headline: "Stop Losing $245,000 Per Year to Financial Disconnection",
    description: "See how seamless accounting integration would eliminate double entry and give you real-time financial visibility. Get a demo showing your complete financial sync solution.",
    primaryCTA: {
      text: "Get Your Integration Demo",
      href: "/contact"
    },
    secondaryCTA: {
      text: "Learn About Financial Sync",
      href: "/"
    },
    features: [
      "QuickBooks & Sage integration",
      "Real-time bidirectional sync",
      "Automated workflows",
      "Zero double data entry"
    ],
    bgColor: "bg-indigo-600",
    textColor: "text-white"
  },
  metadata: {
    title: "Financial Integration for ICI Subcontractors | QuickBooks & Sage Sync | Appello",
    description: "End double data entry. Native QuickBooks and Sage integration with real-time financial sync and automated workflows. Reduce data entry time by 87% for ICI subcontractors.",
    keywords: [
      "QuickBooks integration software",
      "Sage accounting integration",
      "construction financial software",
      "accounting automation",
      "financial data sync",
      "eliminate double entry",
      "ICI financial integration"
    ]
  }
}; 