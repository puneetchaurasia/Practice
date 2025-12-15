interface ResultsCardProps {
  principal: number;
  interestEarned: number;
  maturityAmount: number;
}

const formatCurrency = (value: number) => {
  return `₹${value.toLocaleString('en-IN', { 
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  })}`;
};

export const ResultsCard = ({
  principal,
  interestEarned,
  maturityAmount,
}: ResultsCardProps) => {
  return (
    <div className="p-s-20 bg-brand-base-white rounded-primary border border-base-B-10 flex flex-col gap-s-16">
      {/* Header */}
      <h3 className="text-14-med text-base-B-60 pb-s-12 border-b border-base-B-10">
        Your Returns
      </h3>

      {/* Main Result - Maturity Amount */}
      <div className="text-center py-s-8">
        <p className="text-10-all-caps text-base-B-40 mb-s-4">Maturity Amount</p>
        <p className="text-24-med text-semantics-success">{formatCurrency(maturityAmount)}</p>
      </div>

      {/* Breakdown */}
      <div className="grid grid-cols-2 gap-s-16 pt-s-12 border-t border-base-B-10">
        <div>
          <p className="text-10-book text-base-B-40 mb-s-4">Principal</p>
          <p className="text-14-med text-base-B-80">{formatCurrency(principal)}</p>
        </div>
        <div>
          <p className="text-10-book text-base-B-40 mb-s-4">Interest Earned</p>
          <p className="text-14-med text-semantics-success">{formatCurrency(interestEarned)}</p>
        </div>
      </div>
    </div>
  );
};

