'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { FieldGroup } from '@/components/ui/field'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface Option {
  value?: string
  label?: string
  id?: string
  name?: string
  cityId?: string
  stateId?: string
  code?: string
}

interface FormSelectProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  options: Option[]
  placeholder?: string
  required?: boolean
  description?: string
}

export function FormSelect<T extends FieldValues>({
  control,
  name,
  label,
  options,
  placeholder = 'Select an option',
  required = false,
  description,
}: FormSelectProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FieldGroup>
          <Label htmlFor={name}>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
          <Select value={field.value || ''} onValueChange={field.onChange}>
            <SelectTrigger
              id={name}
              className={`w-full ${error ? 'border-destructive' : ''}`}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            {options && options.length > 0 ?
            <SelectContent>
              {options.map((option) => {
                if(!option.value || option.value == "") return;
                return(
                <SelectItem key={`selected_item_${option.value}`} value={option.value}>
                  {option.name}
                </SelectItem>
              )})}
            </SelectContent>
            :
            <SelectContent>
              <span className='text-[12px] p-[4px]'>!No Data</span>
            </SelectContent>
      }
          </Select>
          {error && (
            <p className="text-sm text-destructive mt-1">{error.message}</p>
          )}
          {description && !error && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </FieldGroup>
      )}
    />
  )
}
