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

export default function Events() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      {/* Hero Section */}
      <motion.section
        className="w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-16 gap-8 bg-yellow-400 relative overflow-x-clip"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Decorative shapes */}
        <div className="absolute left-24 top-10 w-8 h-8 bg-[#a259ff] rounded-lg rotate-12 z-0" />
        <div className="flex-1 flex flex-col gap-4 z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold italic mb-4 text-black">
            EVENTS & <span className="text-[#a41e1e]">PILOTS</span>
          </h1>
          <p className="text-black text-lg mb-4 max-w-xl">
            Explore upcoming Sandblox events, workshops, and pilot programs.
            Join us to experience the game firsthand and see how it&apos;s
            transforming student preparation for real-world success.
          </p>
          <div className="flex gap-4">
            <button className="group bg-white text-black font-extrabold px-8 py-3 rounded shadow hover:bg-[#a41e1e] hover:text-white transition text-lg">
              GET{" "}
              <span className="text-[#a41e1e] group-hover:text-white transition">
                STARTED
              </span>
            </button>
            <button className="bg-yellow-400 text-[#a41e1e] border-2 border-[#a41e1e] font-extrabold px-8 py-3 rounded shadow hover:bg-red-700 hover:text-white transition text-lg">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative z-10">
          <div className="relative rotate-3">
            <Image
              src="/Events-Page/2a.webp"
              alt="Events Hero"
              width={600}
              height={400}
            />
            {/* Decorative shapes */}
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#fc0] rounded-lg -rotate-12 z-20" />
          </div>
        </div>
        <div className="absolute right-24 top-24 w-8 h-8 bg-[#36f] rounded-md -rotate-12 z-0" />
      </motion.section>

      {/* Upcoming Events Section */}
      <motion.section
        className="w-full py-16 px-8 md:px-24 bg-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Decorative shape */}
        <div className="absolute left-24 top-10 w-8 h-8 bg-[#36f] rounded-lg rotate-12 z-0" />
        <h2 className="text-4xl font-extrabold text-black text-center mb-2 italic uppercase">
          UPCOMING EVENTS
        </h2>
        <p className="text-center text-black text-lg mb-8">
          Join us at these upcoming events to experience Sandblox
        </p>
        <div className="flex justify-center mb-8">
          <button className="bg-yellow-400 text-black font-extrabold w-full max-w-4xl py-4 rounded-2xl shadow hover:bg-yellow-300 transition text-xl tracking-wide">
            ALL EVENTS
          </button>
        </div>
        {/* Event Cards */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {/* Event 1 */}
          <div className="flex flex-col md:flex-row gap-0 items-stretch">
            <div className="flex-shrink-0">
              <Image
                src="/Events Page/3a.webp"
                alt="Event 1"
                width={320}
                height={180}
                className="object-cover w-[320px] h-[180px]"
              />
            </div>
            <div className="flex-1 bg-[#f7f7f7] rounded-r-xl p-6 flex flex-col justify-between min-h-[180px]">
              <div className="flex gap-2 mb-2">
                <span className="bg-purple-400 text-white font-bold px-3 py-1 rounded-full text-xs">
                  WORKSHOP
                </span>
                <button className="bg-green-500 text-white font-bold px-3 py-1 rounded-full text-xs shadow hover:bg-green-600 transition cursor-pointer">
                  REGISTER
                </button>
              </div>
              <div className="font-extrabold text-xl text-black italic uppercase mb-1">
                EDUCATOR WORKSHOP: IMPLEMENTING SANDBLOX
              </div>
              <div className="text-gray-700 text-base mb-2">
                A comprehensive workshop for educators interested in bringing
                Sandblox to their classrooms. Learn implementation strategies,
                facilitation techniques, and assessment methods.
              </div>
              <div className="flex gap-6 text-xs text-gray-500 items-center">
                <span>📅 June 15, 2025</span>
                <span>⏰ 9:00 AM - 3:00 PM</span>
                <span>📍 Washington High School, Portland, OR</span>
              </div>
            </div>
          </div>
          {/* Event 2 */}
          <div className="flex flex-col md:flex-row gap-0 items-stretch">
            <div className="flex-shrink-0">
              <Image
                src="/Events Page/3b.webp"
                alt="Event 2"
                width={320}
                height={180}
                className="object-cover w-[320px] h-[180px]"
              />
            </div>
            <div className="flex-1 bg-[#f7f7f7] rounded-r-xl p-6 flex flex-col justify-between min-h-[180px]">
              <div className="flex gap-2 mb-2">
                <span className="bg-blue-400 text-white font-bold px-3 py-1 rounded-full text-xs">
                  DEMO
                </span>
                <button className="bg-green-500 text-white font-bold px-3 py-1 rounded-full text-xs shadow hover:bg-green-600 transition cursor-pointer">
                  REGISTER
                </button>
              </div>
              <div className="font-extrabold text-xl text-black italic uppercase mb-1">
                SANDBLOX GAME DEMO & OPEN PLAY
              </div>
              <div className="text-gray-700 text-base mb-2">
                Drop in to play Sandblox and experience how it builds real-world
                skills. Open to students, parents, and educators.
              </div>
              <div className="flex gap-6 text-xs text-gray-500 items-center">
                <span>📅 June 22, 2025</span>
                <span>⏰ 10:00 AM - 4:00 PM</span>
                <span>📍 Central Library, Seattle, WA</span>
              </div>
            </div>
          </div>
          {/* Event 3 */}
          <div className="flex flex-col md:flex-row gap-0 items-stretch">
            <div className="flex-shrink-0">
              <Image
                src="/Events Page/3c.webp"
                alt="Event 3"
                width={320}
                height={180}
                className="object-cover w-[320px] h-[180px]"
              />
            </div>
            <div className="flex-1 bg-[#f7f7f7] rounded-r-xl p-6 flex flex-col justify-between min-h-[180px]">
              <div className="flex gap-2 mb-2">
                <span className="bg-pink-400 text-white font-bold px-3 py-1 rounded-full text-xs">
                  COMMUNITY EVENT
                </span>
                <button className="bg-green-500 text-white font-bold px-3 py-1 rounded-full text-xs shadow hover:bg-green-600 transition cursor-pointer">
                  REGISTER
                </button>
              </div>
              <div className="font-extrabold text-xl text-black italic uppercase mb-1">
                SANDBLOX GAME DEMO & OPEN PLAY
              </div>
              <div className="text-gray-700 text-base mb-2">
                Drop in to play Sandblox and experience how it builds real-world
                skills. Open to students, parents, and educators.
              </div>
              <div className="flex gap-6 text-xs text-gray-500 items-center">
                <span>📅 June 22, 2025</span>
                <span>⏰ 10:00 AM - 4:00 PM</span>
                <span>📍 Central Library, Seattle, WA</span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative shape */}
        <div className="absolute right-24 bottom-10 w-8 h-8 bg-[#fc0] rounded-lg -rotate-12 z-0" />
      </motion.section>

      {/* Pilot Programs Section */}
      <motion.section
        className="w-full py-16 px-8 md:px-24 bg-[#f6f6f6] relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-extrabold text-black text-center mb-2 italic uppercase">
          PILOT PROGRAMS
        </h2>
        <p className="text-center text-black text-lg mb-8">
          Bring Sandblox to your school or organization through our pilot
          programs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* School Pilots */}
          <div className="bg-white border-2 border-red-300 shadow-[6px_6px_0_#000] p-8 flex flex-col gap-2 min-h-[320px]">
            <span className="font-extrabold text-red-500 text-2xl italic mb-1">
              SCHOOL PILOTS
            </span>
            <p className="text-black text-base mb-2">
              Implement Sandblox in your school with comprehensive support,
              training, and resources for educators and students.
            </p>
            <ul className="pl-0 text-black text-base mb-4 flex flex-col gap-2">
              <li className="flex items-start gap-2">
                <Image
                  src="/Events Page/4a3.webp"
                  alt="bullet"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                Custom implementation
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/Events Page/4a3.png"
                  alt="bullet"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                Teacher training included
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/Events Page/4a3.webp"
                  alt="bullet"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                Game materials provided
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/Events Page/4a3.webp"
                  alt="bullet"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                Impact assessment
              </li>
            </ul>
            <button className="bg-red-400 text-white font-extrabold px-6 py-2 rounded shadow-[4px_4px_0_#000] hover:bg-red-500 transition text-base mt-auto">
              IMPLEMENT IN SCHOOL
            </button>
          </div>
          {/* Community Pilots */}
          <div className="bg-white border-2 border-blue-300 shadow-[6px_6px_0_#000] p-8 flex flex-col gap-2 min-h-[320px]">
            <span className="font-extrabold text-blue-500 text-2xl italic mb-1">
              COMMUNITY PILOTS
            </span>
            <p className="text-black text-base mb-2">
              Bring Sandblox to community centers, libraries, after-school
              programs, and youth organizations.
            </p>
            <ul className="pl-0 text-black text-base mb-4 flex flex-col gap-2">
              <li className="flex items-start gap-2">
                <Image
                  src="/Events Page/4b3.webp"
                  alt="bullet"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                Customized to user
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/Events Page/4b3.webp"
                  alt="bullet"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                Facilitator support
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/Events Page/4b3.webp"
                  alt="bullet"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                Flexible scheduling
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/Events Page/4b3.webp"
                  alt="bullet"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                Customized approaches
              </li>
            </ul>
            <button className="bg-blue-400 text-white font-extrabold px-6 py-2 rounded shadow-[4px_4px_0_#000] hover:bg-blue-500 transition text-base mt-auto">
              IMPLEMENT IN COMMUNITY
            </button>
          </div>
          {/* Research Pilots */}
          <div className="bg-white border-2 border-teal-300 shadow-[6px_6px_0_#000] p-8 flex flex-col gap-2 min-h-[320px]">
            <span className="font-extrabold text-teal-500 text-2xl italic mb-1">
              RESEARCH PILOTS
            </span>
            <p className="text-black text-base mb-2">
              Partner with us to study specific aspects of skill development and
              educational outcomes.
            </p>
            <ul className="pl-0 text-black text-base mb-4 flex flex-col gap-2">
              <li className="flex items-start gap-2">
                <Image
                  src="/Events Page/4c3.webp"
                  alt="bullet"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                Data collection tools
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/Events Page/4c3.webp"
                  alt="bullet"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                Custom research design
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/Events Page/4c3.webp"
                  alt="bullet"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                Academic partnerships
              </li>
              <li className="flex items-start gap-2">
                <Image
                  src="/Events Page/4c3.webp"
                  alt="bullet"
                  width={20}
                  height={20}
                  className="mt-1"
                />
                Publication opportunities
              </li>
            </ul>
            <button className="bg-teal-400 text-white font-extrabold px-6 py-2 rounded shadow-[4px_4px_0_#000] hover:bg-teal-500 transition text-base mt-auto">
              DIVE INTO THE RESEARCH
            </button>
          </div>
        </div>
      </motion.section>

      {/* Pilot Success Stories Section */}
      <motion.section
        className="w-full py-16 px-8 md:px-24 bg-[#232323] relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-2 italic uppercase">
          PILOT SUCCESS STORIES
        </h2>
        <p className="text-center text-white text-lg mb-8">
          See how other schools and organizations have implemented Sandblox
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          {/* Story 1 */}
          <div className="bg-white shadow-[6px_6px_0_#000] p-8 flex flex-col gap-2">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-red-100 text-[#a41e1e] font-extrabold text-2xl rounded-full w-14 h-14 flex items-center justify-center">
                LHS
              </div>
              <div>
                <span className="font-extrabold text-blue-700 text-xl">
                  LINCOLN HIGH SCHOOL
                </span>
                <div className="text-black text-base">Portland, Oregon</div>
              </div>
            </div>
            <p className="text-black text-base mb-2">
              &quot;We implemented Sandblox across all 9th grade advisory
              classes. Within one semester, we saw a 32% improvement in
              students&apos; self-reported confidence in financial
              decision-making and a 27% increase in communication skills as
              measured by our assessments.&quot;
            </p>
            <div className="text-black text-sm mt-2">
              <span className="font-bold text-lg text-blue-700">
                IMPLEMENTATION DETAILS:
              </span>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-black text-base mb-2 pl-6 list-disc">
                <li>12-week implementation</li>
                <li>42% reduction in tardy rates</li>
                <li>320 students participated</li>
                <li>Now in full implementation</li>
              </ul>
            </div>
          </div>
          {/* Story 2 */}
          <div className="bg-white shadow-[6px_6px_0_#000] p-8 flex flex-col gap-2">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-red-100 text-[#a41e1e] font-extrabold text-2xl rounded-full w-14 h-14 flex items-center justify-center">
                LHS
              </div>
              <div>
                <span className="font-extrabold text-blue-700 text-xl">
                  LINCOLN HIGH SCHOOL
                </span>
                <div className="text-black text-base">Portland, Oregon</div>
              </div>
            </div>
            <p className="text-black text-base mb-2">
              &quot;We implemented Sandblox across all 9th grade advisory
              classes. Within one semester, we saw a 32% improvement in
              students&apos; self-reported confidence in financial
              decision-making and a 27% increase in communication skills as
              measured by our assessments.&quot;
            </p>
            <div className="text-black text-sm mt-2">
              <span className="font-bold text-lg text-blue-700">
                IMPLEMENTATION DETAILS:
              </span>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-black text-base mb-2 pl-6 list-disc">
                <li>12-week implementation</li>
                <li>42% reduction in tardy rates</li>
                <li>320 students participated</li>
                <li>Now in full implementation</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-yellow-400 text-black font-extrabold px-10 py-4 shadow-[6px_6px_0_#000] rounded-none text-lg tracking-wide hover:bg-yellow-300 transition">
            MORE <span className="text-[#a41e1e]">SOON TO COME</span>
          </button>
        </div>
      </motion.section>

      {/* Tune In Section */}
      <motion.section
        className="w-full py-16 px-8 md:px-24 bg-[#a41e1e] relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-2 italic uppercase">
          TUNE IN TO THE NEXT EVENT
        </h2>
        <p className="text-center text-white text-lg mb-8">
          Interested in hosting a Sandblox demo or workshop at your school,
          organization, or conference? We&apos;ll help you create an engaging
          experience.
        </p>
        <div className="flex justify-center">
          <button className="bg-yellow-400 text-black font-extrabold italic uppercase px-10 py-4 shadow-[6px_6px_0_#000] rounded-none text-xl tracking-wide hover:bg-yellow-300 transition">
            REQUEST A <span className="text-[#a41e1e]">SPOT</span>
          </button>
        </div>
        {/* Decorative shape */}
        <div className="absolute left-24 bottom-10 w-8 h-8 bg-[#00c853] rounded-lg rotate-12 z-0" />
      </motion.section>

      <Footer />
    </div>
  );
}
