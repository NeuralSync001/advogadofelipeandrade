"use client";

import { contactInfo } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={contactInfo.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-[80] w-[52px] h-[52px] rounded-full bg-ink-black border border-goldline flex items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:border-gold-soft"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-[22px] h-[22px] text-gold-soft"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm5.29 14.13c-.23.64-1.13 1.18-1.86 1.33-.5.1-1.15.19-3.35-.72-2.8-1.16-4.6-4-4.74-4.19-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.05.98-2.33.26-.28.56-.35.75-.35h.53c.17 0 .4-.02.62.48.23.53.78 1.83.85 1.97.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.16 1.33Z" />
      </svg>
    </a>
  );
}
