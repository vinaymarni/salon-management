'use client'

import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { FieldGroup } from '@/components/ui/field'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface FormTextareaProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  placeholder?: string
  required?: boolean
  rows?: number
  description?: string
}

export function FormTextarea<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  required = false,
  rows = 4,
  description,
}: FormTextareaProps<T>) {
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
          <Textarea
            id={name}
            placeholder={placeholder}
            rows={rows}
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
