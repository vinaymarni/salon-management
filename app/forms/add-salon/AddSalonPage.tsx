'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FormInput } from '@/components/form-input'
import { FormTextarea } from '@/components/form-textarea'
import { FormFileUpload } from '@/components/form-file-upload'
import { salonSchema, type Salon } from '@/lib/schemas'
import { salonsAtom } from '@/lib/atoms'
import { useRouter } from 'next/navigation'
import { FormSelect } from '@/components/form-select'
import { cities, gender, localities, states } from '@/lib/data'

export default function AddSalonPage({id}:any) {
  const [salons, setSalons] = useAtom(salonsAtom)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

//   const searchParams = useSearchParams();
//   const id = searchParams.get('salonId');

  const { control, handleSubmit, reset, watch, setValue } = useForm<Salon>({
    resolver: zodResolver(salonSchema),
    defaultValues: {
      name: '',
      state: "",
      city: "",
      locality: '',
      phone: '',
      email: '',
      description: '',
      logo: '',
      pincode: "",
      ownerName: "",
      address: "",
      availableFor:""
    },
  });

  useEffect(()=>{
    if(!id) return;
    const values = salons.filter((each)=>each.id === id);
    if(values && values[0]){
      console.log(values[0])
      reset({...values[0]})
    }
  }, [id]);

  const onSubmit = async (data: Salon) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      const newSalon: Salon = {
        ...data,
        id: crypto.randomUUID(),
      }

      setSalons((prev) => [...prev, newSalon])
      toast.success('Salon added successfully!')
      reset()
      router.push('/dashboard')
    } catch (error) {
      toast.error('Failed to add salon')
    } finally {
      setIsSubmitting(false)
    }
  }

  const {state, city} = watch();

  useEffect(()=>{
    setValue("city", "");
    setValue("locality", "");
  }, [state]);

  useEffect(()=>{
    setValue("locality", "");
  }, [city]);

  const selectedCities = cities.filter((eachCity:any)=> eachCity.stateId === state) ?? [];
  const selectedLocalities = localities.filter((eachLoc:any)=> eachLoc.cityId === `${state}-${city}`) ?? [];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <Card> 
          <CardHeader>
            <CardTitle>Add New Salon</CardTitle>
            <CardDescription>
              Create a new salon profile with basic information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormInput
                control={control}
                name="name"
                label="Salon Name"
                placeholder="Enter salon name"
                required
              />

              {/* <InputField /> */}

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <FormInput
                  control={control}
                  name="ownerName"
                  label="Owner Name"
                  placeholder="Enter Owner Name"
                  required
                />

                <FormSelect
                  control={control}
                  name="availableFor"
                  label="Available For"
                  options={gender}
                  placeholder="Select Available For"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormSelect
                  control={control}
                  name="state"
                  label="State"
                  options={states}
                  placeholder="Select State"
                  required
                />

                <FormSelect
                  control={control}
                  name="city"
                  label="City"
                  options={selectedCities}
                  placeholder="Select City"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormSelect
                  control={control}
                  name="locality"
                  label="Locality"
                  options={selectedLocalities}
                  placeholder="Select Locality"
                  required
                />
                <FormInput
                  control={control}
                  name="pincode"
                  label="Pincode"
                  type="number"
                  placeholder="Enter Pincode"
                  required
                />
              </div>

              <FormTextarea
                control={control}
                name="address"
                label="Full Address"
                placeholder="Enter Full Address"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  control={control}
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="97********"
                  required
                />

                <FormInput
                  control={control}
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="info@salon.com"
                  required
                />
              </div>

              <FormTextarea
                control={control}
                name="description"
                label="Description"
                placeholder="Tell us about your salon..."
              />

              <FormFileUpload
                control={control}
                name="logo"
                label="Salon Logo"
                description="Upload a logo image (max 5MB)"
              />

              <div className="flex gap-3 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard')}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Adding...' : 'Add Salon'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
