const SLOT_ICONS = {
  activity:   '🗺',
  restaurant: '🍽',
  beach:      '🏖',
  logistics:  '🚗',
  vibe:       '⚡',
}

export default function SlotItem({ slot }) {
  const icon = SLOT_ICONS[slot.type] ?? '📍'

  if (slot.confirmed) {
    return (
      <div className="slot slot--confirmed">
        <span className="slot__icon">{icon}</span>
        <span>{slot.label}</span>
      </div>
    )
  }

  return (
    <div className="slot slot--tbd">
      <span className="slot__icon">{icon}</span>
      <span>{slot.label} TBD</span>
    </div>
  )
}
