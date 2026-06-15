// =============================================================================
//  CAMPING CHECKLIST
// -----------------------------------------------------------------------------
//  Shared packing list for the coastal road trip (Tue–Thu).
//  Each item: { label, got }  ->  got: true = sorted (✅), false = still needed.
//  Groups split by where we get it: home / Decathlon / supermarket (all Tue).
//  Add an item by dropping a new { label, got } into the relevant group.
// =============================================================================

export const packing = {
  title: "Camping Checklist",
  note: "For the Tue–Thu coast trip. ✅ = sorted. Three stops Tuesday: pack from home, gear run at Decathlon, food run at the supermarket.",
  groups: [
    {
      name: "From home",
      emoji: "🏠",
      items: [
        { label: "Cooler", got: true },
        { label: "Chairs", got: true },
        { label: "Sun parasols (bring +1)", got: true },
        { label: "Camping stove", got: true },
        { label: "Soccer ball", got: true },
        { label: "Pots & pans", got: true },
        { label: "Corkscrew", got: true },
        { label: "Speaker", got: true },
        { label: "Lighter", got: true },
        { label: "Toilet paper & napkins", got: true },
        { label: "Shampoo & shower gel", got: true },
        { label: "Big blue Lidl plastic bags", got: true },
        { label: "Cooking supplies (board, knife, cutlery, can opener)", got: false },
        { label: "Blankets", got: false },
        { label: "Pillows", got: false },
        { label: "Playing cards", got: false },
        { label: "Toiletries", got: false },
        { label: "Salt, butter, olive oil", got: false },
      ],
    },
    {
      name: "From Decathlon (Tue)",
      emoji: "🛒",
      items: [
        { label: "Tents — 2 large (sleeps 4 each)", got: false },
        { label: "Sleeping bags", got: false },
        { label: "Sleeping mats", got: false },
        { label: "Table", got: false },
        { label: "Lanterns / flashlights", got: false },
        { label: "Gas cartridges", got: false },
        { label: "Beach rackets", got: false },
        { label: "Pocket knives", got: false },
      ],
    },
    {
      name: "From supermarket (Tue)",
      emoji: "🧺",
      items: [
        { label: "Water jugs", got: false },
        { label: "Ice (for the cooler)", got: false },
        { label: "Sandwich supplies (bread, fillings)", got: false },
        { label: "Food & drinks for 2 days", got: false },
        { label: "Paper plates + plastic utensils", got: false },
        { label: "Firelighters", got: false },
        { label: "Matches", got: false },
      ],
    },
  ],
}
