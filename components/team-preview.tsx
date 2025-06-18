"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/useTranslation"

export function TeamPreview() {
  const { t } = useTranslation()

  const teamMembers = [
    {
      name: "Haji Gadimov",
      role: t("team.haji.role"),
      bio: t("team.haji.bio"),
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Murad Kamilli",
      role: t("team.murad.role"),
      bio: t("team.murad.bio"),
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">{t("team.preview.title")}</h2>
          <p className="text-xl text-gray-400">{t("team.preview.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-cyan-500 transition-all duration-300 rounded-xl overflow-hidden group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-full border-2 border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-xl"
          >
            <Link href="/team">
              {t("team.preview.cta")} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
