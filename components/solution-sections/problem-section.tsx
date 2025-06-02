import { ProblemSection as ProblemSectionType } from "@/lib/types/solution-page";

interface ProblemSectionProps {
  data: ProblemSectionType;
}

export function ProblemSection({ data }: ProblemSectionProps) {
  return (
    <section className="bg-slate-50 py-20 -mx-4" aria-labelledby="problem-heading">
      <div className="container mx-auto px-4">
        <h2 id="problem-heading" className="text-center text-3xl md:text-4xl font-bold mb-4">
          {data.headline}
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
          {data.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {data.painPoints.map((painPoint, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-lg shadow-sm border ${painPoint.borderColor}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 ${painPoint.iconColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <painPoint.icon className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-red-900">{painPoint.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {painPoint.description}
                  </p>
                  {painPoint.bullets.length > 0 && (
                    <div className="space-y-2 text-sm">
                      {painPoint.bullets.map((bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-center gap-2 text-red-600">
                          <span>✗</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 