# Portugal Trip Site — Design Spec
_Date: 2026-05-27_

## Overview

A mobile-first static React site shared with friends and family showing the Portugal trip itinerary for June 13–21, 2025. Manuel edits a single data file to add or update plans. No backend. Deployed on Vercel.

---

## Architecture

- **Stack:** React + Vite
- **Hosting:** Vercel (same workflow as Manuel's portfolio — `git push` redeploys)
- **Data:** `src/data/itinerary.js` — a single JS file containing all trip phases and slots
- **Fonts:** Playfair Display (headers), Inter (body) via Google Fonts
- **No backend, no auth, no forms** — read-only for all visitors

---

## Trip Phases

The trip is organized into 4 named phases. Each phase has a color identity.

| Phase | Days | Color |
|---|---|---|
| Friends Arrive | Sat Jun 13 | Terracotta / orange |
| Praia Grande Base | Sun Jun 14 – Mon Jun 15 | Blue |
| Coastal Road Trip | Tue Jun 16 – Wed Jun 17 | Green |
| Home Stretch | Thu Jun 18 – Sun Jun 21 | Purple/violet |

---

## Data Model

All data lives in `src/data/itinerary.js`. Structure:

```js
export const phases = [
  {
    id: "friends-arrive",
    name: "Friends Arrive",
    emoji: "🏛",
    color: "orange",          // maps to a theme token in CSS
    dates: "Sat Jun 13",
    days: [
      {
        date: "Sat Jun 13",
        location: "Lisbon",
        slots: [
          { type: "activity", label: "Morning activity", confirmed: false },
          { type: "restaurant", label: "Lunch spot", confirmed: false },
          { type: "logistics", label: "Uber to Praia Grande", confirmed: true },
        ]
      }
    ]
  },
  // ... more phases
]
```

### Slot types and icons

| type | icon | example |
|---|---|---|
| `activity` | 🗺 | cliff hike, beach day |
| `restaurant` | 🍽 | Bar do Fundo, lunch TBD |
| `beach` | 🏖 | first beach TBD |
| `logistics` | 🚗 | pick up car, drop car |
| `vibe` | ⚡ | camp at sunset, pool time |

### Adding a plan

Open `src/data/itinerary.js`, find the right day, add a slot object:
```js
{ type: "restaurant", label: "Tasca do Chico", confirmed: true }
```
Push to git → Vercel auto-deploys in ~30 seconds.

---

## Component Structure

```
src/
  data/
    itinerary.js          — all trip data (the only file that changes regularly)
  components/
    Header.jsx            — hero banner (title, dates, crew chips)
    PhaseSection.jsx      — phase header + colored accent line + list of DayCards
    DayCard.jsx           — single day card (date label + slots)
    SlotItem.jsx          — individual slot: confirmed (solid) or TBD (dashed)
  App.jsx                 — renders Header + PhaseSection list
  main.jsx
  index.css               — global styles, CSS custom properties for phase colors
```

### Component responsibilities

**Header** — Static. Shows trip title ("Portugal Summer '25"), date range (Jun 13–21), location subtitle, and crew chips. Terracotta gradient background.

**PhaseSection** — Receives one phase object. Renders the phase name, emoji, date range, colored accent line, and maps `phase.days` to `DayCard` components.

**DayCard** — Receives one day object. Renders a white card with the date/location label and maps `day.slots` to `SlotItem` components.

**SlotItem** — Receives one slot. If `confirmed: true`, renders solid with background tint. If `confirmed: false`, renders dashed border, muted text, italic — visually communicates "TBD, suggestions welcome."

---

## Visual Design

### Color palette

| Token | Value | Used for |
|---|---|---|
| `--bg` | `#f5f0e8` | Page background (warm cream) |
| `--card` | `#ffffff` | Day cards |
| `--text` | `#1a1a1a` | Primary text |
| `--text-muted` | `#999` | Date labels, subtitles |
| `--slot-confirmed-bg` | `#f8f5f0` | Confirmed slot background |
| `--slot-tbd-border` | `#ddd` | TBD slot dashed border |
| `--orange` | `#e07b39` | Phase 1 accent |
| `--blue` | `#2e86ab` | Phase 2 accent |
| `--green` | `#3a9e6e` | Phase 3 accent |
| `--purple` | `#7b5ea7` | Phase 4 accent |

### Typography

- **Playfair Display 700/900** — phase names, hero title
- **Inter 400/500/600** — slot labels, date labels, body

### Mobile-first layout

- Max content width: 420px, centered
- Cards: 14px border-radius, 2px soft shadow
- Hero: full-bleed terracotta gradient with Portuguese flag emoji
- Phase accent line: 3px colored bar fading to transparent (left-to-right gradient)

---

## Pre-loaded Trip Data

### Phase 1: Friends Arrive (Sat Jun 13)
- Lisbon — full day TBD (friends explore solo, Manuel not there yet)
- Evening: Uber to Praia Grande ✅

### Phase 2: Praia Grande Base (Sun Jun 14 – Mon Jun 15)
**Sun Jun 14**
- Manuel arrives ✅
- Beach day ✅
- Bar do Fundo ✅

**Mon Jun 15**
- Cliff hike ✅
- Pool / soccer at house ✅
- Buzio ✅

### Phase 3: Coastal Road Trip (Tue Jun 16 – Wed Jun 17)
**Tue Jun 16 — Lisbon → Coast**
- Pick up rental car (10am) ✅
- Lunch in Lisbon TBD
- Supermarket on the way ✅ (slot confirmed but location TBD — label as "Get supplies")
- First beach TBD
- Camp at sunset ✅

**Wed Jun 17 — Coast**
- Drive to next beach TBD
- Lunch stop TBD
- Second beach TBD
- Camp at sunset ✅

### Phase 4: Home Stretch (Thu Jun 18 – Sun Jun 21)
**Thu Jun 18**
- Drive back to Praia Grande ✅
- Drop rental car in Lisbon ✅
- Dinner at home / something nearby TBD

**Fri Jun 19**
- Slow morning ✅
- Head to Lisbon end of afternoon ✅
- Santos Populares ✅
- Sleep in Praia Grande ✅

**Sat Jun 20**
- Open — people start leaving
- Day TBD

**Sun Jun 21**
- Last departures ✅

---

## Out of scope

- Family submission forms (WhatsApp → Manuel updates the data file)
- Admin UI
- Backend / database
- Maps integration (can add later as a link per slot)
- Authentication
