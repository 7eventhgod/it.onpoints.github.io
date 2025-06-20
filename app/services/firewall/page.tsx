"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ChevronRight,
  Shield,
  NetworkIcon as Firewall,
  BarChart3,
  Settings,
  AlertTriangle,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"

export default function FirewallPage() {
  const { t } = useTranslation()

  const features = [
    {
      icon: <Firewall className="w-6 h-6" />,
      title: t("services.firewall.features.nextGen.title"),
      description: t("services.firewall.features.nextGen.description"),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("services.firewall.features.prevention.title"),
      description: t("services.firewall.features.prevention.description"),
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t("services.firewall.features.analysis.title"),
      description: t("services.firewall.features.analysis.description"),
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: t("services.firewall.features.management.title"),
      description: t("services.firewall.features.management.description"),
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: t("services.firewall.features.intelligence.title"),
      description: t("services.firewall.features.intelligence.description"),
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t("services.firewall.features.automated.title"),
      description: t("services.firewall.features.automated.description"),
    },
  ]

  const stats = [
    { number: "99.95%", label: t("services.firewall.stats.detection") },
    { number: "Real-time", label: t("services.firewall.stats.response") },
    { number: "90%", label: t("services.firewall.stats.reduction") },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Breadcrumb */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/services" className="hover:text-cyan-400 transition-colors">
              {t("common.services")}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{t("services.firewall.title")}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("services.firewall.title")}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("services.firewall.tagline")}
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-white">{t("services.firewall.features.title")}</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-cyan-400 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Supporting Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl" />
                <Image
                  src="/firewall.png"
                  alt="Firewall Solutions"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-cyan-500 text-black font-semibold">Next-Gen Security</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why OnPoints Stats */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t("services.firewall.whyOnPoints.title")}</h2>
            <p className="text-xl text-gray-400">{t("services.firewall.whyOnPoints.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("services.firewall.cta.title")}</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">{t("services.firewall.cta.description")}</p>
            <Button
              asChild
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 rounded-xl"
            >
              <Link href="/contact">
                {t("common.letsTalk")} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
