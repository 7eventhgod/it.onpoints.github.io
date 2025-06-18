"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Server, Network, Code, Shield, NetworkIcon as Firewall, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Play className="w-12 h-12" />,
      title: "IPTV Solutions",
      description: "Professional IPTV streaming services and infrastructure setup for businesses and enterprises.",
      features: ["Live Streaming", "VOD Management", "Multi-Device Support", "CDN Integration", "Analytics Dashboard"],
      href: "/services/iptv",
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Server Management",
      description:
        "Comprehensive server solutions including setup, maintenance, and optimization for peak performance.",
      features: [
        "24/7 Monitoring",
        "Performance Optimization",
        "Backup Solutions",
        "Security Updates",
        "Load Balancing",
      ],
      href: "/services/servers",
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Network Infrastructure",
      description: "Design and implementation of robust network architectures for seamless connectivity.",
      features: ["Network Design", "WiFi Solutions", "VPN Setup", "Bandwidth Management", "Network Security"],
      href: "/services/network",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with modern technologies.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Database Design", "Cloud Integration"],
      href: "/services/development",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and infrastructure.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response", "Security Training"],
      href: "/services/cybersecurity",
    },
    {
      icon: <Firewall className="w-12 h-12" />,
      title: "Firewall Solutions",
      description: "Enterprise-grade firewall implementation and management for maximum protection.",
      features: [
        "Next-Gen Firewalls",
        "Intrusion Prevention",
        "Traffic Analysis",
        "Policy Management",
        "Threat Intelligence",
      ],
      href: "/services/firewall",
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
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive technology solutions designed to elevate your business infrastructure, security, and digital
            capabilities with premium quality and reliability.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500 transition-all duration-300 h-full group">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-white">{service.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                        Premium Quality
                      </Badge>
                      <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                        24/7 Support
                      </Badge>
                      <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                        Scalable
                      </Badge>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-xl"
                    >
                      <Link href={service.href}>
                        Learn More <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose OnPoints IT?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver solutions that truly make a
              difference.
            </p>
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
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Proven Expertise</h3>
              <p className="text-gray-400">
                Years of experience delivering complex technology solutions across various industries.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Reliable Infrastructure</h3>
              <p className="text-gray-400">99.9% uptime guarantee with robust monitoring and redundancy systems.</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock technical support to ensure your systems run smoothly.</p>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Let's discuss your technology needs and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 rounded-xl"
              >
                <Link href="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-xl"
              >
                <Link href="/projects">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
