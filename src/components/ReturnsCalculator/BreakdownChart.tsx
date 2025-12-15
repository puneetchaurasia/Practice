interface BreakdownChartProps {
  principal: number;
  interestEarned: number;
}

export const BreakdownChart = ({
  principal,
  interestEarned,
}: BreakdownChartProps) => {
  const total = principal + interestEarned;
  const principalPercentage = (principal / total) * 100;
  const interestPercentage = (interestEarned / total) * 100;

  // Colors matching design tokens
  const principalColor = 'rgba(0,0,0,0.6)'; // base-B-60
  const interestColor = '#12BE57'; // semantics-success

  return (
    <div className="p-s-20 bg-brand-base-white rounded-primary border border-base-B-10 flex flex-col items-center gap-s-16">
      {/* Donut Chart */}
      <div className="relative w-[160px] h-[160px]">
        {/* Outer ring with conic gradient */}
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `conic-gradient(
              ${principalColor} 0deg ${principalPercentage * 3.6}deg,
              ${interestColor} ${principalPercentage * 3.6}deg 360deg
            )`,
          }}
        />
        {/* Inner circle to create donut effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-brand-base-white flex flex-col items-center justify-center">
          <p className="text-10-all-caps text-base-B-40">Total</p>
          <p className="text-14-med text-base-B-80">
            ₹{(total / 100000).toFixed(1)}L
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-s-20">
        <div className="flex items-center gap-s-8">
          <div 
            className="w-s-12 h-s-12 rounded-secondary"
            style={{ backgroundColor: principalColor }}
          />
          <div>
            <p className="text-10-book text-base-B-40">Principal</p>
            <p className="text-12-med text-base-B-80">{principalPercentage.toFixed(1)}%</p>
          </div>
        </div>
        <div className="flex items-center gap-s-8">
          <div 
            className="w-s-12 h-s-12 rounded-secondary"
            style={{ backgroundColor: interestColor }}
          />
          <div>
            <p className="text-10-book text-base-B-40">Interest</p>
            <p className="text-12-med text-semantics-success">{interestPercentage.toFixed(1)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

