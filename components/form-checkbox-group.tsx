'use client'

import { Label } from '@/components/ui/label'
import { FieldGroup } from '@/components/ui/field'
import { Checkbox } from '@/components/ui/checkbox'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface Option {
  value: string
  label: string
}

interface FormCheckboxGroupProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  options: Option[]
  required?: boolean
  description?: string
}

export function FormCheckboxGroup<T extends FieldValues>({
  control,
  name,
  label,
  options,
  required = false,
  description,
}: FormCheckboxGroupProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        const selectedValues = Array.isArray(field.value) ? field.value : []

        return (
          <FieldGroup>
            <Label>
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </Label>
            <div className="space-y-2">
              {options.map((option) => (
                <div key={option.value} className="flex items-center">
                  <Checkbox
                    id={`${name}-${option.value}`}
                    checked={selectedValues.includes(option.value)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        field.onChange([...selectedValues, option.value])
                      } else {
                        field.onChange(
                          selectedValues.filter((v) => v !== option.value)
                        )
                      }
                    }}
                  />
                  <label
                    htmlFor={`${name}-${option.value}`}
                    className="ml-2 text-sm cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
            {error && (
              <p className="text-sm text-destructive mt-1">{error.message}</p>
            )}
            {description && !error && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </FieldGroup>
        )
      }}
    />
  )
}
