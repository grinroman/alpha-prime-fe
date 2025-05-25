export type TLocale = (typeof locales)[number]

export const locales = ["en", "ukr", "ru"] as const
export const defaultLocale: TLocale = "ukr"
