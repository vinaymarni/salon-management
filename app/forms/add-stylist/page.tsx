'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAtom } from 'jotai'
import { useMemo, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FormInput } from '@/components/form-input'
import { FormSelect } from '@/components/form-select'
import { FormMultiSelect } from '@/components/form-multi-select'
import { FormFileUpload } from '@/components/form-file-upload'
import { stylistSchema, type Stylist } from '@/lib/schemas'
import { salonsAtom, stylistsAtom } from '@/lib/atoms'
// import { mockSalons } from '@/lib/mock-data'
import { useRouter } from 'next/navigation'

export default function AddStylistPage() {
  const router = useRouter()
  const [salons] = useAtom(salonsAtom)
  const [, setStylistsData] = useAtom(stylistsAtom)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { control, handleSubmit, reset, watch } = useForm<Stylist>({
    resolver: zodResolver(stylistSchema),
    defaultValues: {
      salonId: '',
      name: '',
      email: '',
      phone: '',
      specialties: [],
      photo: '',
      availability: {},
    },
  })

  const selectedSalonId = watch('salonId')

  const salonOptions = useMemo(() => {
    const availableSalons = salons.length > 0 ? salons : []
    return availableSalons.map((salon) => ({
      value: salon.id || '',
      label: salon.name,
    }))
  }, [salons])

  const specialtyOptions = [
    { value: 'Hair Cutting', label: 'Hair Cutting' },
    { value: 'Coloring', label: 'Hair Coloring' },
    { value: 'Styling', label: 'Styling' },
    { value: 'Perms', label: 'Perms & Treatments' },
    { value: 'Makeup', label: 'Makeup' },
    { value: 'Facial', label: 'Facial Treatments' },
    { value: 'Beard Grooming', label: 'Beard Grooming' },
    { value: 'Extensions', label: 'Hair Extensions' },
  ]

  const onSubmit = async (data: Stylist) => {
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))

      const newStylist: Stylist = {
        ...data,
        id: crypto.randomUUID(),
      }

      setStylistsData((prev) => [...prev, newStylist])
      toast.success('Stylist added successfully!')
      reset()
      router.push('/dashboard')
    } catch (error) {
      toast.error('Failed to add stylist')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Add New Stylist</CardTitle>
            <CardDescription>
              Add a stylist profile with contact information and specialties
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormSelect
                control={control}
                name="salonId"
                label="Salon"
                options={salonOptions}
                placeholder="Select a salon"
                required
              />

              <FormInput
                control={control}
                name="name"
                label="Stylist Name"
                placeholder="Enter stylist name"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  control={control}
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />

                <FormInput
                  control={control}
                  name="phone"
                  label="Phone"
                  type="tel"
                  placeholder="555-0100"
                  required
                />
              </div>

              <FormMultiSelect
                control={control}
                name="specialties"
                label="Specialties"
                options={specialtyOptions}
                placeholder="Select specialties"
                required
              />

              <FormFileUpload
                control={control}
                name="photo"
                label="Stylist Photo"
                description="Upload a professional photo (max 5MB)"
              />

              <div className="flex gap-3 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard')}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting || !selectedSalonId}>
                  {isSubmitting ? 'Adding...' : 'Add Stylist'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
