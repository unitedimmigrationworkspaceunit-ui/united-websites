import { motion } from 'motion/react';
import { Instagram, Facebook, MessageCircle, Phone, Mail } from 'lucide-react';

export function SocialMediaSection() {
  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/917710705551?text=Hi!+I+want+to+enquire+about+visa+services.',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/unitedimmigrationservicespvt',
      gradient: 'from-pink-500 via-purple-500 to-orange-500',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/share/18fYWem5Ey/',
      gradient: 'from-blue-600 to-blue-700',
    },
    {
      icon: Phone,
      label: 'Call Us',
      href: 'tel:+917710705551',
      gradient: 'from-[#D4A24C] to-[#B8892E]',
    },
    {
      icon: Mail,
      label: 'Email Us',
      href: 'mailto:team@unitedimmigration-services.com',
      gradient: 'from-purple-500 to-purple-700',
    },
  ];

  const contactMethods = [
    { icon: Phone, label: 'Call Us', value: '+91 77107 05551', href: 'tel:+917710705551' },
    { icon: Mail, label: 'Email Us', value: 'team@unitedimmigration-services.com', href: 'mailto:team@unitedimmigration-services.com' },
  ];

  return (
    <section id="connect" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-[#F5EFE6] text-[#D4A24C] rounded-full text-sm font-semibold mb-4"
          >
            Stay Connected
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#0B1F3A] mb-3"
          >
            Connect With Us
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl mx-auto"
          >
            Reach us on your preferred platform. We respond within minutes on WhatsApp.
          </motion.p>
        </div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.12, y: -6 }}
                className={`group relative w-16 h-16 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all`}
              >
                <Icon className="w-8 h-8 text-white" />
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0B1F3A] text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap pointer-events-none z-10">
                  {social.label}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-[#0B1F3A]" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-5"
        >
          {contactMethods.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center space-x-3 bg-gradient-to-r from-[#F5EFE6] to-white px-6 py-4 rounded-xl border border-[#D4A24C]/20 hover:border-[#D4A24C] hover:shadow-lg transition-all group"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-[#D4A24C] to-[#B8892E] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{contact.label}</p>
                  <p className="font-semibold text-[#0B1F3A] text-sm">{contact.value}</p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
