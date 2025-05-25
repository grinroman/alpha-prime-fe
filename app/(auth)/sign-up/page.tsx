"use client"

import { useMemo } from "react"
import { TLocale } from "@/i18n/config"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { useLocale } from "next-intl"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { availableLocalesMapping, Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { PasswordInput } from "@/components/ui/specific-primitives/password-input"
import { Typography } from "@/components/ui/typography"
import { BarcodeLogo } from "@/components/atoms/BarcodeLogo"

// Validation schema
const phoneRegex = /^(\+38)?0\d{9}$/
const formSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "Ім&apos;я має містити щонайменше 2 символи" }),
    lastName: z
      .string()
      .min(2, { message: "Прізвище має містити щонайменше 2 символи" }),
    phoneNumber: z.string().refine((value) => phoneRegex.test(value), {
      message: "Введіть коректний український номер телефону (0XX) XXX XX XX",
    }),
    email: z.string().email({ message: "Введіть коректний email" }),
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
    confirmPassword: z.string(),
    dateOfBirth: z.date({
      required_error: "Оберіть дату народження",
      invalid_type_error: "Оберіть коректну дату",
    }),
    gender: z.enum(["male", "female"], {
      required_error: "Оберіть стать",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Паролі не співпадають",
    path: ["confirmPassword"],
  })

const CURRENT_YEAR = new Date().getFullYear()
const FROM_YEAR = CURRENT_YEAR - 100
const TO_YEAR = CURRENT_YEAR - 10

export default function SignUpPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: undefined,
      gender: undefined,
    },
  })

  const currentLocale = useLocale() as TLocale
  const fnsLocaleMemoized = useMemo(
    () => availableLocalesMapping[currentLocale],
    [currentLocale]
  )

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // TODO: Implement actual sign-up logic
  }

  return (
    <Card className="mx-auto  w-[600px] pt-12 px-8 py-8 bg-background">
      <div className="flex justify-center mb-12">
        <BarcodeLogo />
      </div>
      <Separator className="mb-8" />
      <CardHeader>
        <CardTitle>Реєстрація</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-black-1">Ім&apos;я</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Введіть ім'я"
                      {...field}
                      className="text-text-black-1 placeholder:text-text-grey-1"
                    />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-black-1">Прізвище</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Введіть прізвище"
                      {...field}
                      className="text-text-black-1 placeholder:text-text-grey-1"
                    />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />

            {/* Phone Number */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-black-1">
                    Номер телефону
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(0XX) XXX XX XX"
                      {...field}
                      className="text-text-black-1 placeholder:text-text-grey-1"
                    />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-black-1">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Введіть email"
                      {...field}
                      className="text-text-black-1 placeholder:text-text-grey-1"
                    />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-black-1">Пароль</FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="Введіть пароль"
                      {...field}
                      className="text-text-black-1 placeholder:text-text-grey-1"
                    />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-black-1">
                    Підтвердження пароля
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      placeholder="Підтвердіть пароль"
                      {...field}
                      className="text-text-black-1 placeholder:text-text-grey-1"
                    />
                  </FormControl>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />

            {/* Date of Birth */}
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          size="auto"
                          className={cn(
                            "w-full px-6 py-3 flex flex-col gap-[0,5rem] items-start",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <Typography as="label" variant="insetLabel">
                            Дата народження
                          </Typography>
                          {field.value ? (
                            format(field.value, "dd MMM y", {
                              locale: fnsLocaleMemoized,
                            })
                          ) : (
                            <Typography variant="inputText">
                              Оберіть дату
                            </Typography>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-background"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        captionLayout="dropdown-buttons"
                        fromYear={FROM_YEAR}
                        toYear={TO_YEAR}
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date: Date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        className="bg-background border border-input rounded-md shadow-sm"
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />

            {/* Gender */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-text-black-1">Стать</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Оберіть стать" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Чоловіча</SelectItem>
                      <SelectItem value="female">Жіноча</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-destructive" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full py-5 font-bold text-base text-white-1 bg-foreground text-center"
            >
              Зареєструватися
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
