
export const BankCards = () => {
  return (
    <div className="space-y-s-32">
      <h2 className="text-24-med text-base-B-80">Bank Card Variants</h2>
      
      {/* Variant 1: Minimalist Row */}
      <div className="p-s-16 bg-brand-base-white rounded-primary border border-base-B-10 flex items-center justify-between">
        <div className="flex items-center gap-s-12">
          <div className="w-s-40 h-s-40 rounded-secondary bg-base-B-03 flex-shrink-0"></div>
          <div>
            <h3 className="text-14-med text-base-B-80">Suryoday Small Finance Bank</h3>
            <p className="text-12-book text-base-B-60">High Interest FD</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-20-med text-semantics-success">9.10%</p>
          <button className="px-s-16 py-s-8 bg-brand-sm-purple text-brand-base-white rounded-secondary text-12-med mt-s-4">
            Book Now
          </button>
        </div>
      </div>

      {/* Variant 2: Highlighted Background Column */}
      <div className="p-s-24 bg-base-B-03 rounded-primary flex flex-col gap-s-16">
        <div className="flex justify-between items-start">
          <div className="w-s-32 h-s-32 rounded-full-round bg-brand-sm-purple"></div>
          <span className="px-s-8 py-s-4 bg-semantics-success-light text-semantics-success rounded-[4px] text-10-all-caps">
            High Interest FD
          </span>
        </div>
        <div>
          <h3 className="text-17-med text-base-B-80">Suryoday Small Finance Bank</h3>
          <p className="text-12-book text-base-B-60 mt-s-4">2 years 6 months</p>
        </div>
        <div className="flex items-end justify-between">
          <p className="text-24-med text-base-B-80">9.10%</p>
          <button className="px-s-24 py-s-12 bg-base-B-80 text-brand-base-white rounded-primary text-14-med">
            Book Now
          </button>
        </div>
      </div>

      {/* Variant 3: Bordered with Accent Header */}
      <div className="border border-base-B-10 rounded-primary overflow-hidden">
        <div className="p-s-12 bg-brand-sm-purple text-brand-base-white flex justify-between items-center">
          <span className="text-12-med">High Interest FD</span>
          <span className="text-12-book">2y 6m</span>
        </div>
        <div className="p-s-16 bg-brand-base-white">
          <div className="flex items-center gap-s-12 mb-s-16">
            <div className="w-s-32 h-s-32 rounded-secondary bg-base-B-10"></div>
            <h3 className="text-14-med text-base-B-80">Suryoday Small Finance Bank</h3>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-20-med text-brand-sm-purple">9.10%</p>
            <button className="text-14-med text-brand-sm-purple underline">Book Now</button>
          </div>
        </div>
      </div>

      {/* Variant 4: Card with Shadowy Effect (using borders to simulate depth if shadow tokens unavailable) */}
      <div className="p-s-20 bg-brand-base-white rounded-primary border-b-4 border-base-B-10">
        <div className="flex justify-between mb-s-12">
          <div className="w-s-40 h-s-40 rounded-full-round border border-base-B-10"></div>
          <div className="text-right">
            <p className="text-10-all-caps text-base-B-40">Interest Rate</p>
            <p className="text-20-med text-base-B-80">9.10%</p>
          </div>
        </div>
        <h3 className="text-17-book text-base-B-80 mb-s-4">Suryoday Small Finance Bank</h3>
        <div className="flex justify-between items-center mt-s-16">
          <span className="px-s-8 py-s-2 border border-semantics-success text-semantics-success rounded-secondary text-10-book">
            High Interest FD
          </span>
          <button className="px-s-16 py-s-8 border border-brand-sm-purple text-brand-sm-purple rounded-secondary text-12-med">
            Book Now
          </button>
        </div>
      </div>

      {/* Variant 5: Dark Mode Style */}
      <div className="p-s-24 bg-base-B-80 rounded-primary text-brand-base-white">
        <div className="flex items-center gap-s-16 mb-s-20">
          <div className="w-s-32 h-s-32 rounded-secondary bg-brand-base-white"></div>
          <div>
            <h3 className="text-14-med text-brand-base-white">Suryoday SF Bank</h3>
            <p className="text-10-book text-base-B-40">2 years 6 months</p>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-10-all-caps text-base-B-40 mb-s-4">Return</p>
            <p className="text-24-med text-semantics-success">9.10%</p>
          </div>
          <button className="px-s-20 py-s-10 bg-brand-sm-purple rounded-secondary text-12-med">
            Book Now
          </button>
        </div>
      </div>

      {/* Variant 6: Compact List Item */}
      <div className="p-s-12 bg-brand-base-white border-b border-base-B-10 flex items-center justify-between">
        <div className="flex items-center gap-s-8">
          <div className="w-s-24 h-s-24 rounded-full-round bg-base-B-10"></div>
          <div>
            <h3 className="text-12-med text-base-B-80">Suryoday SFB</h3>
            <p className="text-10-book text-base-B-40">High Interest FD</p>
          </div>
        </div>
        <div className="flex items-center gap-s-12">
          <p className="text-14-med text-semantics-success">9.10%</p>
          <button className="px-s-12 py-s-4 bg-base-B-03 text-base-B-80 rounded-secondary text-10-med">
            Book
          </button>
        </div>
      </div>

      {/* Variant 7: Centered Promo Card */}
      <div className="p-s-32 bg-brand-base-white border border-brand-sm-purple rounded-primary text-center">
        <div className="w-s-40 h-s-40 rounded-secondary bg-brand-sm-purple mx-auto mb-s-16"></div>
        <h3 className="text-20-med text-base-B-80 mb-s-8">Suryoday Small Finance Bank</h3>
        <div className="flex justify-center gap-s-8 mb-s-16">
          <span className="px-s-8 py-s-4 bg-base-B-03 rounded-secondary text-10-book">High Interest FD</span>
          <span className="px-s-8 py-s-4 bg-base-B-03 rounded-secondary text-10-book">2y 6m</span>
        </div>
        <p className="text-40-med text-brand-sm-purple mb-s-24">9.10%</p>
        <button className="w-full py-s-12 bg-brand-sm-purple text-brand-base-white rounded-primary text-14-med">
          Book Now
        </button>
      </div>

      {/* Variant 8: Split Content */}
      <div className="flex rounded-primary overflow-hidden border border-base-B-10">
        <div className="w-1/3 bg-base-B-03 p-s-16 flex flex-col justify-center items-center text-center">
          <div className="w-s-32 h-s-32 rounded-full-round bg-base-B-40 mb-s-8"></div>
          <p className="text-10-book text-base-B-60">Suryoday SFB</p>
        </div>
        <div className="w-2/3 p-s-16 bg-brand-base-white">
          <div className="flex justify-between items-start mb-s-12">
             <span className="text-10-all-caps text-semantics-warning">Recommended</span>
             <p className="text-17-med text-base-B-80">9.10%</p>
          </div>
          <p className="text-12-book text-base-B-60 mb-s-12">2 years 6 months</p>
          <button className="text-12-med text-brand-sm-purple">Book Now →</button>
        </div>
      </div>

      {/* Variant 9: Tag on Top */}
      <div className="relative pt-s-16">
        <div className="absolute top-0 left-s-16 px-s-8 py-s-4 bg-semantics-warning text-base-B-80 text-8-all-caps rounded-secondary">
          Best Rate
        </div>
        <div className="p-s-16 pt-s-24 bg-brand-base-white border border-base-B-10 rounded-primary">
          <div className="flex justify-between items-center mb-s-12">
            <h3 className="text-14-med text-base-B-80">Suryoday Small Finance Bank</h3>
            <div className="w-s-24 h-s-24 rounded-full-round bg-base-B-10"></div>
          </div>
          <div className="grid grid-cols-2 gap-s-16 mb-s-16">
            <div>
              <p className="text-10-book text-base-B-40">Rate</p>
              <p className="text-17-med text-semantics-success">9.10%</p>
            </div>
            <div>
              <p className="text-10-book text-base-B-40">Tenure</p>
              <p className="text-14-book text-base-B-80">2y 6m</p>
            </div>
          </div>
          <button className="w-full py-s-8 border border-base-B-80 text-base-B-80 rounded-secondary text-12-med">
            Book Now
          </button>
        </div>
      </div>

      {/* Variant 10: Glassmorphism-ish (using semi-transparent backgrounds) */}
      <div className="p-s-20 bg-brand-sm-purple rounded-primary text-brand-base-white">
        <div className="flex justify-between items-center mb-s-24">
          <div className="flex items-center gap-s-8">
            <div className="w-s-24 h-s-24 rounded-full-round bg-brand-base-white bg-opacity-20"></div>
            <span className="text-12-med">Suryoday</span>
          </div>
          <span className="px-s-8 py-s-2 bg-brand-base-white bg-opacity-20 rounded-full-round text-10-book">FD</span>
        </div>
        <div className="text-center mb-s-24">
          <p className="text-40-med">9.10%</p>
          <p className="text-12-book opacity-80">2 years 6 months</p>
        </div>
        <button className="w-full py-s-12 bg-brand-base-white text-brand-sm-purple rounded-secondary text-14-med font-bold">
          Book Now
        </button>
      </div>
    </div>
  );
};

