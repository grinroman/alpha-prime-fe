import React from "react"
import { tv, type VariantProps } from "tailwind-variants"

const typography = tv({
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      table: "w-full",
      list: "my-6 ml-6 list-disc [&>li]:mt-2",
      "inline-code":
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
})

type TypographyVariants = VariantProps<typeof typography>

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    TypographyVariants {
  as?: React.ElementType
  children: React.ReactNode
  htmlFor?: string // TODO: typo fix
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ as: Component = "div", variant, className, children, ...props }, ref) => {
    const typographyClassName = typography({ variant, className })

    return (
      <Component ref={ref} className={typographyClassName} {...props}>
        {children}
      </Component>
    )
  }
)

Typography.displayName = "Typography"
