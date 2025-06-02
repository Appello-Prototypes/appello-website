import { SolutionSection as SolutionSectionType } from "@/lib/types/solution-page";

interface SolutionSectionProps {
  data: SolutionSectionType;
}

export function SolutionSection({ data }: SolutionSectionProps) {
  return (
    <>
      {/* Solution Section */}
      <section id={data.id} className="py-20" aria-labelledby="solution-heading">
        <div className="text-center mb-16">
          <h2 id="solution-heading" className="text-3xl md:text-4xl font-bold mb-4">
            {data.headline}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {data.solutions.map((solution, index) => (
            <div key={index} className={`text-center p-6 ${solution.bgColor} rounded-lg`}>
              <div className={`w-16 h-16 ${solution.iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <solution.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground">
                {solution.description}
              </p>
              {solution.features.length > 0 && (
                <div className={`mt-4 space-y-1 text-sm ${solution.featureColor}`}>
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>✓ {feature}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Results Proof */}
      <div className={`${data.resultsProof.bgColor} py-12 -mx-4`}>
        <div className="container mx-auto px-4">
          <h3 className={`text-2xl font-bold text-center mb-8 ${data.resultsProof.textColor}`}>
            {data.resultsProof.headline}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {data.resultsProof.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: stat.description }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 