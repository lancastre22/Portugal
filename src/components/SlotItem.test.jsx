import { render, screen } from '@testing-library/react'
import SlotItem from './SlotItem'

test('renders confirmed slot label with no idea tag', () => {
  render(<SlotItem slot={{ type: 'restaurant', label: 'Bar do Fundo', confirmed: true }} />)
  expect(screen.getByText('Bar do Fundo')).toBeInTheDocument()
  expect(screen.queryByText('idea')).not.toBeInTheDocument()
})

test('confirmed slot has confirmed CSS class', () => {
  const { container } = render(
    <SlotItem slot={{ type: 'restaurant', label: 'Bar do Fundo', confirmed: true }} />
  )
  expect(container.querySelector('.slot--confirmed')).toBeInTheDocument()
  expect(container.querySelector('.slot--tbd')).not.toBeInTheDocument()
})

test('unconfirmed slot renders label plus an "idea" tag', () => {
  render(<SlotItem slot={{ type: 'beach', label: 'Praia dos Machados', confirmed: false }} />)
  expect(screen.getByText('Praia dos Machados')).toBeInTheDocument()
  expect(screen.getByText('idea')).toBeInTheDocument()
})

test('unconfirmed slot has tbd CSS class', () => {
  const { container } = render(
    <SlotItem slot={{ type: 'activity', label: 'Morning activity', confirmed: false }} />
  )
  expect(container.querySelector('.slot--tbd')).toBeInTheDocument()
  expect(container.querySelector('.slot--confirmed')).not.toBeInTheDocument()
})

test('renders an optional note when present', () => {
  render(
    <SlotItem slot={{ type: 'vibe', label: 'Camp at sunset', confirmed: true, note: 'Backup: Orbitur Sagres' }} />
  )
  expect(screen.getByText('Backup: Orbitur Sagres')).toBeInTheDocument()
})

test('omits the note element when no note is given', () => {
  const { container } = render(
    <SlotItem slot={{ type: 'beach', label: 'Beach day', confirmed: true }} />
  )
  expect(container.querySelector('.slot__note')).not.toBeInTheDocument()
})

test('renders correct icon for each slot type', () => {
  const cases = [
    { type: 'activity',   icon: '🗺' },
    { type: 'restaurant', icon: '🍽' },
    { type: 'beach',      icon: '🏖' },
    { type: 'logistics',  icon: '🚗' },
    { type: 'vibe',       icon: '⚡' },
  ]
  cases.forEach(({ type, icon }) => {
    const { container } = render(
      <SlotItem slot={{ type, label: 'Test', confirmed: true }} />
    )
    expect(container.querySelector('.slot__icon').textContent).toBe(icon)
  })
})
