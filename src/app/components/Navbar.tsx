"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="w-full bg-[#a41e1e] flex items-center justify-between px-24 py-4 shadow-md"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src="/Home-Page/1a.webp"
            alt="Sandblox Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
      </div>
      <ul className="hidden md:flex gap-6 text-white font-semibold italic text-lg pr-24 items-center">
        <li>
          <Link
            href="/"
            className={
              pathname === "/" ? "text-yellow-400" : "hover:text-yellow-400"
            }
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            href="/game"
            className={
              pathname === "/game" ? "text-yellow-400" : "hover:text-yellow-400"
            }
          >
            GAME
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className={
              pathname === "/skills"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }
          >
            SKILLS
          </Link>
        </li>
        <li>
          <Link
            href="/join"
            className={
              pathname === "/join" ? "text-yellow-400" : "hover:text-yellow-400"
            }
          >
            JOIN
          </Link>
        </li>
        <li>
          <Link
            href="/events"
            className={
              pathname === "/events"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }
          >
            EVENTS
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }
          >
            CONTACT
          </Link>
        </li>

        <button className="bg-yellow-400 text-black font-bold px-4 py-1 rounded shadow hover:bg-yellow-300 transition">
          DONATE
        </button>
      </ul>
    </motion.nav>
  );
}
