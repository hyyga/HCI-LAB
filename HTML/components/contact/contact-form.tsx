"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

interface FormData {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
  droneType: string
  agreeToTerms: boolean
}

interface FormErrors {
  [key: string]: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    droneType: "",
    agreeToTerms: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  // Validation functions (no regex)
  const validateFullName = (name: string): string => {
    if (!name || name.trim().length === 0) {
      return "Full name is required"
    }
    if (name.trim().length < 2) {
      return "Full name must be at least 2 characters"
    }
    if (name.trim().length > 100) {
      return "Full name must not exceed 100 characters"
    }
    return ""
  }

  const validateEmail = (email: string): string => {
    if (!email || email.trim().length === 0) {
      return "Email is required"
    }
    const parts = email.split("@")
    if (parts.length !== 2) {
      return "Email must contain exactly one @ symbol"
    }
    const [localPart, domain] = parts
    if (!localPart || localPart.length === 0) {
      return "Email must have content before @"
    }
    if (!domain || domain.length === 0) {
      return "Email must have content after @"
    }
    if (!domain.includes(".")) {
      return "Email domain must contain a dot"
    }
    const domainParts = domain.split(".")
    if (domainParts.some((part) => part.length === 0)) {
      return "Email domain format is invalid"
    }
    return ""
  }

  const validatePhone = (phone: string): string => {
    if (!phone || phone.trim().length === 0) {
      return "Phone number is required"
    }
    const digitsOnly = phone.replace(/\D/g, "")
    if (digitsOnly.length < 10) {
      return "Phone number must have at least 10 digits"
    }
    if (digitsOnly.length > 15) {
      return "Phone number must not exceed 15 digits"
    }
    return ""
  }

  const validateMessage = (message: string): string => {
    if (!message || message.trim().length === 0) {
      return "Message is required"
    }
    if (message.trim().length < 10) {
      return "Message must be at least 10 characters"
    }
    if (message.trim().length > 5000) {
      return "Message must not exceed 5000 characters"
    }
    return ""
  }

  const validateTerms = (agreed: boolean): string => {
    if (!agreed) {
      return "You must agree to the terms of service"
    }
    return ""
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: FormErrors = {}

    // Validate all fields
    const fullNameError = validateFullName(formData.fullName)
    if (fullNameError) newErrors.fullName = fullNameError

    const emailError = validateEmail(formData.email)
    if (emailError) newErrors.email = emailError

    const phoneError = validatePhone(formData.phone)
    if (phoneError) newErrors.phone = phoneError

    const messageError = validateMessage(formData.message)
    if (messageError) newErrors.message = messageError

    const termsError = validateTerms(formData.agreeToTerms)
    if (termsError) newErrors.agreeToTerms = termsError

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Form is valid
    setSubmitted(true)
    console.log("Form submitted:", formData)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        droneType: "",
        agreeToTerms: false,
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:support@jci.com" className="text-muted-foreground hover:text-primary">
                      support@jci.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">123 Innovation Drive, Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
                <p className="text-green-700">Your message has been received. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.fullName ? "border-red-500" : "border-border"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.email ? "border-red-500" : "border-border"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.phone ? "border-red-500" : "border-border"
                    }`}
                    placeholder="+1 (234) 567-890"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Drone Type */}
                <div>
                  <label htmlFor="droneType" className="block text-sm font-semibold mb-2">
                    Interested Drone Type
                  </label>
                  <select
                    id="droneType"
                    name="droneType"
                    value={formData.droneType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a drone type</option>
                    <option value="professional">Professional</option>
                    <option value="consumer">Consumer</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                      errors.message ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="w-4 h-4 mt-1 border border-border rounded focus:ring-2 focus:ring-primary"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm">
                    I agree to JCI's terms of service and privacy policy regarding how my data will be handled *
                  </label>
                </div>
                {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
