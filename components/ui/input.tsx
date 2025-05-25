import * as React from "react"

import { cn } from "@/lib/utils"

import { useFormField } from "./form"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const { error } = useFormField()

    console.log("error! ", error)

    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-lg border border-border bg-background p-6 text-base text-text-black-1 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[1.2px] focus-visible:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-50",
          type === "search" &&
            "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
          type === "file" &&
            "p-0 pr-3 italic file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-text-black-1",
          "placeholder:text-text-grey-1 placeholder:font-inter placeholder:font-medium placeholder:text-[0.875rem] placeholder:leading-[140%]",
          "text-text-black-1 placeholder:text-text-grey-1 placeholder:font-inter placeholder:font-medium placeholder:text-[0.875rem] placeholder:leading-[140%] placeholder:tracking-[0%]",
          error?.message && "border-border-red-1",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

//placeholder-font-inter placeholder:font-medium placeholder:text-[0.875rem] placeholder:leading-[140%] placeholder:tracking-[0%]
