import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Typography } from "@/components/ui/typography"
import { BarcodeLogo } from "@/components/atoms/BarcodeLogo"
import TestForm from "@/components/molecules/forms/TestForm"

export default function PanelOfStatePage() {
  return (
    <>
      <TestForm />
      {/* <div className="relative min-w-[300px] rounded-lg border border-input bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-ring focus-within:outline-none focus-within:ring-[3px] focus-within:ring-ring/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none">
        <label
          htmlFor={id}
          className="block px-3 pt-2 text-xs font-medium text-foreground"
        >
          Input with inset label
        </label>
        <input
          id={id}
          className="flex h-10 w-full bg-transparent px-3 pb-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none"
          placeholder="Email"
          type="email"
        />
      </div> */}
      <Input type="email" placeholder="Email" />
      <BarcodeLogo />
      <Checkbox />
      <div className="container mx-auto p-8 space-y-8">
        <Typography variant="h1">This is an H1 Heading</Typography>

        <Typography variant="h2">This is an H2 Heading</Typography>

        <Typography variant="h3">This is an H3 Heading</Typography>

        <Typography variant="h4">This is an H4 Heading</Typography>

        <Typography variant="p">
          This is a paragraph with standard styling. The component renders a p
          tag by default.
        </Typography>

        <Typography variant="lead">
          This is a lead paragraph with larger text, still using a p tag.
        </Typography>

        <Typography variant="large">
          This is large text using a p tag.
        </Typography>

        <Typography variant="small">
          This is small text using a p tag.
        </Typography>

        <Typography variant="muted">
          This is muted text using a p tag.
        </Typography>

        <Typography variant="blockquote">
          This is a blockquote with special styling.
        </Typography>

        <Typography variant="inline-code" as="pre">
          This is code styled text but rendered as a pre element
        </Typography>

        {/* Example of overriding the default element */}
        <Typography variant="h3" as="div">
          This has h3 styling but is actually a div element
        </Typography>

        {/* Example with additional className */}
        <Typography variant="p" className="bg-muted p-4 rounded-md">
          This paragraph has additional custom classes applied.
        </Typography>
      </div>
    </>
  )
}
