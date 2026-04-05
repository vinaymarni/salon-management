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

export interface Salon {
  id: string;
  value: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  openHours: { open: string; close: string };
  services: string[]; // Service IDs
}

export type ServiceType = 'Haircut' | 'Coloring' | 'Styling' | 'Massage' | 'Facial' | 'Waxing';
export type Gender = 'Male' | 'Female' | 'Unisex';

export interface Service {
  id: string;
  value: string;
  name: ServiceType;
  description: string;
  duration: number; // in minutes
  basePrice: number;
  availableGenders: Gender[];
  image: string;
}

export interface Style {
  id: string;
  value: string;
  name: string;
  description: string;
  image: string;
  serviceId: string;
  price: number;
  availableGenders: Gender[];
  rating: number;
  reviews: number;
}

export const services: Service[] = [
  {
    id: 's1',
    value: 's1',
    name: 'Haircut',
    description: 'Professional haircut tailored to your style',
    duration: 30,
    basePrice: 300,
    availableGenders: ['Male', 'Female', 'Unisex'],
    image: "/style-classic-fade.jpg"
  },
  {
    id: 's2',
    value: 's2',
    name: 'Coloring',
    description: 'Expert hair coloring and dyeing services',
    duration: 90,
    basePrice: 250,
    availableGenders: ['Female', 'Unisex'],
    image: "/style-blonde.png"
  },
  {
    id: 's3',
    value: 's3',
    name: 'Styling',
    description: 'Professional styling for special occasions',
    duration: 60,
    basePrice: 350,
    availableGenders: ['Female', 'Unisex'],
    image: "/style-waves.jpg"
  },
  {
    id: 's4',
    value: 's4',
    name: 'Massage',
    description: 'Relaxing massage therapy',
    duration: 60,
    basePrice: 350,
    availableGenders: ['Male', 'Female', 'Unisex'],
    image: "/chair-massage-ladies.jpg"
  },
  {
    id: 's5',
    value: 's5',
    name: 'Facial',
    description: 'Rejuvenating facial treatments',
    duration: 45,
    basePrice: 300,
    availableGenders: ['Female', 'Unisex'],
    image: "/classic-facial.jpeg"
  },
  {
    id: 's6',
    value: 's6',
    name: 'Waxing',
    description: 'Professional waxing services',
    duration: 30,
    basePrice: 250,
    availableGenders: ['Female', 'Unisex'],
    image: "/soft-wax.jpeg"
  },
];

export const salons: Salon[] = [
  {
    id: 'sal1',
    value: 'sal1',
    name: 'Luxe Salon & Spa',
    location: '123 Main Street, Downtown',
    image: '/salon-luxe.jpg',
    rating: 4.8,
    reviews: 245,
    openHours: { open: '09:00', close: '20:00' },
    services: ['s1', 's2', 's3', 's4', 's5', 's6'],
  },
  {
    id: 'sal2',
    value: 'sal2',
    name: 'Elite Barber Club',
    location: '456 Oak Avenue, Midtown',
    image: '/salon-elite.jpg',
    rating: 4.7,
    reviews: 189,
    openHours: { open: '10:00', close: '19:00' },
    services: ['s1', 's4'],
  },
  {
    id: 'sal3',
    value: 'sal3',
    name: 'Prestige Beauty Studio',
    location: '789 Park Road, Uptown',
    image: '/salon-prestige.jpg',
    rating: 4.9,
    reviews: 312,
    openHours: { open: '09:30', close: '20:30' },
    services: ['s1', 's2', 's3', 's5', 's6'],
  },
  {
    id: 'sal4',
    value: 'sal4',
    name: 'Refined Hair Design',
    location: '321 River Lane, North Side',
    image: '/salon-refined.jpg',
    rating: 4.6,
    reviews: 156,
    openHours: { open: '10:00', close: '18:00' },
    services: ['s1', 's2', 's3'],
  },
];

