import { z } from 'zod'

export const salonSchema = z.object({
  name: z.string().min(2, 'Salon name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  description: z.string().optional(),
  logo: z.string().optional(),
  state: z.string().min(2, 'State is required'),
  city: z.string().min(2, 'City is required'),
  locality: z.string().min(2, 'Locality is required'),
  pincode: z.string().max(6, 'Pincode is required'),
  ownerName: z.string().min(2, 'Owner name is required'),
})

export type Salon = z.infer<typeof salonSchema> & { id?: string }

export const serviceSchema = z.object({
  salonId: z.string().min(1, 'Salon is required'),
  name: z.string().min(2, 'Service name is required'),
  description: z.string().optional(),
  duration: z.string().min(1, 'Duration is required'),
  price: z.string().min(1, 'Price is required'),
})

export type Service = z.infer<typeof serviceSchema> & { id?: string }

export const styleSchema = z.object({
  serviceId: z.string().min(1, 'Service is required'),
  name: z.string().min(2, 'Style name is required'),
  description: z.string().optional(),
  image: z.string().optional(),
  complexity: z.enum(['basic', 'intermediate', 'advanced']),
  duration: z.string().min(1, 'Duration is required'),
  price: z.string().min(1, 'Price is required'),
})

export type Style = z.infer<typeof styleSchema> & { id?: string }

export const stylistSchema = z.object({
  salonId: z.string().min(1, 'Salon is required'),
  name: z.string().min(2, 'Stylist name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  specialties: z.array(z.string()).min(1, 'At least one specialty is required'),
  availability: z.record(z.array(z.string())).optional(),
  photo: z.string().optional(),
})

export type Stylist = z.infer<typeof stylistSchema> & { id?: string }
