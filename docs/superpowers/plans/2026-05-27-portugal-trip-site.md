# Portugal Trip Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a mobile-first React site displaying the Portugal June 2025 trip itinerary as phase-grouped day cards with confirmed vs TBD slots.

**Architecture:** React + Vite SPA with all trip data in a single `src/data/itinerary.js` file. Components are purely presentational — no state, no backend. Deployed on Vercel via git push.

**Tech Stack:** React 18, Vite 5, Vitest + React Testing Library (tests), Google Fonts (Playfair Display + Inter), Vercel (hosting)

---

## File Map

| File | Purpose |
|---|---|
| `index.html` | Entry point — Google Fonts `<link>` lives here |
| `vite.config.js` | Vite + Vitest config |
| `src/main.jsx` | React root mount |
| `src/App.jsx` | Renders Header + one PhaseSection per phase |
| `src/App.test.jsx` | Smoke test: all 4 phases render |
| `src/index.css` | All styles — CSS custom properties + component classes |
| `src/test/setup.js` | Imports `@testing-library/jest-dom` |
| `src/data/itinerary.js` | All trip data (the only file that changes regularly) |
| `src/components/Header.jsx` | Hero banner — title, dates, crew chips |
| `src/components/PhaseSection.jsx` | Phase header + accent line + DayCard list |
| `src/components/DayCard.jsx` | Single day card — date label + SlotItem list |
| `src/components/DayCard.test.jsx` | DayCard render tests |
| `src/components/SlotItem.jsx` | Individual slot — confirmed (solid) or TBD (dashed) |
| `src/components/SlotItem.test.jsx` | SlotItem render tests |

---

## Task 1: Scaffold Vite + React + Vitest

**Files:**
- Create: `index.html`, `vite.config.js`, `package.json`, `src/main.jsx`, `src/test/setup.js`, `.gitignore`

- [ ] **Step 1: Scaffold Vite project in the Portugal directory**

Run from `/Users/manuellancastre/Documents/PersonalProjects/Portugal`:
```bash
npm create vite@latest . -- --template react
```
When prompted about non-empty directory, choose **"Ignore files and continue"**.

- [ ] **Step 2: Install runtime dependencies**

```bash
npm install
```

- [ ] **Step 3: Install test dependencies**

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

- [ ] **Step 4: Update `vite.config.js` to include Vitest config**

Replace the contents of `vite.config.js` with:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
})
```

- [ ] **Step 5: Create test setup file**

Create `src/test/setup.js`:
```js
import '@testing-library/jest-dom'
```

- [ ] **Step 6: Add Google Fonts to `index.html`**

Replace the `<head>` section of `index.html` with:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <title>Portugal Summer '25</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 7: Update `src/main.jsx`**

Replace contents of `src/main.jsx`:
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 8: Delete Vite boilerplate files**

```bash
rm -rf src/assets src/App.css public/vite.svg
```

- [ ] **Step 9: Add `.superpowers/` to `.gitignore`**

Open `.gitignore` and append:
```
.superpowers/
```

- [ ] **Step 10: Verify Vitest is wired up**

Create a temporary smoke test at `src/smoke.test.js`:
```js
test('vitest is working', () => {
  expect(1 + 1).toBe(2)
})
```
Run:
```bash
npx vitest run
```
Expected output: `1 passed`

Then delete `src/smoke.test.js`.

- [ ] **Step 11: Commit**

```bash
git add index.html vite.config.js package.json package-lock.json src/main.jsx src/test/setup.js .gitignore
git commit -m "feat: scaffold Vite + React + Vitest"
```

---

## Task 2: Global CSS

**Files:**
- Create: `src/index.css`

- [ ] **Step 1: Create `src/index.css`**

```css
/* ---- Reset / Base ---- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
}

/* ---- Custom Properties ---- */
:root {
  --bg: #f5f0e8;
  --card: #ffffff;
  --text: #1a1a1a;
  --text-muted: #999;
  --slot-confirmed-bg: #f8f5f0;
  --slot-tbd-border: #ddd;
  --orange: #e07b39;
  --orange-dark: #c8410a;
  --blue: #2e86ab;
  --green: #3a9e6e;
  --purple: #7b5ea7;
  --radius-card: 14px;
  --radius-slot: 8px;
}

