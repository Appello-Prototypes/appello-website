import { CaseStudySection as CaseStudySectionType } from "@/lib/types/solution-page";

interface CaseStudySectionProps {
  data: CaseStudySectionType;
}

export function CaseStudySection({ data }: CaseStudySectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          {data.headline}
        </h2>
        
        <div className="bg-slate-50 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Before Appello:</h3>
              <ul className="space-y-2 text-muted-foreground">
                {data.beforeItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">After Appello:</h3>
              <ul className="space-y-2 text-muted-foreground">
                {data.afterItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-blue-600 pl-6 text-lg italic text-muted-foreground">
            "{data.testimonial.quote}"
            <footer className="mt-2 text-sm font-semibold">
              — {data.testimonial.author}, {data.testimonial.title}, {data.testimonial.company}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
} 