"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Search } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  search: z.string().optional(),
  newsletter: z.string().email(),
})

export default function TestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      search: "",
      newsletter: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Standard Input */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-text-black-1">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter username"
                    {...field}
                    className="text-text-black-1 placeholder:text-muted-foreground"
                  />
                </FormControl>
                <FormDescription className="text-muted-foreground">
                  This is your public display name.
                </FormDescription>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />

          {/* Inset Label Input */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-text-black-1">Email</FormLabel>
                <FormControl>
                  <div className="relative min-w-[300px] rounded-lg border border-input bg-background shadow-sm shadow-black/5 transition-shadow focus-within:border-primary focus-within:outline-none focus-within:ring-[3px] focus-within:ring-primary/20 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none">
                    <label
                      htmlFor={field.name}
                      className="block px-3 pt-2 text-xs font-medium text-text-black-1"
                    >
                      Inset Label
                    </label>
                    <Input
                      {...field}
                      className="bg-transparent border-none focus-visible:ring-0 focus-visible:border-0 px-3 pb-2 text-sm text-text-black-1 placeholder:text-muted-foreground/70 focus-visible:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </FormControl>
                <FormDescription className="text-muted-foreground">
                  We&apos;ll never share your email.
                </FormDescription>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />

          {/* Search Input with End Button */}
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-text-black-1">Search</FormLabel>
                <FormControl>
                  <div className="relative flex items-center w-full">
                    <Input
                      {...field}
                      placeholder="Search..."
                      className="pr-12 text-text-black-1 placeholder:text-muted-foreground"
                    />
                    <div className="absolute right-1 flex items-center justify-center">
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        className="h-7 w-7 p-0"
                      >
                        <Search className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </div>
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />

          {/* Combined Input with Label and Button */}
          <FormField
            control={form.control}
            name="newsletter"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-text-black-1">Search</FormLabel>
                <FormControl>
                  <div className="relative flex items-center w-full">
                    <Input
                      {...field}
                      className="pr-12 text-text-black-1 placeholder:text-muted-foreground"
                    />
                    <div className="absolute right-1 flex items-center justify-center">
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        className="h-7 w-7 p-0"
                      >
                        <Search className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </div>
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
