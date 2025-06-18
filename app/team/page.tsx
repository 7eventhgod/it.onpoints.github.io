"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"

export default function TeamPage() {
  const { t } = useTranslation()

  const teamMembers = [
    {
      name: "Haji Gadimov",
      role: "Founder",
      bio: "Visionary founder driving strategic growth and innovation in enterprise technology solutions.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Strategic Planning", "Business Development", "Technology Leadership"],
      social: {
        email: "haji@onpoints.it",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Murad Kamilli",
      role: "Chief Executive Officer",
      bio: "Technical architect and innovation strategist with expertise in scalable technology infrastructure.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Technical Architecture", "Innovation Strategy", "Team Leadership"],
      social: {
        email: "murad@onpoints.it",
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("team.title")}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("team.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t("team.leadership.title")}</h2>
            <p className="text-xl text-gray-400">{t("team.leadership.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-cyan-500 transition-all duration-300 overflow-hidden rounded-xl">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover rounded-full border-4 border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors duration-300"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                      <p className="text-gray-400 leading-relaxed mb-6">{member.bio}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">{t("team.expertise")}</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4">
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t("team.values.title")}</h2>
            <p className="text-xl text-gray-400">{t("team.values.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-2xl">E</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{t("team.values.excellence.title")}</h3>
              <p className="text-gray-400">{t("team.values.excellence.description")}</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-2xl">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{t("team.values.innovation.title")}</h3>
              <p className="text-gray-400">{t("team.values.innovation.description")}</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-2xl">P</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{t("team.values.partnership.title")}</h3>
              <p className="text-gray-400">{t("team.values.partnership.description")}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
