'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FieldGroup } from '@/components/ui/field'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface FormTimePickerProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  required?: boolean
  description?: string
}

export function FormTimePicker<T extends FieldValues>({
  control,
  name,
  label,
  required = false,
  description,
}: FormTimePickerProps<T>) {
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
          <Input
            id={name}
            type="time"
            {...field}
            className={error ? 'border-destructive' : ''}
          />
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
