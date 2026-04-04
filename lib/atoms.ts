import { atom } from 'jotai'
import type { Salon, Service, Style, Stylist } from './schemas'

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
