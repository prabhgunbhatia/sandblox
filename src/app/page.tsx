"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SimpleComingSoonPopup from "./components/SimpleComingSoonPopup";

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
  const [showComingSoon, setShowComingSoon] = useState(false);
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
        className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 lg:py-20 bg-white gap-8 lg:gap-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black italic leading-tight">
            IGNITE YOUR FUTURE WITH{" "}
            <span className="text-[#a41e1e]">SANDBLOX</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
            An innovative board game that prepares high school students for
            real-world challenges through interactive gameplay, skill-building,
            and personalized experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start">
            <button
              onClick={() => setShowComingSoon(true)}
              className="bg-yellow-400 text-black font-bold px-6 py-3 italic rounded shadow hover:bg-yellow-300 transition text-sm sm:text-base"
            >
              EXPLORE THE GAME
            </button>
            <button
              onClick={() => setShowComingSoon(true)}
              className="bg-white border-2 border-[#a41e1e] text-[#a41e1e] font-bold px-6 py-3 italic rounded shadow hover:bg-[#a41e1e] hover:text-white transition text-sm sm:text-base"
            >
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
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-lg border-4 border-white"
            />
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-4 sm:w-8 h-4 sm:h-8 bg-blue-400 rounded"></div>
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-4 sm:w-8 h-4 sm:h-8 bg-green-400 rounded"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 sm:w-8 h-4 sm:h-8 bg-purple-400 rounded"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-4 sm:w-8 h-4 sm:h-8 bg-yellow-400 rounded"></div>
          </div>
        </div>
      </motion.section>

      {/* How Sandblox Works */}
      <section className="bg-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-16">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black italic text-center mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          HOW <span className="text-[#a41e1e]">SANDBLOX</span> WORKS
        </motion.h2>
        <motion.p
          className="text-center text-gray-700 mb-8 py-4 sm:py-6 text-sm sm:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          Preparing students for real-world success through an engaging board
          game experience
        </motion.p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto justify-items-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Feature Cards: wrap each card in motion.div for staggered animation */}
          {/* Feature 1 */}
          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col items-center min-h-[250px] sm:min-h-[270px] max-w-[280px] sm:max-w-[300px] w-full"
          >
            <div className="absolute top-3 left-3 w-full h-full bg-black rounded z-0"></div>
            <div className="relative bg-white border-2 border-black rounded z-10 w-full h-full p-4 sm:p-6 flex flex-col items-center text-center">
              <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-blue-400 rounded-lg flex items-center justify-center shadow-md">
                <Image
                  src="/Home-Page/3a.webp"
                  alt="Real-world Skills"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <div className="mt-6 sm:mt-8 flex-1 flex flex-col justify-center">
                <h3 className="font-extrabold italic text-black text-lg sm:text-xl lg:text-2xl mb-2">
                  REAL-WORLD SKILLS
                </h3>
                <p className="text-black text-sm sm:text-base font-normal">
                  Financial literacy, leadership, communication–skills that
                  matter, taught through experience.
                </p>
              </div>
            </div>
          </motion.div>
          {/* Feature 2 */}
          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col items-center min-h-[250px] sm:min-h-[270px] max-w-[280px] sm:max-w-[300px] w-full"
          >
            <div className="absolute top-3 left-3 w-full h-full bg-black rounded z-0"></div>
            <div className="relative bg-white border-2 border-black rounded z-10 w-full h-full p-4 sm:p-6 flex flex-col items-center text-center">
              <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-green-400 rounded-lg flex items-center justify-center shadow-md">
                <Image
                  src="/Home-Page/3b.webp"
                  alt="Interactive Learning"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <div className="mt-6 sm:mt-8 flex-1 flex flex-col justify-center">
                <h3 className="font-extrabold italic text-black text-lg sm:text-xl lg:text-2xl mb-2">
                  INTERACTIVE LEARNING
                </h3>
                <p className="text-black text-sm sm:text-base font-normal">
                  Learn by doing. Every decision, every challenge, every
                  interaction builds real-world experience.
                </p>
              </div>
            </div>
          </motion.div>
          {/* Feature 3 */}
          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col items-center min-h-[250px] sm:min-h-[270px] max-w-[280px] sm:max-w-[300px] w-full"
          >
            <div className="absolute top-3 left-3 w-full h-full bg-black rounded z-0"></div>
            <div className="relative bg-white border-2 border-black rounded z-10 w-full h-full p-4 sm:p-6 flex flex-col items-center text-center">
              <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-purple-400 rounded-lg flex items-center justify-center shadow-md">
                <Image
                  src="/Home-Page/3c.webp"
                  alt="Personalized Experience"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <div className="mt-6 sm:mt-8 flex-1 flex flex-col justify-center">
                <h3 className="font-extrabold italic text-black text-lg sm:text-xl lg:text-2xl mb-2">
                  PERSONALIZED EXPERIENCE
                </h3>
                <p className="text-black text-sm sm:text-base font-normal">
                  Every student&apos;s journey is unique. Adapt to different
                  learning styles and career aspirations.
                </p>
              </div>
            </div>
          </motion.div>
          {/* Feature 4 */}
          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col items-center min-h-[250px] sm:min-h-[270px] max-w-[280px] sm:max-w-[300px] w-full"
          >
            <div className="absolute top-3 left-3 w-full h-full bg-black rounded z-0"></div>
            <div className="relative bg-white border-2 border-black rounded z-10 w-full h-full p-4 sm:p-6 flex flex-col items-center text-center">
              <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 rounded-lg flex items-center justify-center shadow-md">
                <Image
                  src="/Home-Page/3d.webp"
                  alt="Future Ready"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <div className="mt-6 sm:mt-8 flex-1 flex flex-col justify-center">
                <h3 className="font-extrabold italic text-black text-lg sm:text-xl lg:text-2xl mb-2">
                  FUTURE READY
                </h3>
                <p className="text-black text-sm sm:text-base font-normal">
                  Equip students with the confidence and skills they need to
                  thrive in tomorrow&apos;s world.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-16">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black italic text-center mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          WHAT <span className="text-[#a41e1e]">EDUCATORS</span> SAY
        </motion.h2>
        <motion.p
          className="text-center text-gray-700 mb-8 py-4 sm:py-6 text-sm sm:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          Real feedback from teachers and administrators who&apos;ve seen the
          impact
        </motion.p>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`${testimonial.cardBg} rounded-2xl p-6 sm:p-8 text-white shadow-lg`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0"
                  style={{ backgroundColor: testimonial.initialsColor }}
                >
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <p className="text-sm sm:text-base mb-4 italic leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      {testimonial.author}
                    </p>
                    <p className="text-sm opacity-90">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setTestimonialPage(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === testimonialPage
                  ? "bg-[#a41e1e]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#a41e1e] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-16">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white italic mb-4 sm:mb-6">
            READY TO TRANSFORM{" "}
            <span className="text-yellow-400">EDUCATION?</span>
          </h2>
          <p className="text-white text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join the revolution in student development. Bring Sandblox to your
            school and watch your students thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowComingSoon(true)}
              className="bg-yellow-400 text-black font-bold px-8 py-3 sm:px-10 sm:py-4 italic rounded shadow hover:bg-yellow-300 transition text-sm sm:text-base"
            >
              GET STARTED TODAY
            </button>
            <button
              onClick={() => setShowComingSoon(true)}
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 sm:px-10 sm:py-4 italic rounded shadow hover:bg-white hover:text-[#a41e1e] transition text-sm sm:text-base"
            >
              LEARN MORE
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />

      <SimpleComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
      />
    </div>
  );
}
