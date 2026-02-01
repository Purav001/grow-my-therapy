'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  version: 'clone' | 'redesign';
}

export default function FAQ({ version }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I know if therapy is right for me?',
      answer: 'If you\'re feeling overwhelmed, stuck, or noticing patterns that no longer serve you, therapy can help. Many clients come when they\'re functioning well externally but struggling internally with anxiety, stress, or past experiences affecting their present life.'
    },
    {
      question: 'What can I expect in the first session?',
      answer: 'The first session is about getting to know each other and understanding what brings you to therapy. We\'ll discuss your goals, concerns, and history, and I\'ll explain how we might work together. This is also your opportunity to ask questions and see if we\'re a good fit.'
    },
    {
      question: 'How long does therapy typically take?',
      answer: 'This varies based on individual needs and goals. Some clients find relief in a few months of focused work, while others prefer ongoing support. We\'ll regularly check in about your progress and adjust as needed. You\'re always in control of the timeline.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'I\'m an out-of-network provider, which means I don\'t bill insurance directly. However, many clients can receive partial reimbursement from their insurance company. I provide detailed receipts (superbills) that you can submit to your insurance for potential reimbursement.'
    },
    {
      question: 'What\'s the difference between in-person and telehealth?',
      answer: 'Both formats are equally effective. In-person sessions offer the experience of my office environment, while telehealth provides flexibility and eliminates travel time. Many clients appreciate having both options available depending on their schedule and preferences.'
    },
    {
      question: 'Is what we discuss confidential?',
      answer: 'Yes, confidentiality is a cornerstone of therapy. What you share is protected by law and ethical guidelines. There are limited exceptions (such as risk of harm), which I\'ll discuss with you in our first session. Your privacy and trust are paramount.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (version === 'clone') {
    return (
      <section className="bg-[#F5EFE6] py-24">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl text-[#2F4156] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-[#F5EFE6] transition-colors"
                >
                  <span className="text-lg font-medium text-[#2F4156]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#567C8D] transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-[#567C8D] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-[#F5EFE6] to-white py-32">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold text-[#2F4156] mb-6">
            Common Questions
          </h2>
          <p className="text-xl text-[#567C8D] leading-relaxed">
            Everything you need to know about starting therapy
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left group"
              >
                <span className="text-xl font-semibold text-[#2F4156] pr-8 group-hover:text-[#567C8D] transition-colors">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 bg-[#F5EFE6] rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? 'bg-[#567C8D]' : ''
                }`}>
                  <ChevronDown
                    className={`w-5 h-5 transition-all ${
                      openIndex === index
                        ? 'rotate-180 text-white'
                        : 'text-[#567C8D]'
                    }`}
                  />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-8 pb-6">
                  <p className="text-lg text-[#567C8D] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