/* ---- App wrapper ---- */
.app { min-height: 100vh; }

/* ---- Hero ---- */
.hero {
  background: linear-gradient(160deg, var(--orange-dark) 0%, var(--orange) 60%, #f5a623 100%);
  padding: 36px 20px 28px;
  text-align: center;
}
.hero__flag { font-size: 28px; margin-bottom: 6px; }
.hero__title {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -0.5px;
}
.hero__dates {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 8px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.hero__crew {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
}
.crew-chip {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(4px);
}

/* ---- Content ---- */
.content {
  max-width: 420px;
  margin: 0 auto;
  padding: 20px 16px 40px;
}

/* ---- Phase ---- */
.phase { margin-bottom: 28px; }

.phase__header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.phase__icon { font-size: 20px; }
.phase__name {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
}
.phase__dates {
  font-size: 11px;
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1px;
}
.phase__line {
  height: 3px;
  border-radius: 2px;
  margin-bottom: 14px;
}
.phase__line--orange { background: linear-gradient(90deg, var(--orange), transparent); }
.phase__line--blue   { background: linear-gradient(90deg, var(--blue), transparent); }
.phase__line--green  { background: linear-gradient(90deg, var(--green), transparent); }
.phase__line--purple { background: linear-gradient(90deg, var(--purple), transparent); }

.phase__days {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ---- Day Card ---- */
.day-card {
  background: var(--card);
  border-radius: var(--radius-card);
  padding: 14px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}
.day-card__label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-bottom: 10px;
}
.day-card__label--orange { color: #c85c1a; }
.day-card__label--blue   { color: var(--blue); }
.day-card__label--green  { color: var(--green); }
.day-card__label--purple { color: var(--purple); }

.day-card__slots {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* ---- Slot ---- */
.slot {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 8px;
  border-radius: var(--radius-slot);
}
.slot--confirmed {
  background: var(--slot-confirmed-bg);
  color: var(--text);
}
.slot--tbd {
  border: 1.5px dashed var(--slot-tbd-border);
  color: var(--text-muted);
  font-style: italic;
  font-weight: 400;
}
.slot__icon { font-size: 15px; flex-shrink: 0; }
```

- [ ] **Step 2: Commit**

```bash
git add src/index.css
git commit -m "feat: add global styles and CSS design tokens"
```

---

## Task 3: Trip Data

**Files:**
- Create: `src/data/itinerary.js`

- [ ] **Step 1: Create `src/data/itinerary.js`**

```js
export const phases = [
  {
    id: "friends-arrive",
    name: "Friends Arrive",
    emoji: "🏛",
    color: "orange",
    dates: "Sat Jun 13",
    days: [
      {
        date: "Sat Jun 13",
        location: "Lisbon",
        slots: [
          { type: "activity",   label: "Morning activity",    confirmed: false },
          { type: "restaurant", label: "Lunch spot",          confirmed: false },
          { type: "activity",   label: "Afternoon",           confirmed: false },
          { type: "logistics",  label: "Uber to Praia Grande", confirmed: true  },
        ],
      },
    ],
  },
  {
    id: "praia-grande-base",
    name: "Praia Grande Base",
    emoji: "🏄",
    color: "blue",
    dates: "Sun Jun 14 – Mon Jun 15",
    days: [
      {
        date: "Sun Jun 14",
        location: "Praia Grande",
        slots: [
          { type: "logistics",  label: "Manuel arrives",  confirmed: true },
          { type: "beach",      label: "Beach day",       confirmed: true },
          { type: "restaurant", label: "Bar do Fundo",    confirmed: true },
        ],
      },
      {
        date: "Mon Jun 15",
        location: "Praia Grande",
        slots: [
          { type: "activity",   label: "Cliff hike",             confirmed: true },
          { type: "vibe",       label: "Pool / soccer at house", confirmed: true },
          { type: "restaurant", label: "Buzio",                  confirmed: true },
        ],
      },
    ],
  },
  {
    id: "coastal-road-trip",
    name: "Coastal Road Trip",
    emoji: "🏕",
    color: "green",
    dates: "Tue Jun 16 – Wed Jun 17",
    days: [
      {
        date: "Tue Jun 16",
        location: "Lisbon → Coast",
        slots: [
          { type: "logistics",  label: "Pick up rental car (10am)", confirmed: true  },
          { type: "restaurant", label: "Lunch in Lisbon",           confirmed: false },
          { type: "logistics",  label: "Get supplies at supermarket", confirmed: true },
          { type: "beach",      label: "First beach",               confirmed: false },
          { type: "vibe",       label: "Camp at sunset",            confirmed: true  },
        ],
      },
      {
        date: "Wed Jun 17",
        location: "Coast",
        slots: [
          { type: "logistics",  label: "Drive to next spot", confirmed: false },
          { type: "restaurant", label: "Lunch stop",         confirmed: false },
          { type: "beach",      label: "Second beach",       confirmed: false },
          { type: "vibe",       label: "Camp at sunset",     confirmed: true  },
        ],
      },
    ],
  },
  {
    id: "home-stretch",
    name: "Home Stretch",
    emoji: "🎉",
    color: "purple",
    dates: "Thu Jun 18 – Sun Jun 21",
    days: [
      {
        date: "Thu Jun 18",
        location: "Coast → Praia Grande",
        slots: [
          { type: "logistics",  label: "Drive back to Praia Grande", confirmed: true  },
          { type: "logistics",  label: "Drop rental car in Lisbon",  confirmed: true  },
          { type: "restaurant", label: "Dinner",                     confirmed: false },
        ],
      },
      {
        date: "Fri Jun 19",
        location: "Lisbon",
        slots: [
          { type: "vibe",      label: "Slow morning",                   confirmed: true },
          { type: "logistics", label: "Head to Lisbon end of afternoon", confirmed: true },
          { type: "activity",  label: "Santos Populares",               confirmed: true },
          { type: "logistics", label: "Sleep in Praia Grande",          confirmed: true },
        ],
      },
      {
        date: "Sat Jun 20",
        location: "TBD",
        slots: [
          { type: "activity",  label: "Day TBD — vibes",   confirmed: false },
          { type: "logistics", label: "Departures begin",  confirmed: true  },
        ],
      },
      {
        date: "Sun Jun 21",
        location: "Departure",
        slots: [
          { type: "logistics", label: "Last departures", confirmed: true },
        ],
      },
    ],
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add src/data/itinerary.js
git commit -m "feat: add trip itinerary data"
```

---

## Task 4: SlotItem Component

**Files:**
- Create: `src/components/SlotItem.jsx`
- Test: `src/components/SlotItem.test.jsx`

- [ ] **Step 1: Write the failing tests**

Create `src/components/SlotItem.test.jsx`:
```jsx
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
```

- [ ] **Step 2: Run tests to confirm they fail**

```bash
npx vitest run src/components/SlotItem.test.jsx
```
Expected: FAIL — `SlotItem` not found.

- [ ] **Step 3: Create `src/components/SlotItem.jsx`**

```jsx
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
```

- [ ] **Step 4: Run tests to confirm they pass**

```bash
npx vitest run src/components/SlotItem.test.jsx
```
Expected: 5 passed.

- [ ] **Step 5: Commit**

```bash
git add src/components/SlotItem.jsx src/components/SlotItem.test.jsx
git commit -m "feat: add SlotItem component"
```

---

## Task 5: DayCard Component

**Files:**
- Create: `src/components/DayCard.jsx`
- Test: `src/components/DayCard.test.jsx`

- [ ] **Step 1: Write the failing tests**

Create `src/components/DayCard.test.jsx`:
```jsx
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
  expect(screen.getByText('Dinner spot TBD')).toBeInTheDocument()
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
```

- [ ] **Step 2: Run tests to confirm they fail**

```bash
npx vitest run src/components/DayCard.test.jsx
```
Expected: FAIL — `DayCard` not found.

- [ ] **Step 3: Create `src/components/DayCard.jsx`**

```jsx
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
```

- [ ] **Step 4: Run tests to confirm they pass**

```bash
npx vitest run src/components/DayCard.test.jsx
```
Expected: 4 passed.

- [ ] **Step 5: Commit**

```bash
git add src/components/DayCard.jsx src/components/DayCard.test.jsx
git commit -m "feat: add DayCard component"
```

---

## Task 6: PhaseSection Component

**Files:**
- Create: `src/components/PhaseSection.jsx`

- [ ] **Step 1: Create `src/components/PhaseSection.jsx`**

```jsx
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
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PhaseSection.jsx
git commit -m "feat: add PhaseSection component"
```

---

## Task 7: Header Component

**Files:**
- Create: `src/components/Header.jsx`

- [ ] **Step 1: Create `src/components/Header.jsx`**

```jsx
export default function Header() {
  return (
    <header className="hero">
      <div className="hero__flag">🇵🇹</div>
      <h1 className="hero__title">Portugal Summer &#39;25</h1>
      <p className="hero__dates">Jun 13 – Jun 21 · Sintra &amp; The Coast</p>
      <div className="hero__crew">
        <span className="crew-chip">Manuel</span>
        <span className="crew-chip">+ friends</span>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Header.jsx
git commit -m "feat: add Header component"
```

---

## Task 8: App Composition + Smoke Test

**Files:**
- Create: `src/App.jsx`, `src/App.test.jsx`

- [ ] **Step 1: Write the failing smoke test**

Create `src/App.test.jsx`:
```jsx
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
```

- [ ] **Step 2: Run tests to confirm they fail**

```bash
npx vitest run src/App.test.jsx
```
Expected: FAIL — `App` is empty.

- [ ] **Step 3: Create `src/App.jsx`**

```jsx
import { phases } from './data/itinerary'
import Header from './components/Header'
import PhaseSection from './components/PhaseSection'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        {phases.map((phase) => (
          <PhaseSection key={phase.id} phase={phase} />
        ))}
      </main>
    </div>
  )
}
```

- [ ] **Step 4: Run all tests**

```bash
npx vitest run
```
Expected: all tests pass (SlotItem × 5, DayCard × 4, App × 4 = 13 total).

- [ ] **Step 5: Run dev server and visually verify on mobile viewport**

```bash
npm run dev
```
Open `http://localhost:5173` in a browser. Use DevTools to set viewport to iPhone SE (375×667). Verify:
- Hero banner shows with terracotta gradient
- All 4 phases appear with correct color accent lines
- Confirmed slots are solid, TBD slots are dashed/italic
- Page scrolls smoothly on narrow viewport

- [ ] **Step 6: Commit**

```bash
git add src/App.jsx src/App.test.jsx
git commit -m "feat: wire up App with all components"
```

---

## Task 9: Deploy to Vercel

**Files:**
- No new files required (Vite generates correct build output for Vercel automatically)

- [ ] **Step 1: Build to confirm no errors**

```bash
npm run build
```
Expected: `dist/` folder created, no errors. Output should be ~200KB.

- [ ] **Step 2: Connect repo to Vercel**

Go to [vercel.com/new](https://vercel.com/new), import the repo, select the `Portugal` subdirectory as the root (since the repo root is `Documents/PersonalProjects/`), and deploy.

Vercel auto-detects Vite. No `vercel.json` needed.

Alternatively, from the Portugal directory:
```bash
npx vercel --prod
```
Follow the prompts. When asked for root directory, confirm it detects the Vite project correctly (it will find `vite.config.js`).

- [ ] **Step 3: Verify the live URL**

Open the Vercel URL on your phone. Check:
- Fonts load (Playfair Display, Inter)
- All 4 phases render
- Confirmed vs TBD slots display correctly
- Hero gradient looks right

- [ ] **Step 4: Commit build confirmation**

```bash
git add .
git commit -m "feat: verify production build"
```

From this point, any `git push` to `main` auto-redeploys the site.

---

## Adding Plans Later

To add a new item to any day, open `src/data/itinerary.js` and add a slot to the relevant day's `slots` array:

```js
{ type: "restaurant", label: "Tasca do Chico", confirmed: true }
```

Then:
```bash
git add src/data/itinerary.js
git commit -m "add: Tasca do Chico on Fri Jun 19"
git push
```

Vercel deploys in ~30 seconds. Done.
