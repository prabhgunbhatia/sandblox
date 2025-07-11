"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-[#f3f3f3] text-black pt-8 pb-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 px-4 sm:px-8 md:px-16 pb-10 pt-4">
        {/* Logo and Description */}
        <div className="flex flex-col gap-2 w-full lg:w-auto">
          <Image
            src="/Home-Page/1a.webp"
            alt="Sandblox Logo"
            width={180}
            height={48}
            className="mb-2 w-32 sm:w-40 lg:w-auto"
          />
          <p className="text-sm max-w-xs">
            Preparing students for real-world challenges through interactive
            gameplay.
          </p>
          <div className="flex gap-2 mt-2">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/Home-Page/6d.webp"
                alt="Instagram"
                width={24}
                height={24}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/Home-Page/6b.webp"
                alt="Twitter"
                width={24}
                height={24}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/Home-Page/6c.webp"
                alt="Facebook"
                width={24}
                height={24}
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 lg:flex lg:flex-row gap-8 lg:gap-16 w-full lg:w-auto">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-[#a41e1e] italic mb-2 text-sm sm:text-base">
              SITE LINKS
            </span>
            <a
              href="#"
              className="hover:text-[#a41e1e] text-sm sm:text-base transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-[#a41e1e] text-sm sm:text-base transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-[#a41e1e] text-sm sm:text-base transition-colors"
            >
              Game
            </a>
            <a
              href="#"
              className="hover:text-[#a41e1e] text-sm sm:text-base transition-colors"
            >
              Skills
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-[#a41e1e] italic mb-2 text-sm sm:text-base">
              RESOURCES
            </span>
            <a
              href="#"
              className="hover:text-[#a41e1e] text-sm sm:text-base transition-colors"
            >
              Join the Movement
            </a>
            <a
              href="#"
              className="hover:text-[#a41e1e] text-sm sm:text-base transition-colors"
            >
              Events & Pilots
            </a>
            <a
              href="#"
              className="hover:text-[#a41e1e] text-sm sm:text-base transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="hover:text-[#a41e1e] text-sm sm:text-base transition-colors"
            >
              Download App
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-2 w-full lg:w-auto">
          <span className="font-bold text-[#a41e1e] italic mb-2 text-sm sm:text-base">
            NEWSLETTER
          </span>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-[#a41e1e] text-sm sm:text-base"
            />
            <button className="bg-[#a41e1e] text-white px-4 py-2 rounded font-bold hover:bg-[#c0392b] italic transition-colors text-sm sm:text-base whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="bg-yellow-500 text-center text-xs text-gray-600 border-t py-4 sm:py-6 px-4">
        &copy; 2025 Sandblox. All rights reserved.
      </div>
    </motion.footer>
  );
}
