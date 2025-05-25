import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("tracking-normal font-inter", {
  variants: {
    variant: {
      p: "leading-7 ", //[&:not(:first-child)]:mt-6
      //form
      insetLabel: "text-text-grey-1 text-sm leading-[140%] tracking-[0%]",
      inputText:
        "text-text-black-1 text-base leading-[140%] tracking-[0%] font-medium",
      additionalInfo: "text-text-grey-1 text-sm font-medium",
      // h1: "scroll-m-20 text-4xl font-extrabold lg:text-5xl",
      // h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold first:mt-0",
      // h3: "scroll-m-20 text-2xl font-semibold",
      // h4: "scroll-m-20 text-xl font-semibold",
      // blockquote: "mt-6 border-l-2 pl-6 italic",
      // table: "w-full",
      // list: "my-6 ml-6 list-disc [&>li]:mt-2",
      // "inline-code":
      //   "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      // lead: "text-xl text-muted-foreground",
      // large: "text-lg font-semibold",
      // small: "text-sm font-medium leading-none",
      // muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

type TypographyVariants = VariantProps<typeof typographyVariants>

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    TypographyVariants {
  as?: React.ElementType
  children: React.ReactNode
  htmlFor?: string
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ as: Component = "p", variant, className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, className }))}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Typography.displayName = "Typography"
