import { SolutionPageData } from "@/lib/types/solution-page";
import { timeTrackingPayrollData } from "@/lib/data/solution-pages/time-tracking-payroll";
import { unifiedPlatformData } from "@/lib/data/solution-pages/unified-platform";
import { jobCostingProfitabilityData } from "@/lib/data/solution-pages/job-costing-profitability";
import { equipmentAssetTrackingData } from "@/lib/data/solution-pages/equipment-asset-tracking";
import { safetyComplianceManagementData } from "@/lib/data/solution-pages/safety-compliance-management";
import { workforceSchedulingData } from "@/lib/data/solution-pages/workforce-scheduling";
import { financialIntegrationData } from "@/lib/data/solution-pages/financial-integration";
import { salesEstimationIntelligenceData } from "@/lib/data/solution-pages/sales-estimation-intelligence";

// Central registry of all solution page data
const solutionPages: Record<string, SolutionPageData> = {
  "time-tracking-payroll": timeTrackingPayrollData,
  "unified-platform": unifiedPlatformData,
  "job-costing-profitability": jobCostingProfitabilityData,
  "equipment-asset-tracking": equipmentAssetTrackingData,
  "safety-compliance-management": safetyComplianceManagementData,
  "workforce-scheduling": workforceSchedulingData,
  "financial-integration": financialIntegrationData,
  "sales-estimation-intelligence": salesEstimationIntelligenceData,
  // Add more solution pages here as they are created
  // "safety-compliance-management": safetyComplianceData,
};

/**
 * Get solution page data by slug
 * @param slug - The solution page slug
 * @returns Solution page data or null if not found
 */
export function getSolutionPageData(slug: string): SolutionPageData | null {
  return solutionPages[slug] || null;
}

/**
 * Get all available solution page slugs
 * @returns Array of all solution page slugs
 */
export function getAllSolutionSlugs(): string[] {
  return Object.keys(solutionPages);
}

/**
 * Check if a solution page exists
 * @param slug - The solution page slug to check
 * @returns True if the solution page exists
 */
export function solutionPageExists(slug: string): boolean {
  return slug in solutionPages;
}

/**
 * Get all solution pages for sitemap or navigation
 * @returns Array of all solution page data
 */
export function getAllSolutionPages(): SolutionPageData[] {
  return Object.values(solutionPages);
} 