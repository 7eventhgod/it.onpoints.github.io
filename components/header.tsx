"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/hooks/useTranslation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, setLocale, t } = useTranslation()

  const navigation = [
    { name: t("common.home"), href: "/" },
    { name: t("common.about"), href: "/about" },
    { name: t("common.services"), href: "/services" },

    { name: t("common.contact"), href: "/contact" },
  ]

  const languages = [
    { code: "en", name: "English" },
    { code: "az", name: "Azərbaycan" },
    { code: "ru", name: "Русский" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-white via-gray-300 to-cyan-400 bg-clip-text text-transparent">
              OnPoints
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-6 h-6 text-gray-300" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-gray-800">
              <div className="flex flex-col space-y-6 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium text-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
