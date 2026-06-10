const SLOT_ICONS = {
  activity:   '🗺',
  restaurant: '🍽',
  beach:      '🏖',
  logistics:  '🚗',
  vibe:       '⚡',
}

export default function SlotItem({ slot }) {
  const icon = SLOT_ICONS[slot.type] ?? '📍'
  const className = slot.confirmed ? 'slot slot--confirmed' : 'slot slot--tbd'

  return (
    <div className={className}>
      <span className="slot__icon">{icon}</span>
      <div className="slot__body">
        <span className="slot__label">
          {slot.label}
          {!slot.confirmed && <span className="slot__tag">idea</span>}
        </span>
        {slot.note && <span className="slot__note">{slot.note}</span>}
      </div>
    </div>
  )
}
