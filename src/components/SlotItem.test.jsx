import { render, screen } from '@testing-library/react'
import SlotItem from './SlotItem'

test('renders confirmed slot label without TBD suffix', () => {
  render(<SlotItem slot={{ type: 'restaurant', label: 'Bar do Fundo', confirmed: true }} />)
  expect(screen.getByText('Bar do Fundo')).toBeInTheDocument()
  expect(screen.queryByText(/TBD/)).not.toBeInTheDocument()
})

test('confirmed slot has confirmed CSS class', () => {
  const { container } = render(
    <SlotItem slot={{ type: 'restaurant', label: 'Bar do Fundo', confirmed: true }} />
  )
  expect(container.querySelector('.slot--confirmed')).toBeInTheDocument()
  expect(container.querySelector('.slot--tbd')).not.toBeInTheDocument()
})

test('renders TBD slot with "TBD" suffix', () => {
  render(<SlotItem slot={{ type: 'activity', label: 'Morning activity', confirmed: false }} />)
  expect(screen.getByText('Morning activity TBD')).toBeInTheDocument()
})

test('TBD slot has tbd CSS class', () => {
  const { container } = render(
    <SlotItem slot={{ type: 'activity', label: 'Morning activity', confirmed: false }} />
  )
  expect(container.querySelector('.slot--tbd')).toBeInTheDocument()
  expect(container.querySelector('.slot--confirmed')).not.toBeInTheDocument()
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
