"use server"

import { defaultLocale, TLocale } from "./config"

export async function getUserLocale() {
  return defaultLocale
}

export async function setUserLocale(locale: TLocale) {
  return locale
}
