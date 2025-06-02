import { SolutionPageData } from "@/lib/types/solution-page";
import { 
  Truck, 
  MapPin, 
  QrCode, 
  Wrench, 
  AlertTriangle, 
  DollarSign, 
  Clock, 
  Smartphone,
  Calendar,
  BarChart3,
  Shield,
  Search
} from "lucide-react";

export const equipmentAssetTrackingData: SolutionPageData = {
  slug: "equipment-asset-tracking",
  hero: {
    badge: {
      text: "Stop Equipment Losses & Theft",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    headline: {
      text: "Your $500K Equipment is",
      highlightedText: "Invisible",
      highlightColor: "text-blue-600"
    },
    description: "Track a $75K excavator across 12 job sites? Good luck. Equipment vanishes, maintenance gets missed, and theft costs you $50K+ annually. Time to make every asset visible, trackable, and profitable.",
    primaryCTA: {
      text: "Track Your Assets - Get Demo",
      href: "/contact",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    secondaryCTA: {
      text: "See QR Code Tracking",
      href: "#solution"
    },
    urgencyIndicators: [
      {
        icon: DollarSign,
        text: "$500K+ Equipment Value",
        color: "text-blue-600"
      },
      {
        icon: MapPin,
        text: "Multiple Job Sites",
        color: "text-blue-600"
      },
      {
        icon: AlertTriangle,
        text: "$50K+ Annual Theft Loss",
        color: "text-blue-600"
      }
    ]
  },
  problemStatement: {
    headline: "The Invisible Equipment Crisis",
    description: "Every ICI subcontractor with multiple job sites faces the same nightmare: valuable equipment that disappears into thin air. Here's how equipment invisibility destroys profits:",
    painPoints: [
      {
        icon: Search,
        title: "Equipment Hide and Seek",
        description: "Spend hours hunting for a $25K compressor. Which job site? Which crew has it? Text messages and phone calls trying to track down equipment while projects wait.",
        bullets: [
          "2+ hours weekly hunting equipment",
          "Projects delayed waiting for tools",
          "Equipment sits idle at wrong sites"
        ],
        iconColor: "bg-blue-100",
        borderColor: "border-blue-100"
      },
      {
        icon: Shield,
        title: "Theft and Mysterious Disappearances",
        description: "Equipment vanishes overnight. No security, no tracking, no accountability. Insurance claims denied because you can't prove what was stolen when.",
        bullets: [
          "$50K+ annual theft losses",
          "No proof for insurance claims",
          "High-value tools walking away"
        ],
        iconColor: "bg-blue-100",
        borderColor: "border-blue-100"
      },
      {
        icon: Wrench,
        title: "Maintenance Chaos",
        description: "Miss critical maintenance because equipment location is unknown. Expensive breakdowns, warranty voids, and emergency repairs that cost 5x normal maintenance.",
        bullets: [
          "Missed maintenance schedules",
          "Voided warranties from neglect",
          "Emergency repair costs 5x more"
        ],
        iconColor: "bg-blue-100",
        borderColor: "border-blue-100"
      },
      {
        icon: BarChart3,
        title: "Utilization Blindness",
        description: "Equipment sitting unused while you rent duplicates. No visibility into what's available, where it is, or how often it's actually being used.",
        bullets: [
          "Rent equipment you already own",
          "Assets sitting idle costing money",
          "No utilization visibility"
        ],
        iconColor: "bg-blue-100",
        borderColor: "border-blue-100"
      }
    ]
  },
  costCalculator: {
    headline: "What Invisible Equipment Is Really Costing You",
    costs: [
      {
        amount: "$65,000",
        description: "Equipment theft and losses",
        breakdown: "$50K theft + $15K mysterious disappearances"
      },
      {
        amount: "$85,000",
        description: "Unnecessary rental costs",
        breakdown: "Rent equipment you already own"
      },
      {
        amount: "$45,000",
        description: "Missed maintenance penalties",
        breakdown: "Emergency repairs, voided warranties"
      }
    ],
    totalAmount: "$195,000",
    totalDescription: "Total Annual Cost of Invisible Equipment",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-900"
  },
  solution: {
    id: "solution",
    headline: "Every Asset. Every Location. Every Minute.",
    description: "Appello makes every piece of equipment instantly visible and trackable. QR codes, GPS tracking, and smart maintenance scheduling ensure you always know where your assets are and when they need attention.",
    solutions: [
      {
        icon: QrCode,
        title: "QR Code Asset Tracking",
        description: "Every tool gets a QR code. Scan to check in/out, assign to crews, or locate instantly. No expensive GPS devices - just your phone and simple QR stickers.",
        features: [
          "QR code check-in/check-out",
          "Instant location updates",
          "Crew assignment tracking"
        ],
        bgColor: "bg-green-50",
        iconColor: "bg-green-100",
        featureColor: "text-green-700"
      },
      {
        icon: MapPin,
        title: "Real-Time Geolocation",
        description: "Know exactly where every piece of equipment is right now. GPS tracking for high-value assets, job site assignments, and movement alerts.",
        features: [
          "Live GPS tracking",
          "Geofenced job site alerts",
          "Movement notifications"
        ],
        bgColor: "bg-purple-50",
        iconColor: "bg-purple-100",
        featureColor: "text-purple-700"
      },
      {
        icon: Calendar,
        title: "Smart Maintenance Scheduling",
        description: "Automated maintenance reminders based on hours, dates, or usage. Never miss critical service again. Extend equipment life and avoid costly breakdowns.",
        features: [
          "Automated service reminders",
          "Usage-based scheduling",
          "Warranty tracking"
        ],
        bgColor: "bg-yellow-50",
        iconColor: "bg-yellow-100",
        featureColor: "text-yellow-700"
      }
    ],
    resultsProof: {
      headline: "Real Results From Visible Assets",
      stats: [
        {
          value: "96%",
          description: "Reduction in equipment<br />theft and losses",
          color: "text-green-600"
        },
        {
          value: "78%",
          description: "Decrease in unnecessary<br />equipment rentals",
          color: "text-green-600"
        },
        {
          value: "$195K",
          description: "Average annual savings<br />from asset visibility",
          color: "text-green-600"
        },
        {
          value: "92%",
          description: "Improvement in maintenance<br />schedule compliance",
          color: "text-green-600"
        }
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-900"
    }
  },
  resultsProof: {
    headline: "Real Results From Visible Assets",
    stats: [
      {
        value: "96%",
        description: "Reduction in equipment theft and losses",
        color: "text-green-600"
      },
      {
        value: "78%",
        description: "Decrease in unnecessary equipment rentals",
        color: "text-green-600"
      },
      {
        value: "$195K",
        description: "Average annual savings from asset visibility",
        color: "text-green-600"
      },
      {
        value: "92%",
        description: "Improvement in maintenance schedule compliance",
        color: "text-green-600"
      }
    ]
  },
  caseStudy: {
    headline: "Case Study: How Precision Electric Eliminated $120K in Equipment Losses",
    beforeItems: [
      "Equipment theft costing $65K annually",
      "6+ hours weekly hunting for missing tools",
      "Renting $3K/month equipment they already owned",
      "Missed maintenance causing warranty voids",
      "No accountability for equipment assignments"
    ],
    afterItems: [
      "Zero equipment theft in 18 months with tracking",
      "15 minutes to locate any piece of equipment",
      "Eliminated unnecessary rentals saving $36K/year",
      "100% maintenance compliance with automated reminders",
      "Full equipment accountability with QR scanning"
    ],
    testimonial: {
      quote: "We went from losing $65K worth of equipment annually to zero thefts since implementing QR tracking. Our crews love how easy it is to scan equipment in and out, and we've eliminated all those expensive emergency rentals.",
      author: "Jennifer Walsh",
      title: "Operations Director",
      company: "Precision Electric (110 employees)"
    }
  },
  finalCTA: {
    headline: "Stop Losing $195,000 Per Year to Invisible Equipment",
    description: "See how QR code tracking and smart maintenance scheduling would protect your valuable assets. Get a demo showing your equipment visibility solution.",
    primaryCTA: {
      text: "Get Your Asset Tracking Demo",
      href: "/contact"
    },
    secondaryCTA: {
      text: "Learn About QR Tracking",
      href: "/"
    },
    features: [
      "QR code scanning included",
      "GPS tracking for high-value assets",
      "Automated maintenance alerts",
      "Theft prevention & recovery"
    ],
    bgColor: "bg-blue-600",
    textColor: "text-white"
  },
  metadata: {
    title: "Equipment & Asset Tracking for ICI Subcontractors | QR Code & GPS Tracking | Appello",
    description: "Stop equipment theft and losses. QR code tracking, GPS monitoring, and smart maintenance scheduling for ICI subcontractors. Track $500K+ in assets across multiple job sites.",
    keywords: [
      "equipment tracking software",
      "construction asset management",
      "QR code equipment tracking",
      "GPS equipment monitoring",
      "construction maintenance scheduling",
      "equipment theft prevention",
      "ICI asset tracking"
    ]
  }
}; 