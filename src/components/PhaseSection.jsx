import DayCard from './DayCard'

export default function PhaseSection({ phase }) {
  return (
    <section className="phase">
      <div className="phase__header">
        <span className="phase__icon">{phase.emoji}</span>
        <div>
          <h2 className="phase__name">{phase.name}</h2>
          <p className="phase__dates">{phase.dates}</p>
        </div>
      </div>
      <div className={`phase__line phase__line--${phase.color}`} />
      <div className="phase__days">
        {phase.days.map((day) => (
          <DayCard key={day.date} day={day} color={phase.color} />
        ))}
      </div>
      {phase.routeUrl && (
        <a
          className="phase__route"
          href={phase.routeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          🗺 View full route on Google Maps
        </a>
      )}
    </section>
  )
}
