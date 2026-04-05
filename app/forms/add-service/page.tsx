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
import { FormTextarea } from '@/components/form-textarea'
import { serviceSchema, type Service } from '@/lib/schemas'
import { salonsAtom, servicesAtom } from '@/lib/atoms'
// import { mockSalons } from '@/lib/mock-data'
import { useRouter } from 'next/navigation'
import { durationOptions, services } from '@/lib/data'

export default function AddServicePage() {
  const router = useRouter()
  const [salons] = useAtom(salonsAtom)
  const [, setServices] = useAtom(servicesAtom)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { control, handleSubmit, reset, watch } = useForm<Service>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      salonId: '',
      serviceName: '',
      customServiceName: "",
      description: '',
      duration: '',
      price: '',
    },
  })

  const selectedSalonId = watch('salonId')

  const salonOptions = useMemo(() => {
    const availableSalons = salons.length > 0 ? salons : [];
    console.log(availableSalons)
    return availableSalons.map((salon) => ({
      value: salon.id || '',
      name: salon.name,
    }))
  }, [salons]);

  console.log(salonOptions)

  const onSubmit = async (data: Service) => {
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))

      const newService: Service = {
        ...data,
        id: crypto.randomUUID(),
      }

      setServices((prev) => [...prev, newService])
      toast.success('Service added successfully!')
      reset()
      router.push('/dashboard')
    } catch (error) {
      toast.error('Failed to add service')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Add New Service</CardTitle>
            <CardDescription>
              Create a new salon service with pricing and details
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormSelect
                  control={control}
                  name="serviceName"
                  label="Service Name"
                  options={services}
                  placeholder="Select a Service"
                  required
                />

                <FormInput
                  control={control}
                  name="customServiceName"
                  label="Custom Service Name"
                  placeholder="e.g., Hair Cut & Styling"
                />
              </div>

              <FormTextarea
                control={control}
                name="description"
                label="Description"
                placeholder="Describe the service..."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormSelect
                  control={control}
                  name="duration"
                  label="Duration"
                  options={durationOptions}
                  placeholder="Select duration"
                  required
                />

                <FormInput
                  control={control}
                  name="price"
                  label="Price start's at"
                  type="text"
                  placeholder="₹50"
                  required
                />
              </div>

              <div className="flex gap-3 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard')}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting || !selectedSalonId}>
                  {isSubmitting ? 'Adding...' : 'Add Service'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
