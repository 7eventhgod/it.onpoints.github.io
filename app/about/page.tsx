import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Award, Users, Shield, Zap, Lightbulb, User } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build long-term relationships with our clients, becoming their trusted technology partner.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Our 99.9% uptime guarantee and 24/7 support ensure your business never stops.",
    },
  ]

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "OnPoints IT was established with a vision to provide premium technology solutions.",
    },
    {
      year: "2021",
      title: "First Major Project",
      description: "Successfully deployed enterprise-level IPTV infrastructure for a major client.",
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew our team of experts and expanded service offerings to include cybersecurity.",
    },
    {
      year: "2023",
      title: "International Growth",
      description: "Extended operations across multiple countries with 24/7 support capabilities.",
    },
    {
      year: "2024",
      title: "Innovation Focus",
      description: "Launched advanced AI-powered monitoring and automated security solutions.",
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Continuing to lead in technology innovation and client satisfaction.",
    },
  ]

  const team = [
    {
      initials: "HG",
      name: "Haji Gadimov",
      role: "System Administrator & Network Infrastructure",
      skills: ["Network Infrastructure", "System Administration", "Server Management"],
    },
    {
      initials: "MK",
      name: "Murad Kamilli",
      role: "Software Developer & Technician",
      skills: ["Software Development", "Technical Support", "System Maintenance"],
    },
  ]

  const services = [
    "IPTV Solutions",
    "Server Management",
    "Network Infrastructure",
    "Software Development",
    "Cybersecurity",
    "Firewall Solutions",
  ]

  const companyLinks = ["About Us", "Projects", "Contact", "Privacy Policy", "Terms of Service"]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-black via-blue-950/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            About OnPoints IT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            We are a premium technology company dedicated to delivering exceptional IT solutions that empower businesses
            to achieve their digital transformation goals.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
            <Card className="bg-gray-900/50 border-blue-900/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To provide world-class technology solutions that enable businesses to thrive in the digital age. We
                  combine technical expertise with innovative thinking to deliver results that matter.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-blue-900/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  To be the leading technology partner for businesses worldwide, known for our reliability, innovation,
                  and commitment to excellence in every project we undertake.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-black/50 border-blue-900/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-blue-400">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 bg-gradient-to-br from-black via-blue-950/10 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">Our Journey</h2>
            <p className="text-xl text-gray-300">Key milestones in our company's growth and evolution.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <Badge
                    variant="outline"
                    className="bg-blue-600/20 text-blue-400 border-blue-600/50 text-lg px-3 py-1"
                  >
                    {item.year}
                  </Badge>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-8 relative">
                  {index < timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-blue-600/30"></div>
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">Meet Our Team</h2>
            <p className="text-xl text-gray-300">The experts behind our success.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="bg-black/50 border-blue-900/30 hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 text-blue-400">
                      <User className="w-full h-full" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-lg mb-4">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-blue-900/30 text-blue-300 border-blue-800/50 mr-2 mb-2"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-blue-800/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how OnPoints IT can help you achieve your digital transformation goals with our premium
            technology solutions.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  )
}
