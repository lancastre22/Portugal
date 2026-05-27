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
