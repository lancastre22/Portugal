// =============================================================================
//  HOW TO EDIT THIS TRIP
// -----------------------------------------------------------------------------
//  Each phase has days; each day has slots. A slot looks like:
//    { type, label, confirmed, note }
//
//    type      one of: activity | restaurant | beach | logistics | vibe
//    label     the text shown
//    confirmed true  -> solid item (locked in)
//              false -> dashed "idea" item (suggestion / TBD)
//    note      (optional) small grey subtext under the label
//
//  To add a plan: find the day and drop a new slot into its `slots` array.
// =============================================================================

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
          { type: "activity",   label: "Morning: Belém",                confirmed: false, note: "Torre de Belém, Mosteiro dos Jerónimos, Pastéis de Belém (the OG nata)" },
          { type: "restaurant", label: "Lunch: Time Out Market",        confirmed: false, note: "Cais do Sodré — easy + varied for a jetlagged crew" },
          { type: "activity",   label: "Afternoon: Baixa & Chiado",     confirmed: false, note: "Terreiro do Paço, Rua Augusta arch, Santa Justa lift, miradouro de Santa Catarina" },
          { type: "logistics",  label: "Uber to Praia Grande",          confirmed: true,  note: "~40 min — Manuel arrives next morning" },
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
          { type: "logistics",  label: "Manuel arrives",                confirmed: true },
          { type: "beach",      label: "Beach day",                     confirmed: true },
          { type: "activity",   label: "Cliff hike → Cabo da Roca",     confirmed: false, note: "Westernmost point of mainland Europe — great sunset" },
          { type: "vibe",       label: "Pool / soccer at house",        confirmed: true },
          { type: "restaurant", label: "Bar do Fundo",                  confirmed: true },
        ],
      },
      {
        date: "Mon Jun 15",
        location: "Praia Grande",
        slots: [
          { type: "activity",   label: "Cliff hike → Praia da Adraga",  confirmed: true },
          { type: "beach",      label: "Beach / surf",                  confirmed: false },
          { type: "vibe",       label: "Pool / soccer at house",        confirmed: true },
          { type: "activity",   label: "Azenhas do Mar natural pool",   confirmed: false, note: "Cliffside village + sea pool, ~15 min up the coast" },
          { type: "restaurant", label: "Buzio",                         confirmed: true },
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
    routeUrl: "https://www.google.com/maps/dir/Praia+Grande,+Sintra/Lisboa/Praia+dos+Machados/Praia+do+Brejo+Largo/Praia+do+Tonel,+Sagres/Lisboa/Praia+Grande,+Sintra",
    days: [
      {
        date: "Tue Jun 16",
        location: "Lisbon → Coast",
        slots: [
          { type: "logistics",  label: "Pick up rental car (10am)",     confirmed: true },
          { type: "restaurant", label: "Lunch: Cervejaria Ramiro",      confirmed: true,  note: "Book 1–2 days ahead; go early to beat the queue" },
          { type: "logistics",  label: "Get supplies at supermarket",   confirmed: true,  note: "Stock up before heading south — leave Lisbon ~12–1" },
          { type: "beach",      label: "Praia dos Machados",            confirmed: false, note: "Wild Costa Vicentina beach near Almograve (~2h) — long stairway down" },
          { type: "vibe",       label: "Camp at sunset",                confirmed: true,  note: "Heads-up: beach camping is fined here — legal backup: Milfontes / Zmar campsite" },
        ],
      },
      {
        date: "Wed Jun 17",
        location: "Coast",
        slots: [
          { type: "beach",      label: "Praia do Brejo Largo",          confirmed: false, note: "Remote wild beach near Zambujeira do Mar" },
          { type: "restaurant", label: "Lunch + supplies midpoint",     confirmed: false, note: "Zambujeira do Mar, Odeceixe or Aljezur — supermarkets + charm" },
          { type: "beach",      label: "Praia do Tonel, Sagres",        confirmed: false, note: "Furthest south — pair with Cabo de São Vicente, the 'end of the world'" },
          { type: "vibe",       label: "Camp at sunset",                confirmed: true,  note: "Legal backup: Orbitur Sagres / Camping Serrão (Aljezur)" },
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
          { type: "logistics",  label: "Drive back (~3h)",              confirmed: true },
          { type: "logistics",  label: "Drop rental car in Lisbon",     confirmed: true },
          { type: "restaurant", label: "Dinner at home or nearby",      confirmed: false },
        ],
      },
      {
        date: "Fri Jun 19",
        location: "Lisbon",
        slots: [
          { type: "vibe",       label: "Slow morning",                  confirmed: true },
          { type: "logistics",  label: "Head to Lisbon late afternoon", confirmed: true },
          { type: "activity",   label: "Explore Alfama + Graça/Mouraria", confirmed: false, note: "The areas the crew skipped Sat — miradouros, São Jorge castle" },
          { type: "logistics",  label: "Break at the Lisbon apartment", confirmed: true },
          { type: "restaurant", label: "Tasca dinner before the party", confirmed: false, note: "Options: Rodas, Solar dos Presuntos, Adega do Tagarro" },
          { type: "activity",   label: "Santos Populares",              confirmed: true,  note: "Grilled sardines + street arraiais. Peak was Santo António (Jun 12–13); the 19th is smaller but still on" },
          { type: "logistics",  label: "Sleep in Praia Grande",         confirmed: true },
        ],
      },
      {
        date: "Sat Jun 20",
        location: "Open",
        slots: [
          { type: "vibe",       label: "Open day — vibes",              confirmed: false, note: "People start leaving — keep it loose" },
          { type: "activity",   label: "Optional: Sintra day",          confirmed: false, note: "Pena Palace, Quinta da Regaleira — right next door for whoever stays" },
          { type: "restaurant", label: "Farewell dinner",               confirmed: false },
        ],
      },
      {
        date: "Sun Jun 21",
        location: "Departure",
        slots: [
          { type: "logistics",  label: "Last departures",               confirmed: true },
        ],
      },
    ],
  },
]
