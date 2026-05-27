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

test('renders confirmed slot without TBD', () => {
  render(<App />)
  expect(screen.getByText('Bar do Fundo')).toBeInTheDocument()
})

test('renders open slot with TBD suffix', () => {
  render(<App />)
  expect(screen.getByText('Lunch in Lisbon TBD')).toBeInTheDocument()
})
