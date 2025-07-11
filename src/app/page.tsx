"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export default function Home() {
  // Testimonials data
  const testimonials = [
    {
      initials: "AJ",
      initialsColor: "#5a5ad6",
      text: '"Sandblox bridges the gap we\'ve been trying to close for years—between curriculum and real-life readiness."',
      author: "Mr. Bennett,",
      role: "High School Educator",
      cardBg: "bg-[#5a5ad6]",
    },
    {
      initials: "MR",
      initialsColor: "#a41e1e",
      text: "\"This isn't just a game—it's a mindset shift. Students are more engaged, more confident, and thinking beyond the classroom.\"",
      author: "Ms. Rodriguez,",
      role: "Teacher, Westview Academy",
      cardBg: "bg-[#a41e1e]",
    },
    // Duplicate for demo
    {
      initials: "AJ",
      initialsColor: "#5a5ad6",
      text: '"Sandblox bridges the gap we\'ve been trying to close for years—between curriculum and real-life readiness."',
      author: "Mr. Bennett,",
      role: "High School Educator",
      cardBg: "bg-[#5a5ad6]",
    },
    {
      initials: "MR",
      initialsColor: "#a41e1e",
      text: "\"This isn't just a game—it's a mindset shift. Students are more engaged, more confident, and thinking beyond the classroom.\"",
      author: "Ms. Rodriguez,",
      role: "Teacher, Westview Academy",
      cardBg: "bg-[#a41e1e]",
    },
    {
      initials: "AJ",
      initialsColor: "#5a5ad6",
      text: '"Sandblox bridges the gap we\'ve been trying to close for years—between curriculum and real-life readiness."',
      author: "Mr. Bennett,",
      role: "High School Educator",
      cardBg: "bg-[#5a5ad6]",
    },
    {
      initials: "MR",
      initialsColor: "#a41e1e",
      text: "\"This isn't just a game—it's a mindset shift. Students are more engaged, more confident, and thinking beyond the classroom.\"",
      author: "Ms. Rodriguez,",
      role: "Teacher, Westview Academy",
      cardBg: "bg-[#a41e1e]",
    },
  ];

  const [testimonialPage, setTestimonialPage] = useState(0);
  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  const startIdx = testimonialPage * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    startIdx,
    startIdx + testimonialsPerPage
  );

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-white gap-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="px-16 flex-1 flex flex-col gap-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black italic leading-tight">
            IGNITE YOUR FUTURE WITH{" "}
            <span className="text-[#a41e1e]">SANDBLOX</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            An innovative board game that prepares high school students for
            real-world challenges through interactive gameplay, skill-building,
            and personalized experiences.
          </p>
          <div className="flex gap-4 mt-2">
            <button className="bg-yellow-400 text-black font-bold px-6 py-2 italic rounded shadow hover:bg-yellow-300 transition">
              EXPLORE THE GAME
            </button>
            <button className="bg-white border-2 border-[#a41e1e] text-[#a41e1e] font-bold px-6 py-2 italic rounded shadow hover:bg-[#a41e1e] hover:text-white transition">
              FOR EDUCATORS
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <Image
              src="/Home-Page/2.webp"
              alt="Students playing Sandblox"
              width={400}
              height={260}
              className="rounded-lg shadow-lg border-4 border-white"
            />
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-400 rounded"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-yellow-400 rounded"></div>
          </div>
        </div>
      </motion.section>

      {/* How Sandblox Works */}
      <section className="bg-gray-100 py-20 px-8">
        <motion.h2
          className="text-5xl font-extrabold text-black italic text-center mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          HOW <span className="text-[#a41e1e]">SANDBLOX</span> WORKS
        </motion.h2>
        <motion.p
          className="text-center text-gray-700 mb-8 py-6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          Preparing students for real-world success through an engaging board
          game experience
        </motion.p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto justify-items-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Feature Cards: wrap each card in motion.div for staggered animation */}
          {/* Feature 1 */}
          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col items-center min-h-[270px] h-70 max-w-[300px] w-full"
          >
            <div className="absolute top-3 left-3 w-full h-full bg-black rounded z-0"></div>
            <div className="relative bg-white border-2 border-black rounded z-10 w-full h-full p-6 flex flex-col items-center text-center">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-blue-400 rounded-lg flex items-center justify-center shadow-md">
                <Image
                  src="/Home-Page/3a.webp"
                  alt="Real-world Skills"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div className="mt-8 flex-1 flex flex-col justify-center">
                <h3 className="font-extrabold italic text-black text-2xl mb-2">
                  REAL-WORLD SKILLS
                </h3>
                <p className="text-black text-base font-normal">
                  Financial literacy, leadership, communication–skills that
                  matter, taught through experience.
                </p>
              </div>
            </div>
          </motion.div>
          {/* Feature 2 */}
          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col items-center min-h-[270px] h-70 max-w-[300px] w-full"
          >
            <div className="absolute top-3 left-3 w-full h-full bg-black rounded z-0"></div>
            <div className="relative bg-white border-2 border-black rounded z-10 w-full h-full p-6 flex flex-col items-center text-center">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-purple-400 rounded-lg flex items-center justify-center shadow-md">
                <Image
                  src="/Home-Page/3b.webp"
                  alt="Personalized Learning"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div className="mt-8 flex-1 flex flex-col justify-center">
                <h3 className="font-extrabold italic text-black text-2xl mb-2">
                  PERSONALIZED LEARNING
                </h3>
                <p className="text-black text-base font-normal">
                  Every journey adapts to the player&apos;s strengths, goals,
                  and personality.
                </p>
              </div>
            </div>
          </motion.div>
          {/* Feature 3 */}
          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col items-center min-h-[270px] h-70 max-w-[300px] w-full"
          >
            <div className="absolute top-3 left-3 w-full h-full bg-black rounded z-0"></div>
            <div className="relative bg-white border-2 border-black rounded z-10 w-full h-full p-6 flex flex-col items-center text-center">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                <Image
                  src="/Home-Page/3c.webp"
                  alt="Mentorship that Matters"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div className="mt-8 flex-1 flex flex-col justify-center">
                <h3 className="font-extrabold italic text-black text-2xl mb-2">
                  MENTORSHIP THAT MATTERS
                </h3>
                <p className="text-black text-base font-normal">
                  Guided by real mentors who turn decisions into growth.
                </p>
              </div>
            </div>
          </motion.div>
          {/* Feature 4 */}
          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col items-center min-h-[270px] h-70 max-w-[300px] w-full"
          >
            <div className="absolute top-3 left-3 w-full h-full bg-black rounded z-0"></div>
            <div className="relative bg-white border-2 border-black rounded z-10 w-full h-full p-6 flex flex-col items-center text-center">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center shadow-md">
                <Image
                  src="/Home-Page/3d.webp"
                  alt="Purpose-driven Play"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div className="mt-8 flex-1 flex flex-col justify-center">
                <h3 className="font-extrabold italic text-black text-2xl mb-2">
                  PURPOSE-DRIVEN PLAY
                </h3>
                <p className="text-black text-base font-normal">
                  Game-based challenges that help teens explore who they are and
                  where they&apos;re headed.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <motion.section
        className="bg-white py-12 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-extrabold text-black italic text-center mb-2">
          WHAT STUDENTS & EDUCATORS SAY
        </h2>
        <p className="text-center text-gray-700 mb-8">
          Hear from those who&apos;ve experienced the Sandblox difference
        </p>
        <div className="mt-20 flex flex-row gap-8 max-w-4xl mx-auto justify-center items-stretch relative">
          {/* Left arrow */}
          <button
            className="absolute left-[-48px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:border-[#a41e1e] hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-20 transition-transform duration-150 hover:scale-110"
            onClick={() =>
              setTestimonialPage((prev) => (prev - 1 + totalPages) % totalPages)
            }
            aria-label="Previous testimonials"
          >
            {/* Left Chevron SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-7 h-7 text-[#a41e1e]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          {/* Testimonials */}
          {currentTestimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`relative flex flex-col items-center min-h-[270px] h-80 max-w-[350px] w-full`}
              variants={fadeInUp}
            >
              <div className="absolute top-3 left-3 w-full h-full bg-black rounded z-0"></div>
              <div
                className={`relative ${t.cardBg} border-2 border-black rounded z-10 w-full h-full p-6 flex flex-col items-center text-center`}
              >
                {/* Icon with initials */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-md border-2 border-gray-200 relative">
                    <span
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold"
                      style={{ color: t.initialsColor }}
                    >
                      {t.initials}
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex-1 flex flex-col justify-center">
                  <p className="text-yellow-400 text-lg font-semibold mb-4">
                    {t.text}
                  </p>
                  <div className="mt-5 text-white text-lg font-bold">
                    {t.author}
                    <br />
                    <span className="text-white font-normal">{t.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Right arrow */}
          <button
            className="absolute right-[-48px] top-1/2 -translate-y-1/2 bg-white border border-gray-300 hover:border-[#a41e1e] hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-20 transition-transform duration-150 hover:scale-110"
            onClick={() =>
              setTestimonialPage((prev) => (prev + 1) % totalPages)
            }
            aria-label="Next testimonials"
          >
            {/* Right Chevron SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-7 h-7 text-[#a41e1e]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${
                testimonialPage === idx ? "bg-[#a41e1e]" : "bg-gray-300"
              }`}
              onClick={() => setTestimonialPage(idx)}
              aria-label={`Go to testimonials page ${idx + 1}`}
            />
          ))}
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="bg-[#333] pt-12 px-16 flex flex-col md:flex-row items-center justify-between gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="flex-1 flex flex-col gap-4 pl-16">
          <h2 className="text-5xl font-extrabold text-white italic mb-2">
            READY FOR YOUR SCHOOL TO GET{" "}
            <span className="text-yellow-400">STARTED?</span>
          </h2>
          <p className="text-white mb-4">
            Join the growing network of schools using Sandblox to prepare
            students for real-world success.
          </p>
          <button className="bg-yellow-400 italic text-black font-bold px-6 py-2 rounded shadow hover:bg-yellow-300 transition w-fit">
            GET <span className="text-[#a41e1e]"> STARTED</span>
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative flex items-center justify-center w-fit">
            <Image
              src="/Home-Page/5.webp"
              alt="Ready Set Play"
              width={750}
              height={700}
            />
            <span className="absolute inset-0 flex flex-col items-center justify-center text-[#a41e1e] text-5xl font-extrabold italic -mr-110">
              READY,
              <br />
              SET,
              <br />
              PLAY
            </span>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
