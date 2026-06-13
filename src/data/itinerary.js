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
//  A phase can also have an optional `routeUrl` -> renders a Google Maps button.
//
//  To add a plan: find the day and drop a new slot into its `slots` array.
// =============================================================================

export const phases = [
  {
    id: "praia-grande-base",
    name: "Praia Grande Base",
    emoji: "🏄",
    color: "blue",
    dates: "Sat Jun 13 – Sun Jun 14",
    days: [
      {
        date: "Sat Jun 13",
        location: "Praia Grande",
        slots: [
          { type: "logistics",  label: "Friends arrive → Praia Grande", confirmed: true,  note: "Straight to the house from the airport — Manuel arrives next morning" },
          { type: "beach",      label: "Beach day",                     confirmed: true },
          { type: "vibe",       label: "Pool / soccer at house",        confirmed: true },
          { type: "restaurant", label: "Bar do Fundo",                  confirmed: true },
        ],
      },
      {
        date: "Sun Jun 14",
        location: "Praia Grande",
        slots: [
          { type: "logistics",  label: "Manuel arrives (morning)",      confirmed: true },
          { type: "activity",   label: "Cliff hike → Praia da Adraga",  confirmed: true },
          { type: "beach",      label: "Beach / surf",                  confirmed: false },
          { type: "vibe",       label: "Pool / soccer at house",        confirmed: true },
          { type: "activity",   label: "Cliff hike → Cabo da Roca",     confirmed: false, note: "Westernmost point of mainland Europe — great sunset" },
          { type: "restaurant", label: "Buzio",                         confirmed: true },
        ],
      },
    ],
  },
  {
    id: "lisbon-day",
    name: "Lisbon Day",
    emoji: "🏛",
    color: "orange",
    dates: "Mon Jun 15",
    routeUrl: "https://www.google.com/maps/dir/Torre+de+Belém,+Lisboa/Mosteiro+dos+Jerónimos,+Lisboa/Zé+da+Mouraria,+Lisboa/Praça+do+Comércio,+Lisboa/Chiado,+Lisboa",
    days: [
      {
        date: "Mon Jun 15",
        location: "Lisbon",
        slots: [
          { type: "logistics",  label: "Head to Lisbon for the day",    confirmed: true },
          { type: "activity",   label: "Morning: Belém",                confirmed: false, note: "Torre de Belém, Mosteiro dos Jerónimos, Pastéis de Belém (the OG nata)" },
          { type: "restaurant", label: "Lunch: Zé da Mouraria",         confirmed: false, note: "Top chefs call it the best tasca in Lisbon — huge plates of bacalhau & octopus. By Chiado, cash only, go early to beat the queue" },
          { type: "activity",   label: "Afternoon: Baixa & Chiado",     confirmed: false, note: "Terreiro do Paço, Rua Augusta arch, Santa Justa lift, miradouro de Santa Catarina" },
          { type: "restaurant", label: "Dinner: Cervejaria Ramiro",     confirmed: true,  note: "The seafood feast — a must. Book 1–2 days ahead; early seating, then drive back" },
          { type: "logistics",  label: "Back to Praia Grande",          confirmed: true },
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
    routeUrl: "https://www.google.com/maps/dir/Praia+Grande,+Sintra/Cascais/Praia+do+Brejo+Largo/Praia+do+Tonel,+Sagres/Cascais/Praia+Grande,+Sintra",
    days: [
      {
        date: "Tue Jun 16",
        location: "Praia Grande → Coast",
        slots: [
          { type: "logistics",  label: "9:00 — Uber to Cascais, car by 10", confirmed: true,  note: "Cascais has 24 rental companies, no airport surcharge — round trip, book ~1 week ahead. Aim for a 7-seat SUV (good clearance) or 9-seat van + roof box; NO 4x4 needed, 2 named drivers, add the Via Verde toll device" },
          { type: "logistics",  label: "Decathlon Cascais (Alcabideche) — out by ~11:30", confirmed: true,  note: "~10–15 min from home, no Lisbon detour. Grab the Decathlon checklist items" },
          { type: "restaurant", label: "Quick lunch on the way",        confirmed: false, note: "Keep it grab-and-go to hold the schedule — a sit-down midway pushes the beach to ~4 (Alcácer do Sal / Grândola if you stop)" },
          { type: "logistics",  label: "~1:30 — Groceries + ice, Vila Nova de Milfontes", confirmed: true,  note: "Last proper supermarket before the beach (~15 min from Machados)" },
          { type: "beach",      label: "~2:30 — Afternoon at Praia dos Machados", confirmed: true,  note: "The goated one — dramatic cliffs + long staircase down (park up top, no sand driving). Small dirt clifftop lot; bring just beach stuff" },
          { type: "vibe",       label: "~6 — Over to Brejo Largo, set up camp", confirmed: true,  note: "A few min away via a narrow, bumpy dirt road (2WD-fine when dry, no sand driving) to a small dirt lot. Pitch before sunset (~9pm). Beach camping is fined — legal backup: Milfontes / Zmar campsite" },
        ],
      },
      {
        date: "Wed Jun 17",
        location: "Coast → Sagres",
        slots: [
          { type: "logistics",  label: "Pack up, drive south",          confirmed: true,  note: "Brejo Largo → Sagres is ~1.5h" },
          { type: "restaurant", label: "Lunch in Aljezur: Pont'a Pé",   confirmed: false, note: "Top authentic spot in Aljezur (seafood + steak). Grab supplies at the town supermarket — it's ~45 min from Sagres" },
          { type: "beach",      label: "Praia do Tonel, Sagres",        confirmed: false, note: "Furthest south — pair with Cabo de São Vicente, the 'end of the world'. Big paved car park, easy access" },
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
        location: "Sagres → Praia Grande",
        slots: [
          { type: "logistics",  label: "Drive back (~3h)",              confirmed: true,  note: "Take it easy — stop for a relaxed lunch on the way (Santiago do Cacém / Grândola)" },
          { type: "logistics",  label: "Drop car in Cascais",           confirmed: true,  note: "Same place you picked up — round trip, no one-way fee" },
          { type: "logistics",  label: "Uber home + shower",            confirmed: true,  note: "Everyone's tired by now — collapse at the house, no Lisbon plans" },
        ],
      },
      {
        date: "Fri Jun 19",
        location: "Lisbon",
        slots: [
          { type: "vibe",       label: "Slow morning",                  confirmed: true },
          { type: "logistics",  label: "Head to Lisbon around midday",  confirmed: true },
          { type: "restaurant", label: "Lunch: Adega do Tagarro",      confirmed: false, note: "Bairro Alto family tasca (your rec) — fried horse mackerel, bacalhau iscas, pataniscas. Bairro Alto's also lively for Santos Populares after" },
          { type: "activity",   label: "Explore Alfama + Graça/Mouraria", confirmed: false, note: "Areas you didn't catch on the Monday Lisbon day — miradouros, São Jorge castle" },
          { type: "logistics",  label: "Break at the Lisbon apartment", confirmed: true },
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
          { type: "restaurant", label: "Beachfront Portuguese restaurant", confirmed: false, note: "Manuel's pick right by the beach — need the name to confirm" },
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
