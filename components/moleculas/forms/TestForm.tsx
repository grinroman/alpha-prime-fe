"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, Mail, Search } from "lucide-react"
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
import {
  CombinedFormControl,
  EndButtonFormControl,
  InsetLabelFormControl,
} from "@/components/ui/form-controls"
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
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Input with Inset Label */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <InsetLabelFormControl
                  label="Lol kek"
                  inputProps={{ placeholder: "Enter your email" }}
                  {...field}
                />
                <FormDescription>We'll never share your email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Input with End Button */}
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Search</FormLabel>
                <EndButtonFormControl
                  button={
                    <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                      <Search className="h-4 w-4" />
                    </Button>
                  }
                  inputProps={{ placeholder: "Search..." }}
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newsletter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Newsletter</FormLabel>
                <CombinedFormControl
                  label={<Mail className="h-4 w-4 text-muted-foreground" />}
                  button={
                    <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  }
                  inputProps={{ placeholder: "Subscribe to newsletter" }}
                  {...field}
                />
                <FormDescription>
                  Subscribe to our newsletter for updates.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
