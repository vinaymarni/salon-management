import { User } from "./atoms";

export const mockUsers: User[] = [
  {
    id: 'u1',
    email: 'customer@example.com',
    name: 'John Doe',
    phone: '+1-555-0123',
    role: 'customer',
    // bookings: [],
    createdAt: '2025-01-01',
  },
  {
    id: 'u2',
    email: 'admin@example.com',
    name: 'Admin User',
    phone: '+1-555-0124',
    role: 'admin',
    // bookings: [],
    createdAt: '2025-01-01',
  },
];