import { motion } from "motion/react";
import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    country: "",
    visaType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you soon.", {
      description: "Our team will reach out within 24 hours.",
    });
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      country: "",
      visaType: "",
      message: "",
    });
  };

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#0B1F3A] mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-[#1E1E1E]/70 max-w-3xl mx-auto">
            Get in touch for a free assessment and personalized consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Office Info Card */}
            <div className="bg-gradient-to-br from-[#D4A24C] to-[#0B1F3A] rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-white/80">+91 77107 05551</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Office</p>
                    <p className="text-white/80">
                      2nd Floor, SCO 495-496, Sector 35-C
                      <br />
                      Chandigarh, Punjab 160022
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* WhatsApp Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://wa.me/917710705551", "_blank")}
                className="w-full mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#25D366]/90 rounded-2xl font-semibold transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </motion.button>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#D4A24C]/20">
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
                Office Hours
              </h3>
              <div className="space-y-2 text-[#1E1E1E]/70">
                <div className="flex justify-between">
                  <span>Monday – Saturday</span>
                  <span className="font-semibold text-[#0B1F3A]">
                    9:00 AM – 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-red-500">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#D4A24C]/20"
            >
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-6">
                Request Free Assessment
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Enter your full name"
                    className="h-12 rounded-2xl border-2 border-[#F5EFE6] focus:border-[#D4A24C]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                    Phone Number *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 77107 05551"
                    className="h-12 rounded-2xl border-2 border-[#F5EFE6] focus:border-[#D4A24C]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                    Email Address *
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    className="h-12 rounded-2xl border-2 border-[#F5EFE6] focus:border-[#D4A24C]"
                  />
                </div>

                {/* Country of Interest */}
                <div>
                  <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                    Country of Interest *
                  </label>
                  <Select
                    required
                    value={formData.country}
                    onValueChange={(value) =>
                      setFormData({ ...formData, country: value })
                    }
                  >
                    <SelectTrigger className="h-12 rounded-2xl border-2 border-[#F5EFE6] focus:border-[#D4A24C]">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Canada">🇨🇦 Canada</SelectItem>
                      <SelectItem value="Australia">🇦🇺 Australia</SelectItem>
                      <SelectItem value="UK">🇬🇧 United Kingdom</SelectItem>
                      <SelectItem value="USA">🇺🇸 USA</SelectItem>
                      <SelectItem value="Germany">🇩🇪 Germany</SelectItem>
                      <SelectItem value="Other">🌍 Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Visa Type */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                    Visa Type *
                  </label>
                  <Select
                    required
                    value={formData.visaType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, visaType: value })
                    }
                  >
                    <SelectTrigger className="h-12 rounded-2xl border-2 border-[#F5EFE6] focus:border-[#D4A24C]">
                      <SelectValue placeholder="Select visa type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Student Visa">Student Visa</SelectItem>
                      <SelectItem value="Work Visa">Work Visa</SelectItem>
                      <SelectItem value="PR Visa">PR Visa</SelectItem>
                      <SelectItem value="Tourist Visa">Tourist Visa</SelectItem>
                      <SelectItem value="Family Visa">
                        Family Sponsorship
                      </SelectItem>
                      <SelectItem value="Business Visa">Business Visa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your immigration goals..."
                    className="min-h-32 rounded-2xl border-2 border-[#F5EFE6] focus:border-[#D4A24C]"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 h-14 bg-gradient-to-r from-[#D4A24C] to-[#0B1F3A] hover:opacity-90 text-white rounded-2xl font-semibold shadow-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Request Free Assessment
                </Button>
              </div>

              <p className="text-xs text-[#1E1E1E]/60 text-center mt-4">
                By submitting, you agree to our privacy policy and terms of
                service
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
