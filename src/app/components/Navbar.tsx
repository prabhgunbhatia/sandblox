"use client";

import React, { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className="w-full bg-[#a41e1e] flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-4 shadow-md relative"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/Home-Page/1a.webp"
            alt="Sandblox Logo"
            width={140}
            height={40}
            className="h-8 sm:h-10 w-auto"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 text-white font-semibold italic text-lg pr-24 items-center">
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

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-[#a41e1e] shadow-lg lg:hidden z-50"
        >
          <ul className="flex flex-col text-white font-semibold italic text-lg">
            <li>
              <Link
                href="/"
                className={`block px-6 py-3 border-b border-red-800 ${
                  pathname === "/" ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
                onClick={closeMenu}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block px-6 py-3 border-b border-red-800 ${
                  pathname === "/about"
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
                onClick={closeMenu}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/game"
                className={`block px-6 py-3 border-b border-red-800 ${
                  pathname === "/game"
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
                onClick={closeMenu}
              >
                GAME
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className={`block px-6 py-3 border-b border-red-800 ${
                  pathname === "/skills"
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
                onClick={closeMenu}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                href="/join"
                className={`block px-6 py-3 border-b border-red-800 ${
                  pathname === "/join"
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
                onClick={closeMenu}
              >
                JOIN
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className={`block px-6 py-3 border-b border-red-800 ${
                  pathname === "/events"
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
                onClick={closeMenu}
              >
                EVENTS
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block px-6 py-3 border-b border-red-800 ${
                  pathname === "/contact"
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
                onClick={closeMenu}
              >
                CONTACT
              </Link>
            </li>
            <li className="px-6 py-3">
              <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded shadow hover:bg-yellow-300 transition w-full">
                DONATE
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
