"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import ComingSoonPopup from "../components/ComingSoonPopup";

const gameplayTabs = [
  {
    label: "CHALLENGES",
    color: "bg-blue-400 text-white",
    content: (
      <div>
        <h3 className="font-extrabold text-lg mb-2">REAL-WORLD CHALLENGES</h3>
        <p className="mb-2 text-black">
          Students face scenarios based on common situations they&apos;ll
          encounter after high school, from job interviews to financial
          decisions.
        </p>
        <ul className="list-disc pl-6 text-black">
          <li>Career dilemmas</li>
          <li>Financial choices</li>
          <li>Social situations</li>
          <li>Health &amp; wellness decisions</li>
        </ul>
      </div>
    ),
  },
  {
    label: "SKILLS",
    color: "bg-blue-600 text-white",
    content: (
      <div>
        <h3 className="font-extrabold text-lg mb-2">SKILLS DEVELOPMENT</h3>
        <p className="mb-2 text-black">
          Build and track real-world skills through interactive gameplay and
          personalized tasks.
        </p>
      </div>
    ),
  },
  {
    label: "OPPORTUNITIES",
    color: "bg-green-400 text-white",
    content: (
      <div>
        <h3 className="font-extrabold text-lg mb-2">OPPORTUNITIES</h3>
        <p className="mb-2 text-black">
          Unlock new paths, bonuses, and growth moments as you play.
        </p>
      </div>
    ),
  },
  {
    label: "SETBACKS",
    color: "bg-purple-600 text-white",
    content: (
      <div>
        <h3 className="font-extrabold text-lg mb-2">SETBACKS</h3>
        <p className="mb-2 text-black">
          Face real-life obstacles and learn to adapt and overcome.
        </p>
      </div>
    ),
  },
];

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

