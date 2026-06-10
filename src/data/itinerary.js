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
    routeUrl: "https://www.google.com/maps/dir/Torre+de+Belém,+Lisboa/Mosteiro+dos+Jerónimos,+Lisboa/Zé+da+Mouraria,+Lisboa/Praça+do+Comércio,+Lisboa/Chiado,+Lisboa",
    days: [
      {
        date: "Sat Jun 13",
        location: "Lisbon",
        slots: [
          { type: "activity",   label: "Morning: Belém",                confirmed: false, note: "Torre de Belém, Mosteiro dos Jerónimos, Pastéis de Belém (the OG nata)" },
          { type: "restaurant", label: "Lunch: Zé da Mouraria",         confirmed: false, note: "Top chefs call it the best tasca in Lisbon — huge plates of bacalhau & octopus. By Chiado, cash only, go early to beat the queue" },
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
    routeUrl: "https://www.google.com/maps/dir/Praia+Grande,+Sintra/Lisboa/Praia+do+Brejo+Largo/Praia+do+Tonel,+Sagres/Lisboa/Praia+Grande,+Sintra",
    days: [
      {
        date: "Tue Jun 16",
        location: "Lisbon → Coast",
        slots: [
          { type: "logistics",  label: "Pick up rental car (10am)",     confirmed: true },
          { type: "restaurant", label: "Lunch: Cervejaria Ramiro",      confirmed: true,  note: "Book 1–2 days ahead; go early to beat the queue" },
          { type: "logistics",  label: "Get supplies at supermarket",   confirmed: true,  note: "Stock up before heading south — leave Lisbon ~12–1" },
          { type: "beach",      label: "Praia do Brejo Largo",          confirmed: false, note: "Wild beach near Almograve (~2–2.5h). Real car park + worn path = easier for hauling gear. Hard to find: aim for Longueira village, then the dirt road" },
          { type: "vibe",       label: "Camp at sunset",                confirmed: true,  note: "Heads-up: beach camping is fined here — legal backup: Milfontes / Zmar campsite" },
        ],
      },
      {
        date: "Wed Jun 17",
        location: "Coast → Sagres",
        slots: [
          { type: "logistics",  label: "Pack up, drive south",          confirmed: true,  note: "Brejo Largo → Sagres is ~1.5h" },
          { type: "restaurant", label: "Lunch in Aljezur: Pont'a Pé",   confirmed: false, note: "Top authentic spot in Aljezur (seafood + steak). Grab supplies at the town supermarket — it's ~45 min from Sagres" },
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
        location: "Sagres → Lisbon → Praia Grande",
        slots: [
          { type: "logistics",  label: "Drive back (~3h)",              confirmed: true },
          { type: "logistics",  label: "Drop rental car in Lisbon",     confirmed: true },
          { type: "restaurant", label: "Dinner in Lisbon: Cortesia",    confirmed: false, note: "Your pick — easy to hit right after dropping the car, before heading back to Praia Grande" },
        ],
      },
      {
        date: "Fri Jun 19",
        location: "Lisbon",
        slots: [
          { type: "vibe",       label: "Slow morning",                  confirmed: true },
          { type: "logistics",  label: "Head to Lisbon around midday",  confirmed: true },
          { type: "restaurant", label: "Lunch: Adega do Tagarro",      confirmed: false, note: "Bairro Alto family tasca (your rec) — fried horse mackerel, bacalhau iscas, pataniscas. Bairro Alto's also lively for Santos Populares after" },
          { type: "activity",   label: "Explore Alfama + Graça/Mouraria", confirmed: false, note: "The areas the crew skipped Sat — miradouros, São Jorge castle" },
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
