import SlotItem from './SlotItem'

export default function DayCard({ day, color }) {
  const label = day.location ? `${day.date} · ${day.location}` : day.date

  return (
    <div className="day-card">
      <div className={`day-card__label day-card__label--${color}`}>
        {label}
      </div>
      <div className="day-card__slots">
        {day.slots.map((slot, i) => (
          <SlotItem key={i} slot={slot} />
        ))}
      </div>
    </div>
  )
}