export default function Game() {
  const [activeTab, setActiveTab] = useState(0);
  const [showComingSoon, setShowComingSoon] = useState(false);
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      {/* Hero Section */}
      <motion.section
        className="w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-16 gap-8 bg-white"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex-1 flex flex-col gap-4 px-10">
          <h1 className="text-4xl md:text-5xl text-black font-extrabold italic mb-4">
            THE <span className="text-[#a41e1e]">GAME</span>
          </h1>

          <p className="text-black text-base mb-2 text-lg pr-10">
            <span className="text-black text-lg font-bold mb-1">
              What is Sandblox?{" "}
            </span>
            Sandblox is a real-world strategy game where teens play their way to
            real-life readiness. Every move unlocks challenges—pitch a business,
            handle conflict, manage a budget, lead a team.
          </p>
          <p className="text-black text-base text-lg pr-10">
            Powered by AI, guided by mentors, and tailored to each player&apos;s
            personality, no game is the same twice. It&apos;s fast, social, and
            insanely relevant—blending emotional intelligence, financial
            literacy, leadership, and tech skills into an experience that feels
            more like a movement than a class.
          </p>
        </div>
        <div className="flex-1 flex justify-center relative">
          <motion.div className="relative" variants={fadeInUp}>
            <motion.div variants={fadeInUp}>
              <Image
                src="/Game-Page/2a.webp"
                alt="Game Cards"
                width={800}
                height={520}
                unoptimized
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* The Game Section */}
      <motion.section
        className="w-full bg-yellow-400 py-16 px-8 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-extrabold italic text-black text-center mb-2">
          THE GAME
        </h2>
        <p className="text-center text-black text-lg mb-8">
          Everything you need to start building real-world skills
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={stagger}
        >
          {/* Game Board */}
          <motion.div
            variants={fadeInUp}
            className="rounded-lg overflow-hidden flex flex-col bg-transparent shadow-lg max-w-[420px] w-full mx-auto"
            style={{ height: "380px" }}
          >
            <div className="relative w-full h-[220px] border-1 border-black">
              <Image
                src="/Game-Page/3a.webp"
                alt="Game Board"
                fill
                style={{ objectFit: "cover" }}
                className=""
                unoptimized
              />
            </div>
            <div className="bg-white w-full h-[160px] p-6 flex flex-col items-start justify-center border-1 border-black">
              <span className="font-extrabold text-purple-700 text-2xl mb-1 text-left italic">
                GAME BOARD
              </span>
              <p className="text-black text-base font-medium text-left">
                A vibrant, dynamic board representing the journey through
                life&apos;s challenges and opportunities.
              </p>
            </div>
          </motion.div>
          {/* Challenge Cards */}
          <motion.div
            variants={fadeInUp}
            className="rounded-lg overflow-hidden flex flex-col bg-transparent shadow-lg max-w-[420px] w-full mx-auto"
            style={{ height: "380px" }}
          >
            <div className="relative w-full h-[220px] border-1 border-black">
              <Image
                src="/Game-Page/3b.webp"
                alt="Challenge Cards"
                fill
                style={{ objectFit: "cover" }}
                className=""
                unoptimized
              />
            </div>
            <div className="bg-white w-full h-[160px] p-6 flex flex-col items-start justify-center border-1 border-black">
              <span className="font-extrabold text-red-500 text-2xl mb-1 text-left italic">
                CHALLENGE CARDS
              </span>
              <p className="text-black text-base font-medium text-left">
                Different categories of challenges that test and develop various
                life skills.
              </p>
            </div>
          </motion.div>
          {/* Mobile App */}
          <motion.div
            variants={fadeInUp}
            className="rounded-lg overflow-hidden flex flex-col bg-transparent shadow-lg max-w-[420px] w-full mx-auto"
            style={{ height: "380px" }}
          >
            <div className="relative w-full h-[220px] border-1 border-black">
              <Image
                src="/Game-Page/3c.webp"
                alt="Mobile App"
                fill
                style={{ objectFit: "cover" }}
                className=""
                unoptimized
              />
            </div>
            <div className="bg-white w-full h-[160px] p-6 flex flex-col items-start justify-center border-1 border-black">
              <span className="font-extrabold text-blue-500 text-2xl mb-1 text-left italic">
                MOBILE APP
              </span>
              <p className="text-black text-base font-medium text-left">
                Scan cards, complete personalized tasks, and track your
                progress.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* How to Play Section */}
      <motion.section
        className="w-full bg-white py-16 px-8 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-extrabold italic text-black text-center mb-2">
          HOW TO PLAY
        </h2>
        <p className="text-center text-black text-lg mb-8">
          Simple to learn, endlessly engaging
        </p>
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Step 1 */}
            <div className="relative bg-white border border-black rounded-lg shadow-[6px_6px_0_0_#FFD600] p-8 flex flex-col items-center justify-center min-h-[150px]">
              <span className="absolute -top-6 bg-yellow-400 text-white font-extrabold text-2xl w-12 h-12 flex items-center justify-center rounded-md border-4 border-white shadow-lg">
                1
              </span>
              <span className="font-extrabold text-black text-xl mb-1 italic uppercase text-center">
                TAKE THE QUIZ
              </span>
              <p className="text-black text-base text-center mt-1">
                Complete the personality assessment to identify your learning
                style and strengths
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative bg-white border border-black rounded-lg shadow-[6px_6px_0_0_#2ECC71] p-8 flex flex-col items-center justify-center min-h-[150px]">
              <span className="absolute -top-6 bg-green-400 text-white font-extrabold text-2xl w-12 h-12 flex items-center justify-center rounded-md border-4 border-white shadow-lg">
                2
              </span>
              <span className="font-extrabold text-black text-xl mb-1 italic uppercase text-center">
                SET UP THE BOARD
              </span>
              <p className="text-black text-base text-center mt-1">
                Place your player token at the start and roll the dice to draw
                challenge cards
              </p>
            </div>
            {/* Step 4 */}
            <div className="relative bg-white border border-black rounded-lg shadow-[6px_6px_0_0_#29B6F6] p-8 flex flex-col items-center justify-center min-h-[150px]">
              <span className="absolute -top-6 bg-blue-400 text-white font-extrabold text-2xl w-12 h-12 flex items-center justify-center rounded-md border-4 border-white shadow-lg">
                4
              </span>
              <span className="font-extrabold text-black text-xl mb-1 italic uppercase text-center">
                SCAN & COMPLETE
              </span>
              <p className="text-black text-base text-center mt-1">
                Use the app to scan cards and complete personalized tasks
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative bg-white border border-black rounded-lg shadow-[6px_6px_0_0_#AB47BC] p-8 flex flex-col items-center justify-center min-h-[150px]">
              <span className="absolute -top-6  bg-purple-400 text-white font-extrabold text-2xl w-12 h-12 flex items-center justify-center rounded-md border-4 border-white shadow-lg">
                3
              </span>
              <span className="font-extrabold text-black text-xl mb-1 italic uppercase text-center">
                FACE CHALLENGES
              </span>
              <p className="text-black text-base text-center mt-1">
                Move around the board with each spot presenting new skills and
                challenges to face
              </p>
            </div>
          </div>
          {/* Arrows */}
          {/* Horizontal Arrow SVG */}
          <svg
            className="hidden md:block absolute left-1/2 top-[60px] w-20 h-10 z-30 pointer-events-none"
            style={{ transform: "translateX(-50%)" }}
            viewBox="0 0 112 40"
          >
            <line
              x1="0"
              y1="20"
              x2="100"
              y2="20"
              stroke="#000"
              strokeWidth="8"
            />
            <polygon points="100,10 112,20 100,30" fill="#000" />
          </svg>
          {/* Downward Arrow (rotated horizontal arrow) */}
          <svg
            className="hidden md:block absolute left-[calc(50%+55px)] top-[115px] w-20 h-10 z-30 pointer-events-none rotate-90"
            style={{ transform: "translateX(50%)" }}
            viewBox="0 0 112 40"
          >
            <line
              x1="0"
              y1="20"
              x2="100"
              y2="20"
              stroke="#000"
              strokeWidth="8"
            />
            <polygon points="100,10 112,20 100,30" fill="#000" />
          </svg>
          {/* Bottom Horizontal Arrow */}
          <svg
            className="hidden md:block absolute right-1/2 bottom-[60px] w-20 h-10 z-30 pointer-events-none"
            style={{ transform: "translateX(50%)" }}
            viewBox="0 0 112 40"
          >
            <line
              x1="112"
              y1="20"
              x2="12"
              y2="20"
              stroke="#000"
              strokeWidth="9"
            />
            <polygon points="12,10 0,20 12,30" fill="#000" />
          </svg>
        </div>
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowComingSoon(true)}
            className="bg-yellow-400 text-black font-extrabold italic px-10 py-4 rounded shadow-[4px_4px_0_#000] text-lg tracking-wide hover:bg-yellow-300 transition"
          >
            DOWNLOAD FULL INSTRUCTIONS
          </button>
        </div>
      </motion.section>

      {/* Gameplay Features Section */}
      <motion.section
        className="w-full bg-gray-100 py-16 px-8 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-extrabold italic text-black text-center mb-2">
          GAMEPLAY FEATURES
        </h2>
        <p className="text-center text-black text-lg mb-8">
          Everything you need to start building real-world skills
          <br />
          Discover the elements that make Sandblox unique
        </p>
        {/* Tab Row */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-sky-400 rounded-full px-2 py-1 gap-2">
            {gameplayTabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`px-6 py-2 font-extrabold rounded-full text-lg transition-all duration-150 focus:outline-none
                  ${
                    idx === activeTab
                      ? "bg-white text-black shadow-md border-2 border-sky-400 scale-105"
                      : "bg-sky-400 text-white hover:bg-sky-300"
                  }`}
                style={{ fontStyle: idx === activeTab ? "italic" : "normal" }}
                onClick={() => setActiveTab(idx)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        {/* Content Row */}
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-start">
          {/* Left: Tab Content */}
          <div className="flex-1 min-w-[260px]">
            <div>
              {/* Custom rendering for the first tab's list with image bullets */}
              {activeTab === 0 ? (
                <div>
                  <h3 className="font-extrabold text-black text-2xl mb-2 italic">
                    REAL-WORLD CHALLENGES
                  </h3>
                  <p className="mb-2 text-black text-lg font-medium">
                    Students face scenarios based on common situations
                    they&apos;ll encounter after high school, from job
                    interviews to financial decisions.
                  </p>
                  <ul className="space-y-2 mt-2">
                    {[
                      "Career dilemmas",
                      "Financial choices",
                      "Social situations",
                      "Health & wellness decisions",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-black text-lg font-medium"
                      >
                        <Image
                          src="/Game-Page/5a.webp"
                          alt="bullet"
                          width={22}
                          height={22}
                          className="inline-block"
                          unoptimized
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : activeTab === 1 ? (
                <div>
                  <h3 className="font-extrabold text-black text-2xl mb-2 italic">
                    SKILLS
                  </h3>
                  <p className="mb-2 text-black text-lg font-medium">
                    Players build real-world abilities they&apos;ll need to
                    thrive independently, helping them grow confidence and
                    competence through hands-on practice.
                  </p>
                  <ul className="space-y-2 mt-2">
                    {[
                      "Budgeting and money management",
                      "Time management and goal setting",
                      "Communication and networking",
                      "Problem-solving and critical thinking",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-black text-lg font-medium"
                      >
                        <Image
                          src="/Game-Page/5b.webp"
                          alt="bullet"
                          width={22}
                          height={22}
                          className="inline-block"
                          unoptimized
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : activeTab === 2 ? (
                <div>
                  <h3 className="font-extrabold text-black text-2xl mb-2 italic">
                    OPPORTUNITIES
                  </h3>
                  <p className="mb-2 text-black text-lg font-medium">
                    These are positive events or advantages players can use to
                    get ahead—representing the kind of boosts that can shape a
                    brighter future.
                  </p>
                  <ul className="space-y-2 mt-2">
                    {[
                      "Job offers and internships",
                      "Scholarships and training programs",
                      "Mentorship and support networks",
                      "Personal growth or leadership chances",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-black text-lg font-medium"
                      >
                        <Image
                          src="/Game-Page/5c.webp"
                          alt="bullet"
                          width={22}
                          height={22}
                          className="inline-block"
                          unoptimized
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : activeTab === 3 ? (
                <div>
                  <h3 className="font-extrabold text-black text-2xl mb-2 italic">
                    SETBACKS
                  </h3>
                  <p className="mb-2 text-black text-lg font-medium">
                    Unexpected obstacles and tough choices that test a
                    player&apos;s resilience—just like in real life, setbacks
                    challenge progress but offer lessons too.
                  </p>
                  <ul className="space-y-2 mt-2">
                    {[
                      "Job loss or rejection",
                      "Emergency expenses",
                      "Conflict in relationships",
                      "Mental health or burnout",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-black text-lg font-medium"
                      >
                        <Image
                          src="/Game-Page/5d.webp"
                          alt="bullet"
                          width={22}
                          height={22}
                          className="inline-block"
                          unoptimized
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                gameplayTabs[activeTab].content
              )}
            </div>
          </div>
          {/* Right: Image with yellow border and colored corners */}
          <div className="flex-1 flex justify-center items-center relative min-w-[320px]">
            <div>
              <Image
                src="/Game-Page/5e.webp"
                alt="Gameplay Features Board"
                width={640}
                height={400}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Companion Mobile App Section */}
      <motion.section
        className="w-full bg-yellow-400 py-12 px-8 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col gap-4 max-w-xl">
            <h2 className="text-4xl font-extrabold italic uppercase text-[#a41e1e] mb-2">
              COMPANION MOBILE APP
            </h2>
            <p className="text-black text-lg font-medium mb-2">
              Enhance your Sandblox experience with our interactive mobile app
              that brings the game to life.
            </p>
            <div className="flex flex-col gap-2 mb-4">
              <div>
                <span className="font-extrabold text-lg text-[#c62828]">
                  Scan Cards
                </span>
                <span className="block text-black text-base font-medium">
                  Use your phone to scan challenge cards and unlock personalized
                  tasks
                </span>
              </div>
              <div>
                <span className="font-extrabold text-lg text-[#c62828]">
                  Personality Test
                </span>
                <span className="block text-black text-base font-medium">
                  Take the assessment to customize your game experience
                </span>
              </div>
              <div>
                <span className="font-extrabold text-lg text-[#c62828]">
                  Track Progress
                </span>
                <span className="block text-black text-base font-medium">
                  Monitor your skill development and achievements over time
                </span>
              </div>
            </div>
            <div className="flex gap-6 mt-4">
              <button
                onClick={() => setShowComingSoon(true)}
                className="bg-[#2196f3] text-white font-extrabold italic text-lg px-8 py-3 rounded shadow-[4px_4px_0_#000] tracking-wide hover:bg-blue-500 transition"
              >
                APP STORE
              </button>
              <button
                onClick={() => setShowComingSoon(true)}
                className="bg-[#8e24aa] text-white font-extrabold italic text-lg px-8 py-3 rounded shadow-[4px_4px_0_#000] tracking-wide hover:bg-purple-700 transition"
              >
                GOOGLE PLAY
              </button>
            </div>
          </div>
          {/* Right: Phone Image */}
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="/Game-Page/6c.webp"
              alt="Mobile App Phone"
              width={340}
              height={500}
              className="object-contain"
              unoptimized
              priority
            />
          </div>
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
