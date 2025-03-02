import React, { useId } from "react"

import { cn } from "@/lib/utils"

import { FormControl } from "./form"
import { Input } from "./input"

interface InsetLabelFormControlProps
  extends React.ComponentPropsWithoutRef<typeof FormControl> {
  label: React.ReactNode
  inputProps?: React.ComponentPropsWithoutRef<typeof Input>
}

const InsetLabelFormControl = React.forwardRef<
  React.ComponentRef<typeof FormControl>,
  InsetLabelFormControlProps
>(({ label, inputProps, className, ...props }, ref) => {
  const id = useId()

  return (
    <FormControl ref={ref} {...props}>
      <div className="relative min-w-[300px] rounded-lg border border-input bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none">
        <label
          htmlFor={id}
          className="block px-3 pt-2 text-xs font-medium text-foreground"
        >
          {label}
        </label>

        {/*TODO: use override of the Input primitive*/}
        <input
          id={id}
          className="flex h-10 w-full bg-transparent px-3 pb-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none"
          placeholder="Email"
          type="email"
        />
      </div>
    </FormControl>
  )
})
InsetLabelFormControl.displayName = "InsetLabelFormControl"

interface EndButtonFormControlProps
  extends React.ComponentPropsWithoutRef<typeof FormControl> {
  button: React.ReactNode
  inputProps?: React.ComponentPropsWithoutRef<typeof Input>
}

const EndButtonFormControl = React.forwardRef<
  React.ComponentRef<typeof FormControl>,
  EndButtonFormControlProps
>(({ button, inputProps, className, ...props }, ref) => {
  return (
    <FormControl ref={ref} {...props}>
      <div className="relative flex items-center w-full">
        <Input className={cn("pr-12", className)} {...inputProps} />
        <div className="absolute right-1 flex items-center justify-center">
          {button}
        </div>
      </div>
    </FormControl>
  )
})
EndButtonFormControl.displayName = "EndButtonFormControl"

interface CombinedFormControlProps
  extends React.ComponentPropsWithoutRef<typeof FormControl> {
  label: React.ReactNode
  button: React.ReactNode
  inputProps?: React.ComponentPropsWithoutRef<typeof Input>
}

const CombinedFormControl = React.forwardRef<
  React.ComponentRef<typeof FormControl>,
  CombinedFormControlProps
>(({ label, button, inputProps, className, ...props }, ref) => {
  return (
    <FormControl ref={ref} {...props}>
      <div className="relative flex overflow-hidden rounded-lg border border-input shadow-sm shadow-black/5">
        <div className="flex items-center justify-center px-3 border-r border-input bg-muted/20">
          {label}
        </div>
        <Input
          className="border-0 shadow-none rounded-none focus-visible:ring-0 focus-visible:border-0 pr-12"
          {...inputProps}
        />
        <div className="absolute right-1 flex items-center justify-center">
          {button}
        </div>
      </div>
    </FormControl>
  )
})
CombinedFormControl.displayName = "CombinedFormControl"

export { InsetLabelFormControl, EndButtonFormControl, CombinedFormControl }
