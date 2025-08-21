"use client";

import Image from "next/image";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919999078888"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[999] bottom-5 left-5 hover:scale-110 transition-transform duration-200"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/assets/whatsapp.png"
        alt="WhatsApp"
        width={64}
        height={64}
        className="w-16 h-16"
      />
    </a>
  );
};

export default WhatsAppButton;
