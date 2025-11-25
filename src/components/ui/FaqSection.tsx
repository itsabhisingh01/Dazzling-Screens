"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What makes private theatres different?",
    answer:
      "Private theatres offer an exclusive, personalized cinema experience with premium amenities, customizable decorations, and complete privacy for your celebrations.",
  },
  {
    question: "Can I bring my own cake?",
    answer:
      "Yes! You can bring your own cake or choose from our designer cake options. We also provide complimentary cake cutting arrangements.",
  },
  {
    question: "How many people are allowed?",
    answer:
      "It depends on the theatre you choose. Our venues accommodate from 4 to 10 people, with options for additional guests at nominal charges.",
  },
  {
    question: "Can I choose decorations?",
    answer:
      "Absolutely! We offer various decoration themes including birthday, anniversary, proposal, and custom themes based on your preferences.",
  },
  {
    question: "Is cancellation free?",
    answer:
      "Free cancellation is available up to 24 hours before your booking. Cancellations within 24 hours may incur a nominal charge.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq-section" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl font-bold mb-4">
            Frequently Asked <span className="text-yellow-300">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to know</p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="bg-dark-card rounded-2xl border border-gray-800 overflow-hidden group"
            >
              <summary className="px-8 py-6 cursor-pointer font-semibold text-lg flex items-center justify-between hover:text-yellow-300 transition-colors">
                {item.question}
                <ChevronDown className="group-open:rotate-180 transition-transform" />
              </summary>

              <div className="px-8 pb-6 text-gray-400">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