export const styles: Style[] = [
  {
    id: 'st1',
    value: 'st1',
    name: 'Classic Fade',
    description: 'Timeless fade with clean lines',
    image: '/style-classic-fade.jpg',
    serviceId: 's1',
    price: 450,
    availableGenders: ['Male', 'Unisex'],
    rating: 4.8,
    reviews: 245,
  },
  {
    id: 'st2',
    value: 'st2',
    name: 'Textured Top',
    description: 'Modern textured cut with volume',
    image: '/style-textured.jpg',
    serviceId: 's1',
    price: 500,
    availableGenders: ['Male', 'Unisex'],
    rating: 4.7,
    reviews: 205,
  },
  {
    id: 'st3',
    value: 'st3',
    name: 'Luxury Bob',
    description: 'Elegant bob cut for sophistication',
    image: '/style-bob.jpg',
    serviceId: 's1',
    price: 550,
    availableGenders: ['Female', 'Unisex'],
    rating: 4.0,
    reviews: 145,
  },
  {
    id: 'st4',
    value: 'st4',
    name: 'Balayage',
    description: 'Sun-kissed natural looking highlights',
    image: '/style-balayage.jpg',
    serviceId: 's2',
    price: 320,
    availableGenders: ['Female', 'Unisex'],
    rating: 4.1,
    reviews: 145,
  },
  {
    id: 'st5',
    value: 'st5',
    name: 'Blonde Highlights',
    description: 'Radiant blonde highlights',
    image: '/style-blonde.png',
    serviceId: 's2',
    price: 200,
    availableGenders: ['Female', 'Unisex'],
    rating: 3.9,
    reviews: 25,
  },
  {
    id: 'st6',
    value: 'st6',
    name: 'Bridal Styling',
    description: 'Elegant styling for your special day',
    image: '/style-bridal.png',
    serviceId: 's3',
    price: 850,
    availableGenders: ['Female', 'Unisex'],
    rating: 4.7,
    reviews: 247,
  },
  {
    id: 'st7',
    value: 'st7',
    name: 'Evening Waves',
    description: 'Glamorous wavy styling for events',
    image: '/style-waves.jpg',
    serviceId: 's3',
    price: 550,
    availableGenders: ['Female', 'Unisex'],
    rating: 4.2,
    reviews: 285,
  },
  {
    id: 'st8',
    value: 'st8',
    name: 'Chair Massage',
    description: 'chair-massage-gents',
    image: '/chair-massage-gents.webp',
    serviceId: 's4',
    price: 150,
    availableGenders: ['Male'],
    rating: 4.8,
    reviews: 225,
  },
    {
    id: 'st9',
    value: 'st9',
    name: 'Chair Massage',
    description: 'chair massage ladies',
    image: '/chair-massage-ladies.jpg',
    serviceId: 's4',
    price: 210,
    availableGenders: ['Female'],
    rating: 4.4,
    reviews: 225,
  },
     {
    id: 'st10',
    value: 'st10',
    name: 'Reflexology Massage',
    description: 'reflexology massage',
    image: '/reflexology-massage.jpeg',
    serviceId: 's4',
    price: 140,
    availableGenders: ['Male', 'Female', 'Unisex'],
    rating: 4.9,
    reviews: 125,
  },
     {
    id: 'st11',
    value: 'st11',
    name: 'Massage',
    description: 'massage',
    image: '/massage.webp',
    serviceId: 's4',
    price: 150,
    availableGenders: ['Male', 'Female', 'Unisex'],
    rating: 4.3,
    reviews: 110,
  },
  {
    id: 'st12',
    value: 'st12',
    name: 'coloring men hair',
    description: 'coloring men hair',
    image: '/coloring-men-hair.png',
    serviceId: 's2',
    price: 150,
    availableGenders: [ 'Male'],
    rating: 4.3,
    reviews: 110,
  },
   {
    id: 'st13',
    value: 'st13',
    name: 'coloring-hair',
    description: 'coloring-hair',
    image: '/coloring-hair.jpg',
    serviceId: 's2',
    price: 250,
    availableGenders: ['Female', 'Unisex'],
    rating: 4.1,
    reviews: 380,
  },
  {
    id: 'st14',
    value: 'st14',
    name: 'soft-wax',
    description: 'soft-wax',
    image: '/soft-wax.jpeg',
    serviceId: 's6',
    price: 150,
    availableGenders: ['Male', 'Female', 'Unisex'],
    rating: 3.9,
    reviews: 180,
  },
    {
    id: 'st15',
    value: 'st15',
    name: 'hard-wax',
    description: 'hard-wax',
    image: '/hard-wax.webp',
    serviceId: 's6',
    price: 150,
    availableGenders: ['Female', 'Unisex'],
    rating: 3.8,
    reviews: 180,
  },
 {
    id: 'st16',
    value: 'st16',
    name: 'Classic Facial',
    description: 'Classic facial',
    image: '/classic-facial.jpeg',
    serviceId: 's5',
    price: 150,
    availableGenders: ['Male', 'Female', 'Unisex'],
    rating: 3.6,
    reviews: 180,
  },
   {
    id: 'st17',
    value: 'st17',
    name: 'Hydrating Facial',
    description: 'Hydrating facial',
    image: '/hydrating-facial.jpeg',
    serviceId: 's5',
    price: 180,
    availableGenders: ['Male', 'Female', 'Unisex'],
    rating: 4.6,
    reviews: 200,
  },
  {
    id: 'st18',
    value: 'st18',
    name: 'Anti Aging Facial',
    description: 'Anti aging facial',
    image: '/anti-aging-facial.jpeg',
    serviceId: 's5',
    price: 180,
    availableGenders: ['Male', 'Female', 'Unisex'],
    rating: 4.6,
    reviews: 200,
  },
   {
        id: 'st19',
        value: 'st19',
        name: 'Wolf Cut',
        description: 'Elegant bob cut for sophistication',
        image: '/service-1.jpg',
        serviceId: 's1',
        price: 650,
        availableGenders: ['Unisex'],
        rating: 4.0,
        reviews: 145,
      },
];

export const getName = (name: string, list: any) => {
  const obj = list.filter((each: any)=> each.value == name) ?? [];
  return obj[0] ? obj[0].name : ""
}

