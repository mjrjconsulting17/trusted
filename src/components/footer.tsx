import Link from "next/link";
import { Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { name: "Men's Collection", href: "/products/mens" },
        { name: "Women's Collection", href: "/products/womens" },
        { name: "Kids Collection", href: "/products/kids" },
        { name: "New Arrivals", href: "/products/new" },
        { name: "Sale", href: "/products/sale" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Customer Service", href: "/support" },
        { name: "Size Guide", href: "/size-guide" },
        { name: "Shipping & Returns", href: "/shipping" },
        { name: "Track Your Order", href: "/track" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" },
        { name: "Store Locator", href: "/stores" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/trusted",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/trusted",
      icon: Twitter,
    },
    {
      name: "Email",
      href: "mailto:hello@trusted.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-200">
      {/* Newsletter Section */}
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-light text-slate-900 mb-4">
              Stay in the know
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Be the first to hear about new collections, exclusive offers, and special events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 border-slate-300 focus:border-slate-900 focus:ring-slate-900"
              />
              <Button className="bg-slate-900 text-white hover:bg-slate-800 px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <h2 className="text-3xl font-light text-slate-900">
                  TRUSTED
                </h2>
              </Link>
              <p className="text-slate-600 mb-8 leading-relaxed max-w-md">
                Premium streetwear for the modern individual. Crafted with attention to detail and designed for those who appreciate quality.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 text-slate-600">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <span>New York, NY</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <span>hello@trusted.com</span>
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-medium text-slate-900 mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-slate-500 text-sm">
              © {currentYear} TRUSTED. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-slate-500">
              <Link href="/privacy" className="hover:text-slate-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-700 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
