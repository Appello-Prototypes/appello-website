import { SolutionPageData } from "@/lib/types/solution-page";
import { 
  FileText, 
  Shield, 
  ClipboardCheck, 
  AlertTriangle, 
  Clock, 
  Users, 
  CheckCircle2, 
  Smartphone,
  FileSearch,
  Award,
  Calendar,
  Archive
} from "lucide-react";

export const safetyComplianceManagementData: SolutionPageData = {
  slug: "safety-compliance-management",
  hero: {
    badge: {
      text: "End Paper Safety Chaos",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    headline: {
      text: "Your Safety Documentation is",
      highlightedText: "Audit Suicide",
      highlightColor: "text-purple-600"
    },
    description: "Boxes of paper forms, missing signatures, expired certifications you can't find. One OSHA audit could cost you $250K+ in fines. Digital safety compliance isn't optional anymore - it's survival.",
    primaryCTA: {
      text: "Bulletproof Your Safety - Demo",
      href: "/contact",
      bgColor: "bg-purple-600",
      hoverColor: "hover:bg-purple-700"
    },
    secondaryCTA: {
      text: "See Digital Forms",
      href: "#solution"
    },
    urgencyIndicators: [
      {
        icon: AlertTriangle,
        text: "$250K+ OSHA Fines Risk",
        color: "text-purple-600"
      },
      {
        icon: FileText,
        text: "Paper Documentation Chaos",
        color: "text-purple-600"
      },
      {
        icon: Clock,
        text: "Audit Panic Mode",
        color: "text-purple-600"
      }
    ]
  },
  problemStatement: {
    headline: "The Paper Safety Documentation Nightmare",
    description: "Every ICI subcontractor lives in fear of the safety audit. Paper forms, missing signatures, expired certifications buried in filing cabinets. Here's how paper safety kills compliance:",
    painPoints: [
      {
        icon: FileText,
        title: "Paper Form Chaos",
        description: "Hundreds of safety forms scattered across trucks, job sites, and filing cabinets. Critical signatures missing, forms incomplete, illegible handwriting everywhere.",
        bullets: [
          "Forms lost between job site and office",
          "Missing signatures discovered during audits",
          "Illegible handwriting creates compliance gaps"
        ],
        iconColor: "bg-purple-100",
        borderColor: "border-purple-100"
      },
      {
        icon: Award,
        title: "Certification Tracking Disaster",
        description: "Worker certifications expire without warning. No central tracking system. Discover expired tickets during critical project phases or worse - during audits.",
        bullets: [
          "No visibility into expiring certifications",
          "Workers on site with expired tickets",
          "Manual spreadsheet tracking fails"
        ],
        iconColor: "bg-purple-100",
        borderColor: "border-purple-100"
      },
      {
        icon: FileSearch,
        title: "Audit Panic Mode",
        description: "Inspector arrives and requests 2 years of safety documentation. Frantic searching through boxes, incomplete records, missing forms. Compliance gaps exposed publicly.",
        bullets: [
          "Hours spent hunting for required documents",
          "Incomplete safety records discovered",
          "Fines issued for missing documentation"
        ],
        iconColor: "bg-purple-100",
        borderColor: "border-purple-100"
      },
      {
        icon: Shield,
        title: "No Audit Trail Visibility",
        description: "Can't prove safety compliance when it matters. No digital trail of who did what when. Safety incidents become liability nightmares without proper documentation.",
        bullets: [
          "No proof of safety training completion",
          "Can't track corrective action follow-up",
          "Incident documentation inadequate"
        ],
        iconColor: "bg-purple-100",
        borderColor: "border-purple-100"
      }
    ]
  },
  costCalculator: {
    headline: "What Paper Safety Documentation Is Really Costing You",
    costs: [
      {
        amount: "$85,000",
        description: "OSHA fines and penalties",
        breakdown: "Average fines for documentation failures"
      },
      {
        amount: "$65,000",
        description: "Lost productivity from compliance chaos",
        breakdown: "Hours spent hunting documents, re-training"
      },
      {
        amount: "$125,000",
        description: "Increased insurance premiums",
        breakdown: "Poor safety records drive up costs"
      }
    ],
    totalAmount: "$275,000",
    totalDescription: "Total Annual Cost of Paper Safety Chaos",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-900"
  },
  solution: {
    id: "solution",
    headline: "Bulletproof Safety. Digital Compliance. Audit Ready.",
    description: "Appello transforms your safety program from paper chaos to digital excellence. Smart forms, automatic tracking, and instant audit reports that keep you compliant and protected.",
    solutions: [
      {
        icon: ClipboardCheck,
        title: "Conditional Logic Forms",
        description: "Smart digital forms that adapt based on responses. Required fields appear automatically, signatures captured digitally, and completion tracked in real-time.",
        features: [
          "Smart conditional logic",
          "Digital signature capture",
          "Real-time completion tracking"
        ],
        bgColor: "bg-green-50",
        iconColor: "bg-green-100",
        featureColor: "text-green-700"
      },
      {
        icon: Award,
        title: "Certification Tracking",
        description: "Automatic monitoring of all worker certifications. Alert before expiration, track renewal status, and ensure only qualified workers on site.",
        features: [
          "Automated expiration alerts",
          "Renewal status tracking",
          "Qualification verification"
        ],
        bgColor: "bg-blue-50",
        iconColor: "bg-blue-100",
        featureColor: "text-blue-700"
      },
      {
        icon: Archive,
        title: "Complete Audit Trail",
        description: "Every safety action documented automatically. Who, what, when, where - all tracked digitally. Instant audit reports at the touch of a button.",
        features: [
          "Automatic action logging",
          "Complete audit trails",
          "Instant compliance reports"
        ],
        bgColor: "bg-yellow-50",
        iconColor: "bg-yellow-100",
        featureColor: "text-yellow-700"
      }
    ],
    resultsProof: {
      headline: "Real Results From Digital Safety",
      stats: [
        {
          value: "100%",
          description: "Safety audit<br />pass rate",
          color: "text-green-600"
        },
        {
          value: "89%",
          description: "Reduction in compliance<br />documentation time",
          color: "text-green-600"
        },
        {
          value: "$275K",
          description: "Average annual savings<br />from digital compliance",
          color: "text-green-600"
        },
        {
          value: "95%",
          description: "Improvement in safety<br />record completeness",
          color: "text-green-600"
        }
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-900"
    }
  },
  resultsProof: {
    headline: "Real Results From Digital Safety",
    stats: [
      {
        value: "100%",
        description: "Safety audit pass rate",
        color: "text-green-600"
      },
      {
        value: "89%",
        description: "Reduction in compliance documentation time",
        color: "text-green-600"
      },
      {
        value: "$275K",
        description: "Average annual savings from digital compliance",
        color: "text-green-600"
      },
      {
        value: "95%",
        description: "Improvement in safety record completeness",
        color: "text-green-600"
      }
    ]
  },
  caseStudy: {
    headline: "Case Study: How Alpine Mechanical Achieved 100% Audit Compliance",
    beforeItems: [
      "Failed 2 consecutive OSHA audits with $125K in fines",
      "15+ hours weekly managing paper safety forms",
      "Multiple worker certifications expired unnoticed",
      "Incomplete safety records in filing cabinets",
      "No visibility into training completion status"
    ],
    afterItems: [
      "Perfect audit record for 24 consecutive months",
      "2 hours weekly for complete safety management",
      "Zero expired certifications with automated alerts",
      "100% digital safety records instantly accessible",
      "Real-time visibility into all training and compliance"
    ],
    testimonial: {
      quote: "We went from failing audits to having the inspector compliment our digital safety program. The conditional logic forms ensure nothing gets missed, and the certification tracking saved us from a major incident when we caught an expired crane operator ticket.",
      author: "Robert Kim",
      title: "Safety Manager",
      company: "Alpine Mechanical (87 employees)"
    }
  },
  finalCTA: {
    headline: "Stop Risking $275,000 in Safety Compliance Failures",
    description: "See how digital safety compliance would bulletproof your operation against audits and fines. Get a demo showing your complete safety management solution.",
    primaryCTA: {
      text: "Get Your Safety Compliance Demo",
      href: "/contact"
    },
    secondaryCTA: {
      text: "Learn About Digital Forms",
      href: "/"
    },
    features: [
      "COR certification support",
      "OSHA compliance ready",
      "Conditional logic forms",
      "Automatic audit trails"
    ],
    bgColor: "bg-purple-600",
    textColor: "text-white"
  },
  metadata: {
    title: "Safety & Compliance Management for ICI Subcontractors | Digital Forms & OSHA Compliance | Appello",
    description: "End paper safety chaos. Digital forms with conditional logic, certification tracking, and audit trails. COR certification support and OSHA compliance for ICI subcontractors.",
    keywords: [
      "safety compliance software",
      "digital safety forms",
      "OSHA compliance management",
      "construction safety documentation",
      "certification tracking software",
      "COR certification support",
      "ICI safety management"
    ]
  }
}; 