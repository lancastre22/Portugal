import { render, screen } from '@testing-library/react'
import App from './App'

test('renders trip title', () => {
  render(<App />)
  expect(screen.getByText("Portugal Summer '25")).toBeInTheDocument()
})

test('renders all 4 phase names', () => {
  render(<App />)
  expect(screen.getByText('Friends Arrive')).toBeInTheDocument()
  expect(screen.getByText('Praia Grande Base')).toBeInTheDocument()
  expect(screen.getByText('Coastal Road Trip')).toBeInTheDocument()
  expect(screen.getByText('Home Stretch')).toBeInTheDocument()
})

test('renders a confirmed restaurant slot', () => {
  render(<App />)
  expect(screen.getByText('Bar do Fundo')).toBeInTheDocument()
})

test('renders an idea slot label', () => {
  render(<App />)
  expect(screen.getByText('Praia dos Machados')).toBeInTheDocument()
})
