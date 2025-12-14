import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-brand-base-white p-s-20 font-primary">
      <div className="max-w-4xl mx-auto space-y-s-32">
        {/* Header */}
        <div className="space-y-s-8">
          <h1 className="text-24-med text-base-B-80">Stable Money Design System</h1>
          <p className="text-17-book text-base-B-60">Design system atoms and tokens verification</p>
        </div>

        {/* Colors Section */}
        <section className="space-y-s-16">
          <h2 className="text-20-med text-base-B-80">Colors</h2>
          
          <div className="space-y-s-8">
            <h3 className="text-14-med text-base-B-60">Semantics</h3>
            <div className="grid grid-cols-3 gap-s-16">
              <div className="space-y-s-4">
                <div className="h-s-40 rounded-primary bg-semantics-error"></div>
                <p className="text-12-book">Error</p>
              </div>
              <div className="space-y-s-4">
                <div className="h-s-40 rounded-primary bg-semantics-warning"></div>
                <p className="text-12-book">Warning</p>
              </div>
              <div className="space-y-s-4">
                <div className="h-s-40 rounded-primary bg-semantics-success"></div>
                <p className="text-12-book">Success</p>
              </div>
              <div className="space-y-s-4">
                <div className="h-s-40 rounded-primary bg-semantics-error-light"></div>
                <p className="text-12-book">Error Light</p>
              </div>
              <div className="space-y-s-4">
                <div className="h-s-40 rounded-primary bg-semantics-warning-light"></div>
                <p className="text-12-book">Warning Light</p>
              </div>
              <div className="space-y-s-4">
                <div className="h-s-40 rounded-primary bg-semantics-success-light"></div>
                <p className="text-12-book">Success Light</p>
              </div>
            </div>
          </div>

          <div className="space-y-s-8">
            <h3 className="text-14-med text-base-B-60">Base Colors</h3>
            <div className="grid grid-cols-6 gap-s-8">
              {[
                { key: '80', class: 'bg-base-B-80' },
                { key: '60', class: 'bg-base-B-60' },
                { key: '50', class: 'bg-base-B-50' },
                { key: '40', class: 'bg-base-B-40' },
                { key: '10', class: 'bg-base-B-10' },
                { key: '03', class: 'bg-base-B-03' },
              ].map((item) => (
                <div key={item.key} className="space-y-s-4">
                  <div className={`h-s-40 rounded-secondary ${item.class}`}></div>
                  <p className="text-10-book">B-{item.key}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-s-8">
            <h3 className="text-14-med text-base-B-60">Brand Colors</h3>
            <div className="grid grid-cols-2 gap-s-16">
              <div className="space-y-s-4">
                <div className="h-s-40 rounded-primary bg-brand-base-white border border-base-B-10"></div>
                <p className="text-12-book">Base White</p>
              </div>
              <div className="space-y-s-4">
                <div className="h-s-40 rounded-primary bg-brand-sm-purple"></div>
                <p className="text-12-book">SM Purple</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="space-y-s-16">
          <h2 className="text-20-med text-base-B-80">Typography Styles</h2>
          <div className="grid grid-cols-2 gap-s-24 p-s-16 border border-base-B-10 rounded-primary">
            <div className="space-y-s-12">
              <p className="text-24-med">24 Medium</p>
              <p className="text-24-book">24 Book</p>
              <p className="text-20-med">20 Medium</p>
              <p className="text-20-book">20 Book</p>
              <p className="text-17-med">17 Medium</p>
              <p className="text-17-book">17 Book</p>
              <p className="text-14-med">14 Medium</p>
              <p className="text-14-book">14 Book</p>
            </div>
            <div className="space-y-s-12">
              <p className="text-12-med">12 Medium</p>
              <p className="text-12-book">12 Book</p>
              <p className="text-10-med">10 Medium</p>
              <p className="text-10-book">10 Book</p>
              <p className="text-accent-01">Accent - 01</p>
              <p className="text-8-all-caps">8 ALL CAPS</p>
              <p className="text-10-all-caps">10 ALL CAPS</p>
            </div>
          </div>
        </section>

        {/* Spacing & Radius Section */}
        <section className="space-y-s-16">
          <h2 className="text-20-med text-base-B-80">Spacing and Radius</h2>
          <div className="flex gap-s-16">
            <div className="w-s-40 h-s-40 bg-brand-sm-purple rounded-primary flex items-center justify-center text-brand-base-white text-10-book">Pri</div>
            <div className="w-s-32 h-s-32 bg-brand-sm-purple rounded-secondary flex items-center justify-center text-brand-base-white text-10-book">Sec</div>
            <div className="w-s-24 h-s-24 bg-brand-sm-purple rounded-full-round flex items-center justify-center text-brand-base-white text-8-all-caps">Full</div>
          </div>
        </section>

        {/* Stroke Section */}
        <section className="space-y-s-16">
          <h2 className="text-20-med text-base-B-80">Stroke</h2>
          <div className="flex gap-s-16">
            <div className="p-s-16 border border-primary border-base-B-80 rounded-secondary">
              <p className="text-12-book">Primary Stroke</p>
            </div>
            <div className="p-s-16 border border-secondary border-base-B-80 rounded-secondary">
              <p className="text-12-book">Secondary Stroke</p>
            </div>
          </div>
        </section>
      </div>
      </div>
  )
}

export default App
