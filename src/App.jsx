import { phases } from './data/itinerary'
import Header from './components/Header'
import PhaseSection from './components/PhaseSection'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        {phases.map((phase) => (
          <PhaseSection key={phase.id} phase={phase} />
        ))}
      </main>
    </div>
  )
}
