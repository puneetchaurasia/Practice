
// Reusable Logo Placeholder (since no specific Logo component path was provided)
// Using existing rounded/bg tokens
const BankLogo = () => (
  <div className="w-s-40 h-s-40 rounded-full-round bg-base-B-10 flex-shrink-0"></div>
);

/**
 * Variation 1: Interest-rate-first Layout
 * 
 * Intent:
 * - Interest rate is the primary visual anchor
 * - Bank name and logo are secondary
 * - CTA is visible but not dominant
 * 
 * Hierarchy:
 * 1. Interest Rate (Primary)
 * 2. Tag / Badge (Supporting)
 * 3. Bank Info (Secondary)
 * 4. CTA (Action)
 */
export const InterestRateFirstCard = () => {
  return (
    <div className="p-s-16 bg-brand-base-white rounded-primary border border-base-B-10 flex flex-col gap-s-16">
      
      {/* Top Section: Interest Rate & Badge */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-10-all-caps text-base-B-40 mb-s-4">Interest Rate</h3>
          <p className="text-24-med text-semantics-success">9.5% p.a.</p>
        </div>
        <span className="px-s-8 py-s-4 bg-semantics-success-light text-semantics-success rounded-secondary text-10-all-caps">
          High Interest Rate
        </span>
      </div>

      {/* Middle Section: Bank Info */}
      <div className="flex items-center gap-s-12">
        <BankLogo />
        <div>
          <h4 className="text-14-med text-base-B-80">Suryoday SF Bank</h4>
          <p className="text-12-book text-base-B-60">Tenure: 1 year</p>
        </div>
      </div>

      {/* Bottom Section: CTA */}
      <button className="w-full py-s-12 border border-brand-sm-purple text-brand-sm-purple rounded-secondary text-14-med hover:bg-base-B-03 transition-colors">
        Book Now
      </button>
    </div>
  );
};

/**
 * Variation 2: Trust-first Layout
 * 
 * Intent:
 * - Bank logo and bank name are the primary anchors
 * - Interest rate and tenure are supporting information
 * - Layout feels stable and trustworthy
 * 
 * Hierarchy:
 * 1. Bank Logo + Name (Primary Anchor)
 * 2. Details (Rate/Tenure) (Supporting)
 * 3. CTA (Action)
 */
export const TrustFirstCard = () => {
  return (
    <div className="p-s-20 bg-brand-base-white rounded-primary border border-base-B-10 flex flex-col gap-s-20">
      
      {/* Header: Strong Brand Presence */}
      <div className="flex items-center gap-s-12 pb-s-16 border-b border-base-B-10">
        <BankLogo />
        <div>
          <h3 className="text-17-med text-base-B-80 text-left">Suryoday SF Bank</h3>
          <span className="px-s-6 py-s-2 bg-base-B-03 text-base-B-60 rounded-secondary text-10-book mt-s-4 inline-block">
            High Interest Rate
          </span>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-s-16">
        <div>
          <p className="text-12-book text-base-B-60 mb-s-4">Interest Rate</p>
          <p className="text-20-med text-base-B-80">9.5% p.a.</p>
        </div>
        <div>
          <p className="text-12-book text-base-B-60 mb-s-4">Tenure</p>
          <p className="text-14-med text-base-B-80">1 year</p>
        </div>
      </div>

      {/* Primary CTA */}
      <button className="w-full py-s-12 bg-brand-sm-purple text-brand-base-white rounded-primary text-14-med">
        Book Now
      </button>
    </div>
  );
};

/**
 * Variation 3: Balanced Layout
 * 
 * Intent:
 * - Bank name and interest rate have equal importance
 * - Tenure and badge are supporting elements
 * - CTA feels naturally discoverable
 * 
 * Hierarchy:
 * 1. Bank Info & Rate (Equal Weight)
 * 2. Supporting Details (Badge/Tenure)
 * 3. CTA (Action)
 */
export const BalancedCard = () => {
  return (
    <div className="p-s-16 bg-brand-base-white rounded-primary border border-base-B-10 flex items-center justify-between gap-s-16">
      
      {/* Left Column: Bank Info & Tag */}
      <div className="flex flex-col gap-s-8">
        <div className="flex items-center gap-s-8">
          <BankLogo />
          <div>
            <h3 className="text-12-med text-base-B-80">Suryoday SF Bank</h3>
            <p className="text-10-book text-base-B-60">1 year tenure</p>
          </div>
        </div>
        <span className="self-start px-s-8 py-s-4 border border-semantics-success text-semantics-success rounded-secondary text-10-all-caps">
          High Interest Rate
        </span>
      </div>

      {/* Right Column: Rate & Action */}
      <div className="text-right flex flex-col items-end gap-s-8">
        <p className="text-20-med text-brand-sm-purple">9.5% p.a.</p>
        <button className="px-s-16 py-s-8 bg-brand-sm-purple text-brand-base-white rounded-secondary text-12-med">
          Book Now
        </button>
      </div>
    </div>
  );
};

