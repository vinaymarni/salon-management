'use client'

import { useRef, useState } from 'react'
import { Label } from '@/components/ui/label'
import { FieldGroup } from '@/components/ui/field'
// import { Button } from '@/components/ui/button'
import { Upload, X } from 'lucide-react'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'
import { fileToBase64, isValidImageFile } from '@/lib/image-utils'
import Image from 'next/image'

interface FormFileUploadProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label: string
  required?: boolean
  description?: string
  accept?: string
}

export function FormFileUpload<T extends FieldValues>({
  control,
  name,
  label,
  required = false,
  description,
  accept = 'image/*',
}: FormFileUploadProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string>('')

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FieldGroup>
          <Label>
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
              error
                ? 'border-destructive bg-destructive/5'
                : 'border-border hover:border-primary'
            }`}
            onClick={() => inputRef.current?.click()}
            onDrop={(e) => {
              e.preventDefault()
              e.stopPropagation()
              const files = e.dataTransfer.files
              if (files.length > 0) handleFile(files[0], field)
            }}
            onDragOver={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            <input
              ref={inputRef}
              type="file"
              accept={accept}
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  handleFile(e.target.files[0], field)
                }
              }}
            />
            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm font-medium">Click or drag to upload</p>
            <p className="text-xs text-muted-foreground mt-1">
              {description}
            </p>
          </div>

          {preview && (
            <div className="relative w-32 h-32 mt-4">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => {
                  setPreview('')
                  field.onChange('')
                  if (inputRef.current) inputRef.current.value = ''
                }}
                className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {error && (
            <p className="text-sm text-destructive mt-1">{error.message}</p>
          )}
        </FieldGroup>
      )}
    />
  )

  function handleFile(file: File, field:any) {
    if (!isValidImageFile(file)) {
      alert('Please select a valid image file (max 5MB)')
      return
    }

    let imageUrl = URL.createObjectURL(file)
      setPreview(imageUrl)
      console.log(imageUrl)
      field.onChange(imageUrl)

    // fileToBase64(file).then((base64) => {
    //   setPreview(base64)
    //   console.log(base64)
    //   field.onChange(base64)
    // })
  }
}
