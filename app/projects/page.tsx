"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Enterprise IPTV Platform",
      category: "iptv",
      client: "MediaCorp International",
      description: "Complete IPTV infrastructure deployment for 10,000+ concurrent users with global CDN integration.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["IPTV", "CDN", "Load Balancing", "Analytics"],
      results: {
        users: "10,000+",
        uptime: "99.98%",
        performance: "40% faster",
      },
      year: "2024",
    },
    {
      id: 2,
      title: "Banking Security Infrastructure",
      category: "cybersecurity",
      client: "SecureBank Ltd",
      description:
        "Comprehensive cybersecurity overhaul including penetration testing, firewall implementation, and compliance.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Firewall", "Penetration Testing", "Compliance", "Monitoring"],
      results: {
        threats: "99.9% blocked",
        compliance: "100% achieved",
        incidents: "Zero breaches",
      },
      year: "2024",
    },
    {
      id: 3,
      title: "Cloud Migration & Optimization",
      category: "servers",
      client: "TechStart Solutions",
      description: "Complete migration of legacy systems to cloud infrastructure with performance optimization.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Cloud Migration", "Server Optimization", "Monitoring", "Backup"],
      results: {
        cost: "60% reduction",
        performance: "3x faster",
        availability: "99.99%",
      },
      year: "2023",
    },
    {
      id: 4,
      title: "E-commerce Platform Development",
      category: "development",
      client: "ShopGlobal Inc",
      description: "Custom e-commerce platform with advanced features, payment integration, and mobile optimization.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "PostgreSQL", "Payment APIs"],
      results: {
        sales: "200% increase",
        conversion: "35% higher",
        mobile: "90% traffic",
      },
      year: "2023",
    },
    {
      id: 5,
      title: "Network Infrastructure Redesign",
      category: "network",
      client: "Manufacturing Corp",
      description: "Complete network infrastructure overhaul for manufacturing facility with 500+ endpoints.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Network Design", "WiFi 6", "VPN", "Monitoring"],
      results: {
        speed: "10x faster",
        coverage: "100% facility",
        downtime: "95% reduced",
      },
      year: "2023",
    },
    {
      id: 6,
      title: "Advanced Firewall Implementation",
      category: "firewall",
      client: "FinTech Innovations",
      description:
        "Next-generation firewall deployment with AI-powered threat detection and automated response systems.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next-Gen Firewall", "AI Detection", "Automation", "Analytics"],
      results: {
        threats: "99.95% detection",
        response: "Real-time",
        false_positives: "90% reduced",
      },
      year: "2024",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "iptv", name: "IPTV" },
    { id: "cybersecurity", name: "Cybersecurity" },
    { id: "servers", name: "Servers" },
    { id: "development", name: "Development" },
    { id: "network", name: "Network" },
    { id: "firewall", name: "Firewall" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

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
            Our Projects
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our portfolio of successful technology implementations that have transformed businesses and
            delivered measurable results across various industries.
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={`rounded-xl ${
                  filter === category.id
                    ? "bg-cyan-500 text-black hover:bg-cyan-600"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500 transition-all duration-300 overflow-hidden group h-full">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-cyan-500 text-black font-semibold">{project.year}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-cyan-400 font-medium mb-3">{project.client}</p>
                      <p className="text-gray-400 leading-relaxed">{project.description}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(project.results).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-cyan-400 font-bold text-lg">{value}</div>
                            <div className="text-gray-500 text-sm capitalize">{key.replace("_", " ")}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>Enterprise</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>Success</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Project Success Metrics</h2>
            <p className="text-xl text-gray-400">Measurable results that demonstrate our commitment to excellence.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400 text-lg">Projects Completed</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-400 text-lg">Client Satisfaction</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-400 text-lg">Support Coverage</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-gray-400 text-lg">Years Experience</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join our growing list of satisfied clients and let us help you achieve your technology goals.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 rounded-xl"
            >
              <a href="/contact">
                Start Your Project <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
