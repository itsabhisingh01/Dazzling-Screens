"use client";

import { Phone, Mail, ChevronRight } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact-section"
      className="py-24 px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-[#1A1A1A] rounded-3xl p-12 border border-gray-800">

          {/* WhatsApp Icon */}
          <FaWhatsapp className="text-yellow-300 text-6xl mx-auto mb-6" />

          <h2 className="font-cinzel text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Our team replies in under 5 minutes
          </p>

          {/* Contact Methods */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            {/* Phone */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 text-lg hover:text-yellow-300 transition-colors"
            >
              <Phone className="text-yellow-300" size={22} />
              <span>+91 98765 43210</span>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@dazzlingscreens.com"
              className="flex items-center gap-3 text-lg hover:text-yellow-300 transition-colors"
            >
              <Mail className="text-yellow-300" size={22} />
              <span>hello@dazzlingscreens.com</span>
            </a>
          </div>

          {/* WhatsApp CTA */}
         <div className=" flex justify-center">
             <button className="px-10 py-4 bg-yellow-300 text-black cursor-pointer
           rounded-full font-bold text-lg hover:shadow-xl hover:shadow-yellow-300/50 transition-all glow-btn flex items-center justify-center gap-2">
            <FaWhatsapp className="text-black" size={22} />
            Chat on WhatsApp
          </button>
         </div>
        </div>
      </div>
    </section>
  );
}
