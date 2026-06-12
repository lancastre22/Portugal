import { phases } from './data/itinerary'
import { packing } from './data/packing'
import Header from './components/Header'
import PhaseSection from './components/PhaseSection'
import PackingList from './components/PackingList'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        {phases.map((phase) => (
          <PhaseSection key={phase.id} phase={phase} />
        ))}
        <PackingList list={packing} />
      </main>
    </div>
  )
}
