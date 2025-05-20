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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-8 pb-10 pt-4">
        <div className="flex flex-col gap-2">
          <Image
            src="/Home Page/1a.webp"
            alt="Sandblox Logo"
            width={180}
            height={48}
            className="mb-2"
          />
          <p className="text-sm max-w-xs">
            Preparing students for real-world challenges through interactive
            gameplay.
          </p>
          <div className="flex gap-2 mt-2">
            <a href="#">
              <Image
                src="/Home Page/6d.webp"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/Home Page/6b.webp"
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/Home Page/6c.webp"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-[#a41e1e] italic mb-1">
            SITE LINKS
          </span>
          <a href="#" className="hover:text-[#a41e1e]">
            Home
          </a>
          <a href="#" className="hover:text-[#a41e1e]">
            About
          </a>
          <a href="#" className="hover:text-[#a41e1e]">
            Game
          </a>
          <a href="#" className="hover:text-[#a41e1e]">
            Skills
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-[#a41e1e] italic mb-1">
            RESOURCES
          </span>
          <a href="#" className="hover:text-[#a41e1e]">
            Join the Movement
          </a>
          <a href="#" className="hover:text-[#a41e1e]">
            Events & Pilots
          </a>
          <a href="#" className="hover:text-[#a41e1e]">
            Contact
          </a>
          <a href="#" className="hover:text-[#a41e1e]">
            Download App
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold text-[#a41e1e] italic mb-1">
            NEWSLETTER
          </span>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none"
            />
            <button className="bg-[#a41e1e] text-white px-4 py-2 rounded font-bold hover:bg-[#c0392b] italic">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="bg-yellow-500 text-center text-xs text-gray-600 border-t py-6">
        &copy; 2025 Sandblox. All rights reserved.
      </div>
    </motion.footer>
  );
}
