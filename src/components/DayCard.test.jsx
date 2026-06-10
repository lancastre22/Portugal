import { render, screen } from '@testing-library/react'
import DayCard from './DayCard'

const day = {
  date: 'Sun Jun 14',
  location: 'Praia Grande',
  slots: [
    { type: 'beach',      label: 'Beach day',  confirmed: true  },
    { type: 'restaurant', label: 'Dinner spot', confirmed: false },
  ],
}

test('renders date and location in label', () => {
  render(<DayCard day={day} color="blue" />)
  expect(screen.getByText('Sun Jun 14 · Praia Grande')).toBeInTheDocument()
})

test('renders all slot labels', () => {
  render(<DayCard day={day} color="blue" />)
  expect(screen.getByText('Beach day')).toBeInTheDocument()
  expect(screen.getByText('Dinner spot')).toBeInTheDocument()
})

test('applies correct color class to label', () => {
  const { container } = render(<DayCard day={day} color="green" />)
  expect(container.querySelector('.day-card__label--green')).toBeInTheDocument()
})

test('renders without location gracefully', () => {
  const dayNoLocation = { date: 'Sat Jun 20', location: '', slots: [] }
  render(<DayCard day={dayNoLocation} color="purple" />)
  expect(screen.getByText('Sat Jun 20')).toBeInTheDocument()
})
