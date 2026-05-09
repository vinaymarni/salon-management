import { atom } from 'jotai'
import type { Salon, Service, Style, Stylist } from './schemas'

export type UserRole = 'customer' | 'admin' | 'stylist';

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: UserRole;
//   bookings: Booking[];
  createdAt: string;
}

// Salon atoms
export const salonsAtom = atom<Salon[]>([])
export const selectedSalonIdAtom = atom<string>('')

// Service atoms
export const servicesAtom = atom<Service[]>([])
export const selectedServiceIdAtom = atom<string>('')

// Style atoms
export const stylesAtom = atom<Style[]>([])

// Stylist atoms
export const stylistsAtom = atom<Stylist[]>([])

// UI state atoms
export const loadingAtom = atom<boolean>(false)
export const isImagePreviewAtom = atom<string>('')

export const currentUserAtom = atom<User | null>(null);
export const isAuthenticatedAtom = atom(false);

