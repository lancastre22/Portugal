// =============================================================================
//  CAMPING CHECKLIST
// -----------------------------------------------------------------------------
//  Shared packing list for the coastal road trip (Tue–Thu).
//  Each item: { label, got }  ->  got: true = sorted (✅), false = still needed.
//  Groups split by where we get it: from home vs Decathlon on the way Tuesday.
//  Add an item by dropping a new { label, got } into the relevant group.
// =============================================================================

export const packing = {
  title: "Camping Checklist",
  note: "For the Tue–Thu coast trip. ✅ = sorted. Bring what we can from home, grab the rest at Decathlon on the way Tuesday.",
  groups: [
    {
      name: "From home",
      emoji: "🏠",
      items: [
        { label: "Cooler", got: true },
        { label: "Chairs", got: true },
        { label: "Sun parasols (bring +1)", got: true },
        { label: "Camping stove", got: true },
        { label: "Ball", got: true },
        { label: "Toilet paper & napkins", got: true },
        { label: "Shampoo & shower gel", got: true },
        { label: "Big blue Lidl plastic bags", got: true },
        { label: "Pot", got: true },
        { label: "Frying pan", got: true },
        { label: "Corkscrew", got: true },
        { label: "Speaker", got: true },
        { label: "Lighter", got: true },
        { label: "Toiletries", got: false },
        { label: "Salt, butter, olive oil", got: false },
        { label: "Blankets", got: false },
        { label: "Playing cards", got: false },
        { label: "Kitchen kit (plates, cutlery, board?)", got: false },
      ],
    },
    {
      name: "From Decathlon (Tue)",
      emoji: "🛒",
      items: [
        { label: "Table", got: false },
        { label: "Lanterns / flashlights", got: false },
        { label: "Gas cartridges", got: false },
        { label: "Beach rackets", got: false },
        { label: "Pocket knives", got: false },
        { label: "Firelighters", got: false },
        { label: "Matches", got: false },
      ],
    },
  ],
}
