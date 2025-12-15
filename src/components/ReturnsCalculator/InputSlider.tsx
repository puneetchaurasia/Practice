interface InputSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  formatValue?: (value: number) => string;
}

const defaultFormatter = (value: number, prefix = '', suffix = '') => {
  return `${prefix}${value.toLocaleString('en-IN')}${suffix}`;
};

export const InputSlider = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix = '',
  suffix = '',
  formatValue,
}: InputSliderProps) => {
  const displayValue = formatValue 
    ? formatValue(value) 
    : defaultFormatter(value, prefix, suffix);

  // Calculate fill percentage for the track
  const fillPercentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-s-8">
      {/* Label and Value */}
      <div className="flex justify-between items-baseline">
        <label className="text-12-book text-base-B-60">{label}</label>
        <span className="text-17-med text-base-B-80">{displayValue}</span>
      </div>

      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-s-6 appearance-none bg-transparent cursor-pointer relative z-10
            [&::-webkit-slider-runnable-track]:h-s-6
            [&::-webkit-slider-runnable-track]:rounded-full-round
            [&::-webkit-slider-runnable-track]:bg-base-B-10
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-s-20
            [&::-webkit-slider-thumb]:h-s-20
            [&::-webkit-slider-thumb]:rounded-full-round
            [&::-webkit-slider-thumb]:bg-brand-sm-purple
            [&::-webkit-slider-thumb]:border-4
            [&::-webkit-slider-thumb]:border-brand-base-white
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:-mt-[7px]
            [&::-webkit-slider-thumb]:transition-transform
            [&::-webkit-slider-thumb]:hover:scale-110
            [&::-moz-range-track]:h-s-6
            [&::-moz-range-track]:rounded-full-round
            [&::-moz-range-track]:bg-base-B-10
            [&::-moz-range-thumb]:w-s-20
            [&::-moz-range-thumb]:h-s-20
            [&::-moz-range-thumb]:rounded-full-round
            [&::-moz-range-thumb]:bg-brand-sm-purple
            [&::-moz-range-thumb]:border-4
            [&::-moz-range-thumb]:border-brand-base-white
            [&::-moz-range-thumb]:shadow-md
          "
        />
        {/* Fill track overlay */}
        <div 
          className="absolute top-1/2 left-0 h-s-6 rounded-full-round bg-brand-sm-purple -translate-y-1/2 pointer-events-none"
          style={{ width: `${fillPercentage}%` }}
        />
      </div>

      {/* Min/Max labels */}
      <div className="flex justify-between">
        <span className="text-10-book text-base-B-40">
          {defaultFormatter(min, prefix, suffix)}
        </span>
        <span className="text-10-book text-base-B-40">
          {defaultFormatter(max, prefix, suffix)}
        </span>
      </div>
    </div>
  );
};

