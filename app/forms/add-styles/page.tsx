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
import { FormFileUpload } from '@/components/form-file-upload'
import { styleSchema, type Style } from '@/lib/schemas'
import { servicesAtom, stylesAtom } from '@/lib/atoms'
// import { mockServices } from '@/lib/mock-data'
import { useRouter } from 'next/navigation'
import { durationOptions, getName, services, styles } from '@/lib/data'

export default function AddStylesPage() {
  const router = useRouter()
  const [servicesData] = useAtom(servicesAtom)
  const [, setStyles] = useAtom(stylesAtom)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { control, handleSubmit, reset, watch } = useForm<Style>({
    resolver: zodResolver(styleSchema),
    defaultValues: {
      serviceId: '',
      styleName: '',
      customStyleName: '',
      description: '',
      image: '',
      complexity: 'basic',
    },
  })

  const selectedServiceId = watch('serviceId')

  const serviceOptions = useMemo(() => {
    const availableServices = servicesData.length > 0 ? servicesData : [];
    return availableServices.map((service) => ({
      value: service.serviceName || '',
      name: getName(service.serviceName, services), 
    }))
  }, [servicesData]);

  const complexityOptions = [
    { value: 'basic', name: 'Basic' },
    { value: 'intermediate', name: 'Intermediate' },
    { value: 'advanced', name: 'Advanced' },
  ]

  const onSubmit = async (data: Style) => {
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))

      const newStyle: Style = {
        ...data,
        id: crypto.randomUUID(),
      }

      setStyles((prev) => [...prev, newStyle])
      toast.success('Style added successfully!')
      reset()
      router.push('/dashboard')
    } catch (error) {
      toast.error('Failed to add style')
    } finally {
      setIsSubmitting(false)
    }
  };

  const availableStyle = selectedServiceId ? 
  styles.filter((eachStyle)=> eachStyle.serviceId == selectedServiceId)
  : []

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Add New Style</CardTitle>
            <CardDescription>
              Create a new hairstyle for a service with image and details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormSelect
                control={control}
                name="serviceId"
                label="Service"
                options={serviceOptions}
                placeholder="Select a service"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormSelect
                  control={control}
                  name="styleName"
                  label="Style Name"
                  options={availableStyle}
                  placeholder="Select a Service"
                  required
                />

                <FormInput
                  control={control}
                  name="customStyleName"
                  label="Custom Style Name"
                  placeholder="e.g., Classic Bob"
                />
              </div>

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
                  label="Price"
                  type="text"
                  placeholder="₹50"
                  required
                />
              </div>

              <FormTextarea
                control={control}
                name="description"
                label="Description"
                placeholder="Describe this hairstyle..."
              />

              <FormSelect
                control={control}
                name="complexity"
                label="Complexity Level"
                options={complexityOptions}
                placeholder="Select complexity"
                required
              />

              <FormFileUpload
                control={control}
                name="image"
                label="Style Image"
                description="Upload a reference image of this hairstyle (max 5MB)"
              />

              <div className="flex gap-3 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard')}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting || !selectedServiceId}>
                  {isSubmitting ? 'Adding...' : 'Add Style'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
