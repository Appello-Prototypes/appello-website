import { CostCalculatorSection as CostCalculatorSectionType } from "@/lib/types/solution-page";

interface CostCalculatorSectionProps {
  data: CostCalculatorSectionType;
}

export function CostCalculatorSection({ data }: CostCalculatorSectionProps) {
  return (
    <div className="container mx-auto px-4">
      <div className={`mt-16 ${data.bgColor} p-8 rounded-lg max-w-4xl mx-auto border-2 ${data.borderColor}`}>
        <h3 className={`text-2xl font-bold text-center mb-6 ${data.textColor}`}>
          {data.headline}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {data.costs.map((cost, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-red-600 mb-2">{cost.amount}</div>
              <div className="text-sm text-muted-foreground">
                {cost.description}
                {cost.breakdown && (
                  <>
                    <br />
                    <span className="text-xs">({cost.breakdown})</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={`text-center mt-6 pt-6 border-t ${data.borderColor}`}>
          <div className="text-5xl font-bold text-red-700 mb-2">{data.totalAmount}</div>
          <div className="text-lg text-red-800 font-semibold">{data.totalDescription}</div>
        </div>
      </div>
    </div>
  );
} 