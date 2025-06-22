"use client"

// import Link from "next/link"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckboxWithLabel } from "@/components/ui/checkbox"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { PasswordInput } from "@/components/ui/specific-primitives/password-input"
import { Typography } from "@/components/ui/typography"
import { BarcodeLogo } from "@/components/atoms/BarcodeLogo"
import GoogleLogo from "@/components/atoms/icons/GoogleLogo"

// import ErrorDialog from "./_components/ErrorDialog"

const formSchema = z.object({
  email: z.string().email("Введіть вашу порту згідно стандартів"),
  password: z
    .string()
    .min(8, { message: "Пароль повинен містити щонайменше 8 символів" })
    .max(20, { message: "Пароль не може перевищувати 20 символів" })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Пароль повинен містити принаймні одну велику літеру",
    })
    .refine((password) => /[a-z]/.test(password), {
      message: "Пароль повинен містити принаймні одну малу літеру",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Пароль повинен містити принаймні одну цифру",
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: "Пароль повинен містити принаймні один спеціальний символ",
    }),
})

export default function SignInPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const [open, setOpen] = useState(true)

  return (
    <>
      <Card className="mx-auto w-[480px] pt-12 px-8 py-8 bg-background">
        <div className="flex justify-center mb-12">
          <BarcodeLogo />
        </div>
        <Separator className="mb-8" />
        <CardHeader>
          <CardTitle>Авторизація</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Введіть email"
                        className="text-text-black-1 placeholder:text-text-grey-1 h-16"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput
                        {...field}
                        placeholder="Введіть пароль"
                        className="text-text-black-1 placeholder:text-text-grey-1 h-16"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between mb-6">
                <div className="w-full flex justify-between">
                  <CheckboxWithLabel label="Запам'ятати мене" />
                  {/*
                    // TODO: add it after implementation on the BE
                    <Link
                      href="/reset-password"
                      className="text-sm text-text-black-1 underline hover:text-text-grey-1 transition-colors"
                    >
                      Забули пароль?
                    </Link> */}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-foreground text-center py-6"
              >
                <Typography className="text-base text-text-white-1 font-bold">
                  Увійти
                </Typography>
              </Button>

              <Button className="w-full py-5 bg-primary text-center flex justify-center gap-4 px-4 items-center">
                <GoogleLogo />{" "}
                <Typography className="text-base text-text-white-1 font-medium">
                  Увійти через Google
                </Typography>
              </Button>
            </form>
          </Form>
        </CardContent>

        <button onClick={() => setOpen(true)}>Open Dialog</button>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <h2>Dialog Title</h2>
          <p>This is a sample dialog content.</p>
          <button onClick={() => setOpen(false)}>Close</button>
        </DialogContent>
      </Dialog>
    </>
  )
}
