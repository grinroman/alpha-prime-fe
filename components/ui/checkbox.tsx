"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

import { Typography, type TypographyProps } from "./typography"

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-5 w-5 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4 text-background" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

interface CheckboxWithLabelProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label: React.ReactNode
  typographyProps?: Omit<TypographyProps, "children">
  containerClassName?: string
}

interface CheckboxWithLabelProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label: React.ReactNode
  typographyProps?: Omit<TypographyProps, "children"> | undefined
  containerClassName?: string
}

const CheckboxWithLabel = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxWithLabelProps
>(
  (
    { label, typographyProps, containerClassName, id, className, ...props },
    ref
  ) => {
    const generatedId = React.useId()
    const checkboxId = id || generatedId

    return (
      <div className={cn("flex items-center gap-2", containerClassName)}>
        <Checkbox ref={ref} id={checkboxId} className={className} {...props} />
        <Typography
          as="label"
          variant="p"
          className={cn(
            "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            typographyProps?.className
          )}
          {...typographyProps}
          htmlFor={checkboxId}
        >
          {label}
        </Typography>
      </div>
    )
  }
)
CheckboxWithLabel.displayName = "CheckboxWithLabel"

export { Checkbox, CheckboxWithLabel }
