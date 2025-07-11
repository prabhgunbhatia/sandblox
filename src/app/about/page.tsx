"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

// Team members data
const teamMembers = [
  {
    name: "ROMAN BUZAKER",
    role: "Founder & Program Architect",
    img: "/About-Page/4a.webp",
    color: "text-blue-700",
    desc: "Serial entrepreneur, father of three, and current COO of a publicly traded company. Leads the vision, structure, and product direction of Sandblox.",
  },
  {
    name: "DR. SARIT TRESSER",
    role: "Chief Product / Science Officer",
    img: "/About-Page/4b.webp",
    color: "text-purple-700",
    desc: "PhD in Occupational Therapy. Expert in neurodevelopment and executive innovation. Leads curriculum and product design.",
  },
  {
    name: "IGAL ROYTBLAT",
    role: "Chief Technology Officer (CTO)",
    img: "/About-Page/4c.webp",
    color: "text-green-700",
    desc: "Tech leader and AI architect. Oversees platform development, AI integration, and infrastructure.",
  },
  {
    name: "ASAF AKHALPERIN",
    role: "Chief Business Development",
    img: "/About-Page/4d.webp",
    color: "text-blue-700",
    desc: "Entrepreneur and strategist. Leads partner outreach, brand storytelling, and school engagement.",
  },
  {
    name: "AVI MEIDAN",
    role: "Advisor-Education <br /> (Israel)",
    img: "/About-Page/4e.webp",
    color: "text-yellow-700",
    desc: "Provides guidance on education and school partnerships and program implementation in the Israeli school system.",
  },
  {
    name: "DR. CASSIDY GONG",
    role: "Advisor-Curriculum <br /> (Global)",
    img: "/About-Page/4f.webp",
    color: "text-red-700",
    desc: "Advises on emotional, leadership, and academic development. Focused on holistic youth growth.",
  },
  {
    name: "DR. EDITA GROLMAN",
    role: "Advisor-AI & Innovation",
    img: "/About-Page/4g.webp",
    color: "text-purple-700",
    desc: "Advises on emotional, leadership, and academic development. Focused on holistic youth growth.",
  },
];

