import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Are you open to full-time roles or freelance?",
    answer: "Yes! I'm currently open to full-time opportunities and selected freelance projects. Reach out to me down below and let's chat!",
  },
  {
    question: "What can you help with?",
    answer: "UX/UI design, front-end development, and UX/UI consulting or support. I can help with any design stage or code management from concept to final hand-off. From creating wireframes to high-fidelity prototypes, user journey mapping, storyboards, design systems, user research or evaluating user feedback. I can design or build the interface in great detail and in an organized manner, focusing on promoting best practices in terms of code and design, accessibility and more.  I can also help with visual design, AI and illustrations. See my resume for more details.",
  },
  {
    question: "What was this portfolio built with?",
    answer: "React, TypeScript, TailwindCSS and Framer Motion (which I love!).",
  },
  {
    question: "Where are you currently based?",
    answer: "Stockholm!",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="py-4 w-[700px]">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left font-dmsans border-b border-light-green font-light text-lg text-medium-black focus:outline-none"
          >
            {faq.question}
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="text-base text-medium-black mt-2 font-dmsans font-light">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}