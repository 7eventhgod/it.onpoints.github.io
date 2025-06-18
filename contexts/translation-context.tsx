"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"
import Cookies from "js-cookie"

type Locale = "en" | "az" | "ru"

interface TranslationContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

const translations: Record<Locale, Record<string, any>> = {
  en: {},
  az: {},
  ru: {},
}

// Load translations dynamically
const loadTranslations = async (locale: Locale) => {
  if (Object.keys(translations[locale]).length === 0) {
    try {
      const response = await import(`@/locales/${locale}.json`)
      translations[locale] = response.default
    } catch (error) {
      console.error(`Failed to load translations for ${locale}:`, error)
      // Fallback to English if translation fails
      if (locale !== "en") {
        const fallback = await import("@/locales/en.json")
        translations[locale] = fallback.default
      }
    }
  }
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get locale from cookie or default to 'en'
    const savedLocale = Cookies.get("onpoints_lang") as Locale
    const initialLocale = savedLocale || "en"

    loadTranslations(initialLocale).then(() => {
      setLocaleState(initialLocale)
      setIsLoaded(true)
    })
  }, [])

  const setLocale = async (newLocale: Locale) => {
    await loadTranslations(newLocale)
    setLocaleState(newLocale)
    Cookies.set("onpoints_lang", newLocale, { expires: 365 })
  }

  const t = (key: string): string => {
    if (!isLoaded) return key

    const keys = key.split(".")
    let value: any = translations[locale]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // Fallback to English if key not found
        value = translations.en
        for (const fallbackKey of keys) {
          if (value && typeof value === "object" && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            return key // Return key if not found in fallback
          }
        }
        break
      }
    }

    return typeof value === "string" ? value : key
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return <TranslationContext.Provider value={{ locale, setLocale, t }}>{children}</TranslationContext.Provider>
}

export { TranslationContext }
