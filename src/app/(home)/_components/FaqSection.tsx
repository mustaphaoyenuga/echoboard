"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "Can I collaborate with my team?",
    answer:
      "Yes, you can invite team members to your workspace, assign tasks, leave comments, and track progress in real-time.",
  },
  {
    question: "Is my data saved automatically?",
    answer:
      "Absolutely. All your changes are saved instantly and synced across all your devices so you never lose progress.",
  },
  {
    question: "Can I customize my boards and lists?",
    answer:
      "Yes, you can rename boards, create custom columns, apply labels, and reorder tasks using simple drag-and-drop actions.",
  },
  {
    question: "Does it work on mobile devices?",
    answer:
      "Yes, the app is fully responsive, allowing you to manage tasks seamlessly from your phone, tablet, or desktop.",
  },
  {
    question: "Is there a limit to how many boards I can create?",
    answer:
      "No, you can create as many boards as you like. Each board can hold multiple lists, tasks, and members.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center md:justify-start gap-8 px-6 md:px-8'>
      <div className='flex-1'>
        <div className='w-full flex justify-start mb-4'>
          <h2 className='font-semibold border rounded-full px-8 py-2 text-gray-800 bg-brand-50'>
            FAQs
          </h2>
        </div>
        <Image
          src='/svgs/questions.svg'
          alt='illustration of man and woman with a question mark'
          className='my-7'
          width={200}
          height={200}
        />
        <p className='text-5xl font-semibold'>Need Help?</p>
        <p>
          Find clear answers to most common questions to help you navigate our
          platform.
        </p>
      </div>

      <div className='flex-[1.3] flex flex-col gap-4 items-start text-left'>
        {faqs.map((faq, index) => (
          <div key={index} className='flex flex-col items-start w-full'>
            <div
              className='flex items-center justify-between w-full cursor-pointer border border-indigo-100 p-4 rounded'
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h2 className='text-sm'>{faq.question}</h2>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={`${
                  openIndex === index ? "rotate-180" : ""
                } transition-all duration-500 ease-in-out`}
              >
                <path
                  d='m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2'
                  stroke='#1D293D'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <p
              className={`text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                  : "opacity-0 max-h-0 -translate-y-2"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
