import { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionPageTemplate from "@/components/solution-page-template";
import { getSolutionPageData, getAllSolutionSlugs } from "@/lib/utils/solution-data";

interface SolutionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all solution pages
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getAllSolutionSlugs();
  
  return slugs.map((slug: string) => ({
    slug: slug,
  }));
}

// Generate metadata for each solution page
export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = getSolutionPageData(resolvedParams.slug);
  
  if (!data) {
    return {
      title: "Solution Not Found | Appello",
      description: "The requested solution page could not be found.",
    };
  }

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: data.metadata.keywords,
    openGraph: {
      title: data.metadata.title,
      description: data.metadata.description,
      type: "website",
      images: data.metadata.ogImage ? [{ url: data.metadata.ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: data.metadata.title,
      description: data.metadata.description,
      images: data.metadata.ogImage ? [data.metadata.ogImage] : undefined,
    },
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const resolvedParams = await params;
  const data = getSolutionPageData(resolvedParams.slug);

  if (!data) {
    notFound();
  }

  return <SolutionPageTemplate data={data} />;
} 