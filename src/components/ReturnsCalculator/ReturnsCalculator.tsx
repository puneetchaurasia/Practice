import { useState, useMemo } from 'react';
import { InputSlider } from './InputSlider';
import { ResultsCard } from './ResultsCard';
import { BreakdownChart } from './BreakdownChart';

// Default values
const DEFAULTS = {
  principal: 100000,
  rate: 9.5,
  tenure: 12, // in months
};

// Range configurations
const RANGES = {
  principal: { min: 10000, max: 10000000, step: 10000 },
  rate: { min: 5, max: 12, step: 0.1 },
  tenure: { min: 6, max: 120, step: 6 }, // 6 months to 10 years
};

const formatTenure = (months: number) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) return `${remainingMonths} months`;
  if (remainingMonths === 0) return `${years} ${years === 1 ? 'year' : 'years'}`;
  return `${years}y ${remainingMonths}m`;
};

export const ReturnsCalculator = () => {
  const [principal, setPrincipal] = useState(DEFAULTS.principal);
  const [rate, setRate] = useState(DEFAULTS.rate);
  const [tenure, setTenure] = useState(DEFAULTS.tenure);

  // Calculate returns using simple interest formula
  const { interestEarned, maturityAmount } = useMemo(() => {
    // Simple Interest: I = P × R × T / 100
    // Where T is in years, so we convert months to years
    const tenureInYears = tenure / 12;
    const interest = (principal * rate * tenureInYears) / 100;
    const maturity = principal + interest;

    return {
      interestEarned: Math.round(interest),
      maturityAmount: Math.round(maturity),
    };
  }, [principal, rate, tenure]);

  return (
    <div className="p-s-24 bg-base-B-03 rounded-primary">
      {/* Header */}
      <div className="mb-s-24">
        <h2 className="text-20-med text-base-B-80">FD Returns Calculator</h2>
        <p className="text-12-book text-base-B-60 mt-s-4">
          Calculate your Fixed Deposit returns instantly
        </p>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-s-24">
        {/* Left Column - Inputs */}
        <div className="flex flex-col gap-s-24">
          <InputSlider
            label="Investment Amount"
            value={principal}
            onChange={setPrincipal}
            min={RANGES.principal.min}
            max={RANGES.principal.max}
            step={RANGES.principal.step}
            prefix="₹"
          />

          <InputSlider
            label="Interest Rate (p.a.)"
            value={rate}
            onChange={setRate}
            min={RANGES.rate.min}
            max={RANGES.rate.max}
            step={RANGES.rate.step}
            suffix="%"
            formatValue={(v) => `${v.toFixed(1)}%`}
          />

          <InputSlider
            label="Tenure"
            value={tenure}
            onChange={setTenure}
            min={RANGES.tenure.min}
            max={RANGES.tenure.max}
            step={RANGES.tenure.step}
            formatValue={formatTenure}
          />
        </div>

        {/* Right Column - Results */}
        <div className="flex flex-col gap-s-16">
          <ResultsCard
            principal={principal}
            interestEarned={interestEarned}
            maturityAmount={maturityAmount}
          />

          <BreakdownChart
            principal={principal}
            interestEarned={interestEarned}
          />
        </div>
      </div>
    </div>
  );
};

