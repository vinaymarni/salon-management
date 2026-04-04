export const durationOptions = [
    { id: "0", value: '15 min', name: '15 minutes' },
    { id: "1", value: '30 min', name: '30 minutes' },
    { id: "2", value: '45 min', name: '45 minutes' },
    { id: "3", value: '60 min', name: '1 hour' },
    { id: "4", value: '90 min', name: '1.5 hours' },
    { id: "5", value: '120 min', name: '2 hours' },
];

export const states = [
  {
    id: "AP",
    name: "Andhra Pradesh",
    value: "AP"
  },
  {
    id: "TS",
    name: "Telangana",
    value: "TS"
  },
  {
    id: "KA",
    name: "Karnataka",
    value: "KA"
  }
];

export const cities = [
  // Andhra Pradesh
  { id: "AP-VJA", stateId: "AP", name: "Vijayawada", value: "VJA" },
  { id: "AP-VSP", stateId: "AP", name: "Visakhapatnam", value: "VSP" },
  { id: "AP-GNT", stateId: "AP", name: "Guntur", value: "GNT" },

  // Telangana
  { id: "TS-HYD", stateId: "TS", name: "Hyderabad", value: "HYD" },
  { id: "TS-WGL", stateId: "TS", name: "Warangal", value: "WGL" },
  { id: "TS-KHM", stateId: "TS", name: "Khammam", value: "KHM" },

  // Karnataka (Bangalore state mention you said)
  { id: "KA-BLR", stateId: "KA", name: "Bangalore", value: "BLR" },
  { id: "KA-MYS", stateId: "KA", name: "Mysore", value: "MYS" }
];

export const localities = [
  // Hyderabad
  { id: "HYD-GCH", cityId: "TS-HYD", name: "Gachibowli", value: "GCH" },
  { id: "HYD-MDH", cityId: "TS-HYD", name: "Madhapur", value: "MDH" },
  { id: "HYD-KPHB", cityId: "TS-HYD", name: "KPHB", value: "KPHB" },

  // Bangalore
  { id: "BLR-WHT", cityId: "KA-BLR", name: "Whitefield", value: "WHT" },
  { id: "BLR-IND", cityId: "KA-BLR", name: "Indiranagar", value: "IND" },
  { id: "BLR-HSR", cityId: "KA-BLR", name: "HSR Layout", value: "HSR" },

  // Vijayawada
  { id: "VJA-BZA", cityId: "AP-VJA", name: "Benz Circle", value: "BZA" },
  { id: "VJA-PNGR", cityId: "AP-VJA", name: "Patamata", value: "PNGR" },

  // Visakhapatnam
  { id: "VSP-MVP", cityId: "AP-VSP", name: "MVP Colony", value: "MVP" },
  { id: "VSP-DWRK", cityId: "AP-VSP", name: "Dwaraka Nagar", value: "DWRK" }
];