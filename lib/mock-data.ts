import type { Salon, Service, Style, Stylist } from './schemas'

export const mockSalons: Salon[] = [
  {
    name: 'Elegant Salon & Spa',
    location: 'Downtown',
    phone: '555-0100',
    email: 'info@elegant.com',
    description: 'Premium salon offering hair, makeup, and spa services',
    logo: '/salon-1.jpg',
  },
  {
    name: 'Modern Cuts',
    location: 'Midtown',
    phone: '555-0101',
    email: 'info@moderncuts.com',
    description: 'Contemporary hair salon with cutting-edge techniques',
  },
  {
    name: 'Beauty & Wellness',
    location: 'Uptown',
    phone: '555-0102',
    email: 'info@beautywell.com',
    description: 'Full-service beauty and wellness center',
  },
]

export const mockServices: Service[] = [
  {
    salonId: '1',
    name: 'Hair Cut & Styling',
    description: 'Professional hair cutting and styling services',
    duration: '45 min',
    price: '₹50',
  },
  {
    salonId: '1',
    name: 'Hair Coloring',
    description: 'Expert hair coloring and highlights',
    duration: '120 min',
    price: '₹150',
  },
  {
    salonId: '1',
    name: 'Facial Treatment',
    description: 'Rejuvenating facial treatments',
    duration: '60 min',
    price: '₹85',
  },
  {
    salonId: '2',
    name: 'Beard Trim',
    description: 'Professional beard trimming and shaping',
    duration: '30 min',
    price: '₹45',
  },
  {
    salonId: '2',
    name: 'Men\'s Styling',
    description: 'Modern men\'s haircut and style',
    duration: '40 min',
    price: '₹55',
  },
];

export const mockStyles: Style[] = [
  {
    serviceId: '1',
    name: 'Classic Bob',
    description: 'Timeless bob cut',
    complexity: 'basic',
    image: '/style-1.jpg',
  },
  {
    serviceId: '1',
    name: 'Layered Cut',
    description: 'Modern layered hairstyle',
    complexity: 'intermediate',
    image: '/style-2.jpg',
  },
  {
    serviceId: '1',
    name: 'Pixie Cut',
    description: 'Short and chic pixie',
    complexity: 'basic',
    image: '/style-3.jpg',
  },
  {
    serviceId: '2',
    name: 'Balayage Highlights',
    description: 'Hand-painted highlights',
    complexity: 'advanced',
    image: '/style-4.jpg',
  },
  {
    serviceId: '2',
    name: 'Full Color',
    description: 'Complete hair coloring',
    complexity: 'intermediate',
    image: '/style-5.jpg',
  },
]

export const mockStylists: Stylist[] = [
  {
    salonId: '1',
    name: 'Sarah Johnson',
    email: 'sarah@elegant.com',
    phone: '555-1001',
    specialties: ['Hair Cutting', 'Coloring', 'Styling'],
    photo: '/stylist-1.jpg',
  },
  {
    salonId: '1',
    name: 'Emily Chen',
    email: 'emily@elegant.com',
    phone: '555-1002',
    specialties: ['Facial', 'Makeup', 'Skincare'],
    photo: '/stylist-2.jpg',
  },
  {
    salonId: '2',
    name: 'Michael Torres',
    email: 'michael@moderncuts.com',
    phone: '555-1003',
    specialties: ['Men\'s Cuts', 'Beard Grooming', 'Styling'],
    photo: '/stylist-3.jpg',
  },
]
