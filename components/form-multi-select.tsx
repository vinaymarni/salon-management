'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { FieldGroup } from '@/components/ui/field'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Checkbox } from '@/components/ui/checkbox'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface Option {
  value: string
  label: string
}

interface FormMultiSelectProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  options: Option[]
  placeholder?: string
  required?: boolean
  description?: string
}

export function FormMultiSelect<T extends FieldValues>({
  control,
  name,
  label,
  options,
  placeholder = 'Select items',
  required = false,
  description,
}: FormMultiSelectProps<T>) {
  const [open, setOpen] = useState(false)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        const selectedValues = Array.isArray(field.value) ? field.value : []
        const selectedLabels = selectedValues
          .map((v) => options.find((o) => o.value === v)?.label)
          .filter(Boolean)

        return (
          <FieldGroup>
            <Label>
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left font-normal ${
                    error ? 'border-destructive' : ''
                  }`}
                >
                  {selectedLabels.length > 0
                    ? selectedLabels.join(', ')
                    : placeholder}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-3" align="start">
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
                        className="ml-2 text-sm cursor-pointer flex-1"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {selectedValues.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedValues.map((value) => {
                  const label = options.find((o) => o.value === value)?.label
                  return (
                    <div
                      key={value}
                      className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm flex items-center gap-2"
                    >
                      {label}
                      <button
                        type="button"
                        onClick={() => {
                          field.onChange(
                            selectedValues.filter((v) => v !== value)
                          )
                        }}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  )
                })}
              </div>
            )}

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