export default function About() {
  const [slide, setSlide] = useState(0);
  const slides = [teamMembers.slice(0, 4), teamMembers.slice(4, 7)];
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />

      {/* ABOUT SANDBLOX SECTION */}
      <motion.section
        className="w-full bg-[#333] flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-16 gap-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex-1 flex flex-col gap-4 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold italic mb-2">
            <span className="text-yellow-400">ABOUT </span>
            <span className="text-[#a41e1e]">SANDBLOX</span>
          </h1>
          <p className="text-lg font-medium">
            Sandblox is a gamified learning platform that helps teens and young
            adults discover who they are, build real-world skills, and grow into
            confident, purpose-driven leaders.
          </p>
          <p className="text-lg text-gray-200">
            Designed by a team of entrepreneurs, educators, psychologists, and
            teens, Sandblox blends personalized gameplay, mentorship, and
            hands-on challenges to bridge the gap between education and real
            life – one meaningful decision at a time.
          </p>
        </div>
        <div className="flex-1 flex justify-center relative">
          <div className="relative">
            <Image
              src="/Home-Page/2.webp"
              alt="About Sandblox"
              width={700}
              height={440}
            />
          </div>
        </div>
      </motion.section>

      {/* OUR MISSION SECTION */}
      <motion.section
        className="w-full bg-white py-16 px-8 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-extrabold italic text-black text-center mb-2">
          OUR MISSION
        </h2>
        <p className="text-center text-black text-lg mb-8 max-w-3xl mx-auto">
          Sandblox is on a mission to turn personal potential into real-world
          power. Through a personalized, game-based mentorship journey, we help
          teens and young adults (14–30) build critical life skills, grow their
          confidence, and make decisions that shape their future – all while
          staying rooted in community, creativity, and purpose.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={stagger}
          initial="visible"
          animate="visible"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-blue-50 border-2 border-blue-500 rounded-lg shadow-lg p-6 flex flex-col items-start text-left min-h-[180px]"
          >
            <h3 className="font-extrabold text-blue-500 text-2xl italic mb-2">
              VISION
            </h3>
            <p className="text-black text-base font-normal">
              To redefine how the next generation learns – by turning education
              into an interactive, personalized journey that prepares teens to
              lead, earn, and grow in the real world.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="bg-red-50 border-2 border-[#e57373] rounded-lg shadow-lg p-6 flex flex-col items-start text-left min-h-[180px]"
          >
            <h3 className="font-extrabold text-[#e57373] text-2xl italic mb-2">
              VALUES
            </h3>
            <p className="text-black text-base font-normal">
              We believe in learning through play, personalized education, and
              creating meaningful opportunities for growth and self-discovery.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="bg-purple-50 border-2 border-purple-500 rounded-lg shadow-lg p-6 flex flex-col items-start text-left min-h-[180px]"
          >
            <h3 className="font-extrabold text-purple-500 text-2xl italic mb-2">
              IMPACT
            </h3>
            <p className="text-black text-base font-normal">
              Our goal is to reshape how young people grow, by making education
              personal, playful, and practical so every teen can lead their life
              with confidence, purpose, and real-world skills.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* OUR TEAM SECTION */}
      <motion.section
        className="w-full bg-yellow-400 py-16 px-8 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-extrabold italic text-black text-center mb-2">
          OUR TEAM
        </h2>
        <p className="text-center text-black mb-8">
          Hear from those who&apos;ve experienced the Sandblox difference
        </p>
        <div className="flex flex-row items-center justify-center gap-4 max-w-6xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={() =>
              setSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
            }
            aria-label="Previous"
            className="focus:outline-none"
          >
            <Image
              src="/About-Page/4h.webp"
              alt="Left Arrow"
              width={40}
              height={40}
            />
          </button>
          {/* Team Members */}
          <div className="flex flex-row gap-8 justify-center items-stretch">
            {slides[slide].map((member) => (
              <div
                key={member.name}
                className="relative flex flex-col min-w-[220px] max-w-[250px] overflow-hidden p-0"
              >
                {/* Image with fallback */}
                <Image
                  src={member.img}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250' viewBox='0 0 250 250'%3E%3Crect width='250' height='250' fill='%23e5e7eb'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='20' fill='black'%3E" +
                      encodeURIComponent(member.name) +
                      "%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 flex flex-col pt-30 items-center justify-center p-4 text-center">
                  <h3 className={`font-extrabold ${member.color} text-lg mb-1`}>
                    {member.name}
                  </h3>
                  <div
                    className="font-bold text-black text-sm mb-1"
                    dangerouslySetInnerHTML={{ __html: member.role }}
                  />
                  <p className="text-black text-xs pb-2">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          <button
            onClick={() =>
              setSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
            }
            aria-label="Next"
            className="focus:outline-none"
          >
            <Image
              src="/About-Page/4i.webp"
              alt="Right Arrow"
              width={40}
              height={40}
            />
          </button>
        </div>
      </motion.section>

      {/* OUR STORY SECTION */}
      <motion.section
        className="w-full bg-white py-16 px-8 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold italic text-black mb-2">
              OUR STORY
            </h2>
            <p className="text-black text-base">
              It started with a question:
              <br />
              <span className="font-bold">
                Why are teens entering the world without the tools they need to
                succeed?
              </span>
              <br />
              <br />
              In business, we saw young adults struggle with confidence and
              decision-making. At home and school, the focus was on
              grades&mdash;not growth. And everyone agreed: the world is
              changing fast, but education isn&apos;t keeping up.
              <br />
              <br />
              That&apos;s why we created Sandblox&mdash;a hands-on learning
              platform where teens build real-world skills like financial
              literacy, leadership, and emotional intelligence through
              interactive games and purpose-driven challenges.
              <br />
              <br />
              It&apos;s not school. It&apos;s not an accelerator. It&apos;s a
              sandbox&mdash;where teens practice life, not just prepare for it.
            </p>
          </div>
          <div className="flex-1 grid grid-rows-2 grid-cols-2 gap-x-8 gap-y-10 place-items-stretch">
            {/* Top Row */}
            <div className="relative bg-[#eef2ff] border border-blue-500 p-8 flex flex-col justify-center shadow-[8px_8px_0_0_#3b82f6]">
              <span className="text-4xl font-extrabold text-blue-600 mb-2">
                8
              </span>
              <span className="text-black font-bold text-lg leading-tight">
                Core development skills
              </span>
            </div>
            <div className="relative bg-[#fdecec] border border-[#f87171] p-8 flex flex-col justify-center shadow-[8px_8px_0_0_#f87171]">
              <span className="text-4xl font-extrabold text-[#f87171] mb-2">
                150+
              </span>
              <span className="text-black font-bold text-lg leading-tight">
                Students impacted
              </span>
            </div>
            {/* Bottom Row: custom flex for 2/3 and 1/3 */}
            <div className="col-span-2 flex gap-8">
              <div className="relative bg-[#e6fbfa] border border-[#14b8a6] p-8 flex-2 flex flex-col justify-center shadow-[8px_8px_0_0_#14b8a6] w-3/4">
                <span className="text-4xl font-extrabold text-[#14b8a6] mb-2">
                  4
                </span>
                <span className="text-black font-bold text-lg leading-tight">
                  Schools initially testing
                </span>
              </div>
              <div className="relative bg-[#ede9fe] border border-[#a21caf] p-8 flex-1 flex flex-col justify-center shadow-[8px_8px_0_0_#a21caf] w-1/3">
                <span className="text-4xl font-extrabold text-[#a21caf] mb-2">
                  2
                </span>
                <span className="text-black font-bold text-lg leading-tight">
                  Countries
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* OUR PARTNERS SECTION */}
      <motion.section
        className="w-full bg-[#e9f0f7] py-16 px-8 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-extrabold italic text-black text-center mb-2">
          OUR PARTNERS
        </h2>
        <p className="text-center text-black text-lg">Coming Soon…</p>
      </motion.section>

      <Footer />
    </div>
  );
}
