import './App.css'
import { ReturnsCalculator } from './components/ReturnsCalculator';

function App() {

  return (
    <div className="min-h-screen bg-brand-base-white p-s-20 font-primary">
      <div className="max-w-4xl mx-auto">
        
        {/* FD Returns Calculator */}
        <section>
          <ReturnsCalculator />
        </section>

      </div>
    </div>
  )
}

export default App
