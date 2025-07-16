"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import ComingSoonPopup from "../components/ComingSoonPopup";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Join() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      {/* Hero Section */}
      <motion.section
        className="w-full flex flex-col md:flex-row items-center justify-between px-12 md:px-24 py-16 gap-8 bg-[#f6f6f6] relative overflow-x-clip"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Decorative shape */}
        <div className="flex-1 flex flex-col gap-4 z-10">
          <h1 className="text-5xl md:text-5xl font-extrabold italic mb-4 text-black">
            JOIN THE <span className="text-[#a41e1e]">MOVEMENT</span>
          </h1>
          <p className="text-black text-lg mb-4 max-w-xl">
            Be part of the Sandblox community and help prepare the next
            generation for real-world success. There are many ways to get
            involved, whether you&apos;re a student, educator, school, or
            supporter.
          </p>
          <div className="flex gap-3">
            <button className="bg-yellow-400 text-black font-extrabold italic px-5 py-2 rounded shadow hover:bg-yellow-300 transition text-base">
              GET <span className="text-[#a41e1e]">STARTED</span>
            </button>
            <button className="bg-white text-[#a41e1e] border-2 border-[#a41e1e] font-extrabold italic px-5 py-2 rounded shadow hover:bg-red-700 hover:text-white transition text-base">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative z-10">
          <div className="relative">
            <Image
              src="/Join-Page/2.webp"
              alt="Students collaborating"
              width={630}
              height={420}
            />
            {/* Decorative shape */}
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-green-500 rounded-md -rotate-12 z-20" />
          </div>
        </div>
      </motion.section>

      {/* Get Involved Section */}
      <motion.section
        className="w-full pt-8 pb-2 px-8 md:px-24 bg-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Decorative shapes */}
        <div className="hidden md:block absolute left-8 top-8 w-8 h-8 bg-[#a259ff] rounded-lg rotate-12 z-0" />
        <div className="hidden md:block absolute right-24 top-24 w-6 h-6 bg-[#36f] rounded-md -rotate-12 z-0" />
        <h2 className="text-4xl font-extrabold text-black text-center mb-2 italic">
          GET INVOLVED
        </h2>
        <p className="text-center text-black text-lg mb-6">
          Choose how you want to participate in the Sandblox mission
        </p>
        <div className="flex justify-center mb-12">
          <button className="bg-yellow-400 text-black font-extrabold w-full max-w-8xl py-5 rounded-2xl shadow hover:bg-yellow-300 transition text-xl tracking-wide">
            Bring Sandblox to Your School
          </button>
        </div>
      </motion.section>

      {/* Participation Cards Section */}
      <motion.section
        className="w-full pb-12 mt-2 px-8 md:px-24 bg-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Decorative shapes */}
        <div className="hidden md:block absolute right-10 top-1/2 w-6 h-6 bg-[#fc0] rounded-md -rotate-12 z-0" />
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: FOR SCHOOLS (tall card) */}
          <div className="bg-blue-100/60 rounded-2xl shadow-lg border border-blue-200 p-8 flex flex-col justify-between min-h-[340px] text-left">
            <div className="flex flex-row items-center gap-4 mb-2">
              <Image
                src="/Join-Page/4a.webp"
                alt="School"
                width={75}
                height={75}
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-blue-600 italic text-4xl md:text-5xl leading-tight">
                  FOR SCHOOLS
                </span>
                <span className="font-bold text-lg text-black">
                  Build a Culture of Readiness
                </span>
              </div>
            </div>

            <p className="text-gray-700 text-base">
              Use Sandblox to spark real-world skill-building in your classroom.
              It&apos;s easy to integrate into{" "}
              <span className="font-bold">
                career, wellness, or advisory programs
              </span>{" "}
              and comes with ready-to-use guides that support meaningful,{" "}
              <span className="font-bold">student-led learning</span>.
            </p>
            <div className="space-y-1">
              <div className="font-bold text-blue-700 text-base">
                - Full curriculum integration
              </div>
              <div className="font-bold text-blue-700 text-base">
                - Teacher training and support
              </div>
              <div className="font-bold text-blue-700 text-base">
                - Implementation frameworks
              </div>
              <div className="font-bold text-blue-700 text-base">
                - Ongoing assessment tools
              </div>
            </div>
          </div>
          {/* Right: Stacked cards */}
          <div className="flex flex-col gap-8">
            {/* FOR EDUCATORS */}
            <div className="bg-white rounded-2xl shadow-lg border border-blue-200 p-8 flex flex-col justify-between min-h-[150px] text-left">
              <div className="flex flex-row items-center gap-4 mb-2">
                <Image
                  src="/Join-Page/4b.webp"
                  alt="Educator"
                  width={75}
                  height={75}
                />
                <div className="flex flex-col">
                  <span className="font-extrabold text-blue-600 italic text-2xl md:text-4xl leading-tight">
                    FOR EDUCATORS
                  </span>
                  <span className="font-bold text-lg text-black">
                    Empower Learning Through Play
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-base">
                Bring Sandblox into your classroom to build real-world skills
                through engaging, curriculum-aligned gameplay. Perfect for
                advisory, careers, or wellness classes. It includes guides and
                reflection tools to support easy, impactful use.
              </p>
            </div>
            {/* FOR COMMUNITY & PARTNER */}
            <div className="bg-white rounded-2xl shadow-lg border border-blue-200 p-8 flex flex-col justify-between min-h-[150px] text-left">
              <div className="flex flex-row items-center gap-4 mb-2">
                <Image
                  src="/Join-Page/4c.webp"
                  alt="Community & Partner"
                  width={75}
                  height={75}
                />
                <div className="flex flex-col">
                  <span className="font-extrabold text-blue-600 italic text-2xl md:text-4xl leading-tight">
                    FOR COMMUNITY & PARTNER
                  </span>
                  <span className="font-bold text-lg text-black">
                    Support Future-Ready Students
                  </span>
                </div>
              </div>
              <p className="text-gray-700 text-base">
                Local partners can sponsor or co-host Sandblox events, bringing
                real-world experience into schools and showing students their
                community supports their success.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowComingSoon(true)}
            className="bg-blue-600 text-white font-extrabold w-full max-w-8xl py-5 rounded-2xl shadow hover:bg-blue-500 transition text-xl tracking-wide"
          >
            Contact Us
          </button>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section
        className="w-full bg-yellow-400 py-16 px-8 md:px-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Decorative shapes */}
        <div className="hidden md:block absolute left-10 top-10 w-10 h-10 bg-[#6cf] rounded-lg rotate-12 z-0" />
        <div className="hidden md:block absolute right-24 bottom-8 w-8 h-8 bg-[#a259ff] rounded-lg -rotate-12 z-0" />
        <h2 className="text-4xl font-extrabold italic text-black text-center mb-2">
          OUR GOALS FOR 2025-2026
        </h2>
        <p className="text-center text-black text-lg mb-8">
          Together, we&apos;re making a difference in students&apos; lives
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto mb-12">
          <div className="bg-white shadow-[6px_6px_0_#000] p-10 flex flex-col items-center justify-center min-w-[200px] min-h-[120px]">
            <span className="text-5xl font-extrabold text-[#a41e1e] mb-2">
              16
            </span>
            <span className="font-extrabold text-black text-lg text-center italic uppercase">
              Schools
            </span>
          </div>
          <div className="bg-white shadow-[6px_6px_0_#000] p-10 flex flex-col items-center justify-center min-w-[200px] min-h-[120px]">
            <span className="text-5xl font-extrabold text-[#a41e1e] mb-2">
              1,200+
            </span>
            <span className="font-extrabold text-black text-lg text-center italic uppercase">
              Student Reached
            </span>
          </div>
          <div className="bg-white shadow-[6px_6px_0_#000] p-10 flex flex-col items-center justify-center min-w-[200px] min-h-[120px]">
            <span className="text-5xl font-extrabold text-[#a41e1e] mb-2">
              87%
            </span>
            <span className="font-extrabold text-black text-lg text-center italic uppercase">
              Skill Improvement
            </span>
          </div>
          <div className="bg-white shadow-[6px_6px_0_#000] p-10 flex flex-col items-center justify-center min-w-[200px] min-h-[120px]">
            <span className="text-5xl font-extrabold text-[#a41e1e] mb-2">
              24
            </span>
            <span className="font-extrabold text-black text-lg text-center italic uppercase">
              Partner Organizations
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setShowComingSoon(true)}
            className="bg-[#a259ff] text-white font-extrabold italic uppercase px-10 py-4 shadow-[6px_6px_0_#000] rounded-none text-lg tracking-wide hover:bg-purple-400 transition"
          >
            Read Our Impact Report
          </button>
        </div>
      </motion.section>

      {/* Stay Connected Section */}
      <motion.section
        className="w-full bg-[#232323] py-16 px-8 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-extrabold text-white text-center italic mb-2">
          STAY CONNECTED
        </h2>
        <p className="text-center text-white text-lg mb-8">
          Join our newsletter to receive updates, success stories, and
          opportunities to get involved.
        </p>
        <div className="flex justify-center mb-8">
          <input
            type="email"
            placeholder="Your email"
            className="px-6 py-3 rounded-l bg-white text-black text-lg focus:outline-none min-w-[260px]"
          />
          <button
            onClick={() => setShowComingSoon(true)}
            className="bg-[#a41e1e] text-white font-extrabold px-8 py-3 italic rounded-r shadow hover:bg-red-700 transition text-lg"
          >
            SUBSCRIBE
          </button>
        </div>
      </motion.section>
      <Footer />
      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
      />
    </div>
  );
}
