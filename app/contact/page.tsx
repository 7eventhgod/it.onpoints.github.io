"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import dynamic from 'next/dynamic'
import { useTranslation } from '@/hooks/useTranslation'

export default function Contact() {
      const { t } = useTranslation();

  const Map = dynamic(() => import('../components/Map'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-800 flex items-center justify-center rounded-lg"><p>Loading map...</p></div>,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/contact/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Failed to send message.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Failed to send message.");
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const googleMapsUrl = `https://www.google.com/maps/place/Sabah+Residence/@40.3506373,49.8368512,14z/data=!4m6!3m5!1s0x40307d01fac64e89:0x84ad7cfa1113f36b!8m2!3d40.3515607!4d49.8320842!16s%2Fg%2F11fgm40hr_?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D`;

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: <a href="mailto:info@onpoints.it" className="hover:underline text-cyan-400">info@onpoints.it</a>,
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+994 10 255 58 76",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "Baku, Azerbaijan",
      description: "Visit our headquarters",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Support",
      details: "24/7 Available",
      description: "We're here when you need us",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{t('contact.hero.title')}</h1>
            <p className="text-xl">{t('contact.hero.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const cardContent = (
                <Card className="bg-black border-gray-800 hover:border-cyan-500 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-cyan-400 mb-4 flex justify-center">{info.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{info.title}</h3>
                    <p className="text-cyan-400 font-medium mb-2">{info.details}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              );

              if (info.title === 'Office') {
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
                      {cardContent}
                    </a>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  {cardContent}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">{t('contact.form.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          {t('contact.form.name.label')}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-black border-gray-700 text-white focus:border-cyan-500"
                          placeholder={t('contact.form.name.placeholder')}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          {t('contact.form.email.label')}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-black border-gray-700 text-white focus:border-cyan-500"
                          placeholder={t('contact.form.email.placeholder')}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.company.label')}
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-black border-gray-700 text-white focus:border-cyan-500"
                        placeholder={t('contact.form.company.placeholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.form.message.label')}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-black border-gray-700 text-white focus:border-cyan-500"
                        placeholder={t('contact.form.message.placeholder')}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-xl"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Sending..." : t('contact.form.submit')}
                    </Button>
                    {status === "success" && (
                      <p className="text-green-500 text-center mt-2">Message sent successfully!</p>
                    )}
                    {status === "error" && (
                      <p className="text-red-500 text-center mt-2">{errorMsg}</p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="h-96 lg:h-auto rounded-3xl bg-black/50 ring-1 ring-cyan-400/30 shadow-2xl shadow-cyan-400/20 overflow-hidden">
                <Map />
              </div>

              {/* Additional Info */}
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">{t('contact.whyChoose.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{t('contact.whyChoose.support')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{t('contact.whyChoose.uptime')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{t('contact.whyChoose.team')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{t('contact.whyChoose.solutions')}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
