import { SolutionPageData } from "@/lib/types/solution-page";
import { 
  Calendar, 
  Users, 
  Clock, 
  AlertTriangle, 
  DollarSign, 
  Target, 
  Brain, 
  Smartphone,
  UserCheck,
  Zap,
  BarChart,
  CheckCircle2
} from "lucide-react";

export const workforceSchedulingData: SolutionPageData = {
  slug: "workforce-scheduling",
  hero: {
    badge: {
      text: "End Scheduling Chaos",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700"
    },
    headline: {
      text: "Your Scheduling is",
      highlightedText: "Bleeding Overtime",
      highlightColor: "text-teal-600"
    },
    description: "Juggling 40 crew members across 12 job sites with Excel spreadsheets? Wrong people on wrong jobs, skills mismatches, and overtime exploding your budgets. Smart scheduling isn't luxury - it's survival.",
    primaryCTA: {
      text: "Optimize Your Scheduling - Demo",
      href: "/contact",
      bgColor: "bg-teal-600",
      hoverColor: "hover:bg-teal-700"
    },
    secondaryCTA: {
      text: "See AI Scheduling",
      href: "#solution"
    },
    urgencyIndicators: [
      {
        icon: Clock,
        text: "30%+ Overtime Costs",
        color: "text-teal-600"
      },
      {
        icon: Users,
        text: "Skills Mismatch Crisis",
        color: "text-teal-600"
      },
      {
        icon: AlertTriangle,
        text: "Project Delays Daily",
        color: "text-teal-600"
      }
    ]
  },
  problemStatement: {
    headline: "The Manual Scheduling Nightmare",
    description: "Every ICI subcontractor with multiple crews faces the same crisis: manual scheduling that burns money daily. Here's how Excel scheduling destroys profitability:",
    painPoints: [
      {
        icon: Users,
        title: "Skills Mismatch Disasters",
        description: "Send 3rd-year apprentices to complex electrical work. Experienced journeymen wasted on simple tasks. No visibility into who has what certifications or specialties.",
        bullets: [
          "Wrong skill levels assigned to jobs",
          "Experienced workers on simple tasks",
          "Certification requirements overlooked"
        ],
        iconColor: "bg-teal-100",
        borderColor: "border-teal-100"
      },
      {
        icon: Clock,
        title: "Overtime Cost Explosion",
        description: "Poor scheduling creates artificial urgency. Rush jobs with wrong crew sizes. No optimization for travel time or skill efficiency. Overtime becomes the norm, not the exception.",
        bullets: [
          "Unnecessary overtime due to poor planning",
          "Wrong crew sizes for job complexity",
          "No travel time optimization"
        ],
        iconColor: "bg-teal-100",
        borderColor: "border-teal-100"
      },
      {
        icon: Calendar,
        title: "Manual Scheduling Chaos",
        description: "Excel spreadsheets, phone calls, and prayer. Last-minute changes cascade through entire schedule. No real-time visibility into crew availability or conflicts.",
        bullets: [
          "Excel spreadsheet dependency",
          "Last-minute change chaos",
          "No real-time crew visibility"
        ],
        iconColor: "bg-teal-100",
        borderColor: "border-teal-100"
      },
      {
        icon: Target,
        title: "Resource Allocation Blindness",
        description: "Can't see which crews are underutilized or overloaded. Equipment scheduling disconnected from crew scheduling. Project timelines constantly shifting due to resource conflicts.",
        bullets: [
          "No visibility into crew utilization",
          "Equipment and crew scheduling disconnect",
          "Constant timeline adjustments"
        ],
        iconColor: "bg-teal-100",
        borderColor: "border-teal-100"
      }
    ]
  },
  costCalculator: {
    headline: "What Manual Scheduling Is Really Costing You",
    costs: [
      {
        amount: "$125,000",
        description: "Unnecessary overtime costs",
        breakdown: "Poor scheduling creates artificial urgency"
      },
      {
        amount: "$95,000",
        description: "Skills mismatch productivity loss",
        breakdown: "Wrong people on wrong jobs"
      },
      {
        amount: "$65,000",
        description: "Project delays and penalties",
        breakdown: "Resource conflicts and poor planning"
      }
    ],
    totalAmount: "$285,000",
    totalDescription: "Total Annual Cost of Manual Scheduling",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-900"
  },
  solution: {
    id: "solution",
    headline: "AI-Powered Scheduling. Perfect Crew Matches. Zero Overtime.",
    description: "Appello's intelligent scheduling system matches skills to jobs automatically, optimizes for travel and efficiency, and eliminates scheduling conflicts before they happen.",
    solutions: [
      {
        icon: Brain,
        title: "AI-Powered Optimization",
        description: "Machine learning analyzes job requirements, crew skills, travel time, and availability to create optimal schedules automatically. No more guesswork.",
        features: [
          "Automatic schedule optimization",
          "Skills-to-job matching",
          "Travel time minimization"
        ],
        bgColor: "bg-green-50",
        iconColor: "bg-green-100",
        featureColor: "text-green-700"
      },
      {
        icon: UserCheck,
        title: "Skills-Based Crew Matching",
        description: "Track every certification, specialty, and skill level. Automatically assign the right expertise to each job. Never send unqualified workers to complex tasks again.",
        features: [
          "Comprehensive skills tracking",
          "Automatic qualification matching",
          "Certification expiry monitoring"
        ],
        bgColor: "bg-blue-50",
        iconColor: "bg-blue-100",
        featureColor: "text-blue-700"
      },
      {
        icon: Zap,
        title: "Real-Time Schedule Updates",
        description: "Changes cascade automatically through the entire schedule. Crew gets instant notifications. Equipment coordination happens seamlessly in real-time.",
        features: [
          "Instant schedule updates",
          "Automatic crew notifications",
          "Integrated equipment scheduling"
        ],
        bgColor: "bg-yellow-50",
        iconColor: "bg-yellow-100",
        featureColor: "text-yellow-700"
      }
    ],
    resultsProof: {
      headline: "Real Results From Smart Scheduling",
      stats: [
        {
          value: "68%",
          description: "Reduction in unnecessary<br />overtime costs",
          color: "text-green-600"
        },
        {
          value: "89%",
          description: "Improvement in skills<br />matching accuracy",
          color: "text-green-600"
        },
        {
          value: "$285K",
          description: "Average annual savings<br />from optimized scheduling",
          color: "text-green-600"
        },
        {
          value: "94%",
          description: "Reduction in last-minute<br />schedule changes",
          color: "text-green-600"
        }
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-900"
    }
  },
  resultsProof: {
    headline: "Real Results From Smart Scheduling",
    stats: [
      {
        value: "68%",
        description: "Reduction in unnecessary overtime costs",
        color: "text-green-600"
      },
      {
        value: "89%",
        description: "Improvement in skills matching accuracy",
        color: "text-green-600"
      },
      {
        value: "$285K",
        description: "Average annual savings from optimized scheduling",
        color: "text-green-600"
      },
      {
        value: "94%",
        description: "Reduction in last-minute schedule changes",
        color: "text-green-600"
      }
    ]
  },
  caseStudy: {
    headline: "Case Study: How Titan Construction Cut Overtime Costs by 72%",
    beforeItems: [
      "Excel-based scheduling causing 35% overtime rates",
      "Skills mismatches on 40% of job assignments",
      "6+ hours weekly managing schedule conflicts",
      "Project delays due to crew availability issues",
      "No visibility into crew utilization rates"
    ],
    afterItems: [
      "AI scheduling reduced overtime to 10% average",
      "Perfect skills matching on 94% of assignments",
      "15 minutes weekly for schedule management",
      "Zero project delays from crew conflicts",
      "Real-time visibility into all crew utilization"
    ],
    testimonial: {
      quote: "The AI scheduling completely transformed our operations. We went from constant overtime firefighting to having crews perfectly matched to jobs. Our overtime costs dropped 72% in the first year, and our crews are happier because they're working on jobs that match their skills.",
      author: "Sarah Mitchell",
      title: "Operations Manager",
      company: "Titan Construction (165 employees)"
    }
  },
  finalCTA: {
    headline: "Stop Losing $285,000 Per Year to Scheduling Chaos",
    description: "See how AI-powered scheduling would optimize your crew assignments and eliminate overtime waste. Get a demo showing your workforce optimization solution.",
    primaryCTA: {
      text: "Get Your Scheduling Demo",
      href: "/contact"
    },
    secondaryCTA: {
      text: "Learn About AI Scheduling",
      href: "/"
    },
    features: [
      "AI-powered optimization",
      "Skills-based crew matching",
      "Real-time schedule updates",
      "Overtime cost reduction"
    ],
    bgColor: "bg-teal-600",
    textColor: "text-white"
  },
  metadata: {
    title: "Advanced Workforce Scheduling for ICI Subcontractors | AI-Powered Crew Management | Appello",
    description: "End scheduling chaos. AI-powered workforce scheduling with skills-based crew matching and real-time optimization. Reduce overtime costs by 68% for ICI subcontractors.",
    keywords: [
      "workforce scheduling software",
      "crew management system",
      "AI scheduling optimization",
      "construction crew scheduling",
      "skills-based scheduling",
      "overtime cost reduction",
      "ICI workforce management"
    ]
  }
}; 