"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.18 } },
};

export default function Join() {
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
              src="/Join Page/2.webp"
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
        className="w-full py-8 px-8 md:px-24 bg-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-extrabold text-black text-center mb-2">
          GET INVOLVED
        </h2>
        <p className="text-center text-black text-lg mb-6">
          Choose how you want to participate in the Sandblox mission
        </p>
        <div className="flex justify-center mb-12">
          <button className="bg-yellow-400 text-black font-extrabold w-full max-w-3xl py-5 rounded shadow hover:bg-yellow-300 transition text-xl tracking-wide">
            Bring Sandblox to Your School
          </button>
        </div>
        {/* Decorative shape */}
      </motion.section>

      {/* Participation Cards Section */}
      <motion.section
        className="w-full py-4 px-8 md:px-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={stagger}
        >
          {/* For Schools */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#eaf1fb] rounded-xl border-2 border-blue-300 p-8 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl text-blue-600">🏫</span>
              <span className="font-extrabold text-blue-700 text-xl">
                FOR SCHOOLS
              </span>
            </div>
            <span className="font-bold text-base text-blue-700 mb-1">
              Build a Culture of Readiness
            </span>
            <p className="text-black text-base mb-2">
              Use Sandblox to spark real-world skill-building in your classroom.
              It&apos;s easy to integrate into career, wellness, or advisory
              programs and comes with ready-to-use guides that support
              meaningful, student-led learning.
            </p>
            <ul className="list-disc pl-6 text-blue-700 text-base">
              <li>Full curriculum integration</li>
              <li>Teacher training and support</li>
              <li>Implementation frameworks</li>
              <li>Ongoing assessment tools</li>
            </ul>
          </motion.div>
          {/* For Educators */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#eaf1fb] rounded-xl border-2 border-blue-300 p-8 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl text-blue-600">🎓</span>
              <span className="font-extrabold text-blue-700 text-xl">
                FOR EDUCATORS
              </span>
            </div>
            <span className="font-bold text-base text-blue-700 mb-1">
              Empower Learning Through Play
            </span>
            <p className="text-black text-base mb-2">
              Bring Sandblox into your classroom to build real-world skills
              through engaging, curriculum-aligned gameplay. Perfect for
              advisory, careers, or wellness classes. It includes guides and
              reflection tools to support easy, impactful use.
            </p>
          </motion.div>
          {/* For Community & Partner */}
          <motion.div
            variants={fadeInUp}
            className="bg-[#eaf1fb] rounded-xl border-2 border-blue-300 p-8 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl text-purple-600">🤝</span>
              <span className="font-extrabold text-purple-700 text-xl">
                FOR COMMUNITY & PARTNER
              </span>
            </div>
            <span className="font-bold text-base text-purple-700 mb-1">
              Support Future-Ready Students
            </span>
            <p className="text-black text-base mb-2">
              Local partners can sponsor or co-host Sandblox events, bringing
              real-world experience into schools and showing students their
              community supports their success.
            </p>
          </motion.div>
        </motion.div>
        <div className="flex justify-center mt-10">
          <button className="bg-blue-600 text-white font-extrabold w-full max-w-2xl py-5 rounded shadow hover:bg-blue-500 transition text-xl tracking-wide">
            Contact Us
          </button>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section
        className="w-full bg-yellow-400 py-16 px-8 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-extrabold italic text-black text-center mb-2">
          OUR IMPACT
        </h2>
        <p className="text-center text-black text-lg mb-8">
          Together, we&apos;re making a difference in students&apos; lives
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-lg shadow-lg border-2 border-black p-8 flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold text-[#a41e1e] mb-2">
              42
            </span>
            <span className="font-extrabold text-black text-lg">SCHOOLS</span>
          </div>
          <div className="bg-white rounded-lg shadow-lg border-2 border-black p-8 flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold text-[#a41e1e] mb-2">
              5,200+
            </span>
            <span className="font-extrabold text-black text-lg">
              STUDENT REACHED
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-lg border-2 border-black p-8 flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold text-[#a41e1e] mb-2">
              87%
            </span>
            <span className="font-extrabold text-black text-lg">
              SKILL IMPROVEMENT
            </span>
          </div>
          <div className="bg-white rounded-lg shadow-lg border-2 border-black p-8 flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold text-[#a41e1e] mb-2">
              24
            </span>
            <span className="font-extrabold text-black text-lg">
              PARTNER ORGANIZATIONS
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#a259ff] text-white font-extrabold px-10 py-4 rounded shadow hover:bg-purple-400 transition text-lg">
            READ OUR IMPACT REPORT
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
        <h2 className="text-3xl font-extrabold text-white text-center mb-2">
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
          <button className="bg-red-500 text-white font-extrabold px-8 py-3 rounded-r shadow hover:bg-red-600 transition text-lg">
            SUBSCRIBE
          </button>
        </div>
        <Footer />
      </motion.section>
    </div>
  );
}
