import { SolutionPageData } from "@/lib/types/solution-page";
import { 
  AlertTriangle, 
  Clock, 
  DollarSign, 
  FileText, 
  Calculator, 
  TrendingUp, 
  Shield, 
  Smartphone 
} from "lucide-react";

export const timeTrackingPayrollData: SolutionPageData = {
  slug: "time-tracking-payroll",
  hero: {
    badge: {
      text: "The #1 Problem Killing Contractor Profits",
      bgColor: "bg-red-50",
      textColor: "text-red-700"
    },
    headline: {
      text: "Your Excel Timesheets Are",
      highlightedText: "Bleeding Money",
      highlightColor: "text-red-600"
    },
    description: "Every week you lose 12+ hours chasing down paper timesheets, fixing payroll errors, and discovering projects lost money months too late. There's a better way.",
    primaryCTA: {
      text: "Stop The Bleeding - Get Demo",
      href: "/contact",
      bgColor: "bg-red-600",
      hoverColor: "hover:bg-red-700"
    },
    secondaryCTA: {
      text: "See How We Fix This",
      href: "#solution"
    },
    urgencyIndicators: [
      {
        icon: AlertTriangle,
        text: "$50K+ Lost Per Year",
        color: "text-red-600"
      },
      {
        icon: Clock,
        text: "12+ Hours Wasted Weekly",
        color: "text-red-600"
      },
      {
        icon: DollarSign,
        text: "25% Hidden Profit Loss",
        color: "text-red-600"
      }
    ]
  },
  problemStatement: {
    headline: "The Excel Timesheet Death Spiral",
    description: "Every mechanical, electrical, and specialty contractor knows this pain. Here's exactly how it's destroying your business:",
    painPoints: [
      {
        icon: FileText,
        title: "Monday Morning Timesheet Hunt",
        description: "Start every week chasing down missing timesheets from your crews. Half are illegible, a quarter are missing, and the rest have 'creative' math that doesn't add up.",
        bullets: [
          "3+ hours spent collecting paper sheets",
          "Crews 'forget' to submit timesheets",
          "Handwriting is unreadable"
        ],
        iconColor: "bg-red-100",
        borderColor: "border-red-100"
      },
      {
        icon: Calculator,
        title: "Payroll Processing Hell",
        description: "Spend 6+ hours every payroll period manually entering data, fixing errors, and arguing with workers about their hours. Overtime calculations are a nightmare.",
        bullets: [
          "Manual data entry errors",
          "Overtime calculation mistakes",
          "Worker disputes about hours"
        ],
        iconColor: "bg-red-100",
        borderColor: "border-red-100"
      },
      {
        icon: TrendingUp,
        title: "Invisible Profit Bleeding",
        description: "Discover projects lost money weeks or months after completion. No real-time job costing means you're flying blind on every project.",
        bullets: [
          "No real-time job costing",
          "Labor allocation guesswork",
          "Profit loss discovered too late"
        ],
        iconColor: "bg-red-100",
        borderColor: "border-red-100"
      },
      {
        icon: Shield,
        title: "Compliance Panic Mode",
        description: "Scramble every month to prepare certified payroll reports. Prevailing wage tracking is a manual nightmare that keeps you up at night.",
        bullets: [
          "Manual certified payroll prep",
          "Prevailing wage miscalculations",
          "Audit stress and penalties"
        ],
        iconColor: "bg-red-100",
        borderColor: "border-red-100"
      }
    ]
  },
  costCalculator: {
    headline: "What This Is Really Costing You",
    costs: [
      {
        amount: "$52,000",
        description: "Lost productivity per year",
        breakdown: "12 hrs/week × $50/hr × 20 workers"
      },
      {
        amount: "$75,000",
        description: "Profit lost to poor job costing",
        breakdown: "25% margin loss on $300K revenue"
      },
      {
        amount: "$15,000",
        description: "Payroll errors & disputes",
        breakdown: "Overtime mistakes, compliance fines"
      }
    ],
    totalAmount: "$142,000",
    totalDescription: "Total Annual Cost of Excel Timesheets",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-900"
  },
  solution: {
    id: "solution",
    headline: "Here's How Appello Stops The Bleeding",
    description: "Eliminate timesheet chaos in 15 minutes. No more Excel. No more paper. No more payroll headaches. Just accurate, automated time tracking that actually works.",
    solutions: [
      {
        icon: Smartphone,
        title: "Mobile-First Time Tracking",
        description: "Your crews clock in/out with their phones. GPS verification, photo uploads, and job notes. No more chasing paper timesheets.",
        features: [
          "GPS location verification",
          "Photo time stamps",
          "Offline capability"
        ],
        bgColor: "bg-green-50",
        iconColor: "bg-green-100",
        featureColor: "text-green-700"
      },
      {
        icon: DollarSign,
        title: "Real-Time Job Costing",
        description: "Know exactly if your projects are profitable RIGHT NOW. Track labor, materials, and overhead in real-time.",
        features: [
          "Live profit/loss tracking",
          "Budget vs actual alerts",
          "Phase-level visibility"
        ],
        bgColor: "bg-blue-50",
        iconColor: "bg-blue-100",
        featureColor: "text-blue-700"
      },
      {
        icon: Shield,
        title: "Automated Compliance",
        description: "Certified payroll reports generated automatically. Prevailing wage calculations done right, every time.",
        features: [
          "Auto certified payroll",
          "Prevailing wage tracking",
          "Union reporting ready"
        ],
        bgColor: "bg-purple-50",
        iconColor: "bg-purple-100",
        featureColor: "text-purple-700"
      }
    ],
    resultsProof: {
      headline: "Real Results From Real Contractors",
      stats: [
        {
          value: "92%",
          description: "Reduction in timesheet<br />collection time",
          color: "text-green-600"
        },
        {
          value: "99.8%",
          description: "Payroll accuracy<br />improvement",
          color: "text-green-600"
        },
        {
          value: "$50K",
          description: "Average annual<br />savings per contractor",
          color: "text-green-600"
        },
        {
          value: "2 weeks",
          description: "Time to see<br />full ROI",
          color: "text-green-600"
        }
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-900"
    }
  },
  resultsProof: {
    headline: "Real Results From Real Contractors",
    stats: [
      {
        value: "92%",
        description: "Reduction in timesheet collection time",
        color: "text-green-600"
      },
      {
        value: "99.8%",
        description: "Payroll accuracy improvement",
        color: "text-green-600"
      },
      {
        value: "$50K",
        description: "Average annual savings per contractor",
        color: "text-green-600"
      },
      {
        value: "2 weeks",
        description: "Time to see full ROI",
        color: "text-green-600"
      }
    ]
  },
  caseStudy: {
    headline: "Case Study: How Martinez HVAC Saved $73,000 in Year One",
    beforeItems: [
      "18 hours/week collecting timesheets",
      "3-4 payroll disputes every period",
      "Discovered $45K loss on hospital project",
      "Failed 2 certified payroll audits",
      "Office manager working 55+ hours/week"
    ],
    afterItems: [
      "1.5 hours/week timesheet management",
      "Zero payroll disputes in 8 months",
      "Identified profitable opportunities early",
      "100% compliant reports automatically",
      "Office manager back to 40 hours/week"
    ],
    testimonial: {
      quote: "Appello didn't just save us time—it saved our sanity. We can actually bid projects with confidence now because we know our real labor costs. Best investment we've made.",
      author: "Mike Rodriguez",
      title: "Project Manager",
      company: "Martinez HVAC (85 employees)"
    }
  },
  finalCTA: {
    headline: "Stop Losing $142,000 Per Year to Excel",
    description: "See exactly how much time and money Appello will save your business. Get a personalized demo in 15 minutes.",
    primaryCTA: {
      text: "Get Your Free Cost Analysis",
      href: "/contact"
    },
    secondaryCTA: {
      text: "Learn More About Appello",
      href: "/"
    },
    features: [
      "15-minute setup",
      "ROI in 2 weeks",
      "Cancel anytime",
      "No long-term contracts"
    ],
    bgColor: "bg-blue-600",
    textColor: "text-white"
  },
  metadata: {
    title: "Time Tracking & Payroll Automation for ICI Subcontractors | Appello",
    description: "End your payroll nightmare forever. Automated time tracking with geofencing, union calculations, and certified payroll reporting built specifically for ICI subcontractors.",
    keywords: [
      "time tracking contractors",
      "construction payroll software", 
      "automated timesheet collection",
      "geofenced time tracking",
      "union payroll calculations",
      "certified payroll reports",
      "ICI subcontractor software"
    ]
  }
}; 