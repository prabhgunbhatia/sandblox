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

const skills = [
  {
    title: "COMMUNICATION",
    desc: "Express ideas clearly and listen effectively in various contexts",
    color: "#6c8cff",
    border: "border-blue-400",
    text: "text-blue-700",
  },
  {
    title: "CRITICAL THINKING",
    desc: "Analyze information, evaluate options, and solve complex problems",
    color: "#ff6c6c",
    border: "border-red-400",
    text: "text-red-500",
  },
  {
    title: "FINANCIAL LITERACY",
    desc: "Make informed decisions about managing money and resources",
    color: "#ffe066",
    border: "border-yellow-300",
    text: "text-yellow-500",
  },
  {
    title: "DIGITAL FLUENCY",
    desc: "Navigate technology confidently and use it productively",
    color: "#6ce0ff",
    border: "border-cyan-300",
    text: "text-cyan-500",
  },
  {
    title: "EMOTIONAL INTELLIGENCE",
    desc: "Recognize emotions and develop healthy relationships",
    color: "#ff6c6c",
    border: "border-red-400",
    text: "text-red-500",
  },
  {
    title: "ADAPTABILITY",
    desc: "Adjust to new situations and overcome obstacles with resilience",
    color: "#a3ffb0",
    border: "border-green-300",
    text: "text-green-500",
  },
  {
    title: "COLLABORATION",
    desc: "Work effectively with others toward shared goals",
    color: "#6ce0ff",
    border: "border-cyan-300",
    text: "text-cyan-500",
  },
  {
    title: "SELF-MANAGEMENT",
    desc: "Set goals, organize time, and take initiative for personal growth",
    color: "#ffe066",
    border: "border-yellow-300",
    text: "text-yellow-500",
  },
];

const tabs = [
  "ACADEMIC SUCCESS",
  "CAREER READINESS",
  "LIFE MANAGEMENT",
  "SOCIAL WELL-BEING",
];

const skillsInActionContent = [
  {
    title: "Academic Success",
    main: {
      heading: "Academic Success",
      subtitle:
        "Sandblox skills directly contribute to improved academic performance.",
      bullets: [
        "Better time management for assignments",
        "Enhanced problem-solving for complex subjects",
        "Improved communication with teachers",
        "Greater resilience when facing academic challenges",
      ],
    },
    practicality: {
      text: `Academic success builds a strong foundation for lifelong learning. It teaches students how to manage their time, solve problems, and stay motivated through challenges.\n\nThese skills not only improve grades but also create habits that carry over into post-secondary education, careers, and personal growth beyond the classroom.`,
      icon: "/Skills-Page/5a.webp",
    },
  },
  {
    title: "Career Readiness",
    main: {
      heading: "Career Readiness",
      subtitle:
        "Sandblox skills help students prepare for the working world with confidence and clarity.",
      bullets: [
        "Stronger interview and résumé preparation",
        "Clearer understanding of career paths and goals",
        "Greater adaptability in workplace scenarios",
        "Improved teamwork and leadership skills",
      ],
    },
    practicality: {
      text: `Career readiness prepares students for life after school by helping them explore interests, set goals, and develop professional skills.\n\nKnowing how to write a résumé, succeed in interviews, and work with others gives students confidence and direction as they transition into part-time jobs, apprenticeships, or long-term careers.`,
      icon: "/Skills-Page/5b.webp",
    },
  },
  {
    title: "Life Management",
    main: {
      heading: "Life Management",
      subtitle:
        "Sandblox skills support practical, everyday decision-making for independent living.",
      bullets: [
        "Smarter budgeting and financial planning",
        "Healthier habits in nutrition, sleep, and exercise",
        "Better organization of daily responsibilities",
        "More informed decision-making in real-life situations",
      ],
    },
    practicality: {
      text: `Life management is essential for becoming an independent, capable adult. Skills like budgeting, organizing responsibilities, and making healthy choices help students navigate everyday challenges.\n\nWhether it's paying bills or planning meals, life management ensures students are ready to take care of themselves and adapt to real-world situations with confidence.`,
      icon: "/Skills-Page/5c.webp",
    },
  },
  {
    title: "Social Well-Being",
    main: {
      heading: "Social Well-Being",
      subtitle:
        "Sandblox skills strengthen relationships and support emotional intelligence.",
      bullets: [
        "Healthier conflict resolution and communication",
        "Stronger sense of empathy and perspective-taking",
        "Increased confidence in social settings",
        "Improved ability to set and respect boundaries",
      ],
    },
    practicality: {
      text: `Social well-being is key to building strong relationships and maintaining mental health. Learning how to communicate, set boundaries, and resolve conflict helps students thrive in friendships, family dynamics, and team settings.\n\nThese skills foster emotional intelligence, self-awareness, and a deeper sense of belonging in both school and life.`,
      icon: "/Skills-Page/5d.webp",
    },
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [showComingSoon, setShowComingSoon] = useState(false);

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
        <div className="flex-1 flex flex-col gap-4 z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold italic mb-4 text-black">
            SKILLS WE <span className="text-[#a41e1e]">BUILD</span>
          </h1>
          <p className="text-black text-lg mb-4 max-w-xl">
            Sandblox intentionally develops eight core competencies that
            research shows are essential for success in college, career, and
            life beyond high school.
          </p>
          <button className="bg-white text-black font-extrabold px-8 py-3 rounded shadow hover:bg-gray-300 transition text-lg w-fit">
            EXPLORE OUR APPROACH
          </button>
        </div>
        <div className="flex-1 flex justify-center relative z-10">
          <div>
            <Image
              src="/Skills-Page/2a.webp"
              alt="Skills Hero"
              width={600}
              height={400}
              className="object-contain w-[600px] h-[400px]"
            />
            {/* Decorative shape */}
          </div>
        </div>
      </motion.section>

      {/* Core Skills Section */}
      <motion.section
        className="w-full py-16 px-8 md:px-24 bg-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="absolute left-24 top-10 w-8 h-8 bg-[#a259ff] rounded-lg rotate-12 z-0" />
        <h2 className="text-4xl font-extrabold text-black text-center mb-2 italic uppercase">
          CORE SKILLS
        </h2>
        <p className="text-center text-black text-lg mb-8">
          The essential competencies students develop through Sandblox gameplay
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skills.map((skill) => {
            // Map skill color to a light Tailwind background
            const bgMap = {
              "#6c8cff": "bg-blue-100",
              "#ff6c6c": "bg-red-100",
              "#ffe066": "bg-yellow-100",
              "#6ce0ff": "bg-cyan-100",
              "#a3ffb0": "bg-green-100",
            };
            // Default to white if not found
            const bgClass =
              bgMap[skill.color as keyof typeof bgMap] || "bg-white";
            return (
              <div
                key={skill.title}
                className={`relative flex flex-col justify-between p-6 min-h-[170px] max-w-[320px] overflow-hidden shadow-none ${bgClass}`}
                style={{
                  boxShadow: `8px 8px 0 0 ${skill.color}`,
                }}
              >
                <span
                  className={`font-extrabold text-2xl md:text-2xl italic uppercase mb-2 text-center break-words ${skill.text}`}
                  style={{ textShadow: `1px 1px 0 ${skill.color}` }}
                >
                  {skill.title}
                </span>
                <span className="text-black text-base font-medium break-words text-center">
                  {skill.desc}
                </span>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Skill Development Process Section */}
      <section className="w-full py-16 px-8 md:px-24 bg-[#f7f7f7] flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col gap-4 z-10 ml-12">
          <h2 className="text-4xl md:text-5xl font-extrabold italic text-black mb-2 uppercase leading-tight">
            OUR SKILL <br className="hidden md:block" /> DEVELOPMENT PROCESS
          </h2>
          <p className="text-black text-base md:text-lg mb-4">
            Sandblox uses a proven four-step approach to help students build
            skills that stick:
          </p>
          <div className="space-y-4">
            <div>
              <span className="font-extrabold text-blue-600 text-lg md:text-xl">
                Experience
              </span>
              <span className="block text-black text-base md:text-lg font-normal">
                Find yourself in certain situations & challenges not commonly
                done in high school
              </span>
            </div>
            <div>
              <span className="font-extrabold text-orange-500 text-lg md:text-xl">
                Reflect
              </span>
              <span className="block text-black text-base md:text-lg font-normal">
                Process experiences through guided reflection activities
              </span>
            </div>
            <div>
              <span className="font-extrabold text-blue-500 text-lg md:text-xl">
                Apply
              </span>
              <span className="block text-black text-base md:text-lg font-normal">
                Use new skills in different scenarios and contexts
              </span>
            </div>
            <div>
              <span className="font-extrabold text-green-600 text-lg md:text-xl">
                Transfer
              </span>
              <span className="block text-black text-base md:text-lg font-normal">
                Bridge gameplay learning to real-life situations
              </span>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/Skills-Page/4a.webp"
            alt="Skill Development Process"
            width={400}
            height={400}
            className="object-contain w-full max-w-[400px] h-auto"
          />
        </div>
      </section>

      {/* Skills in Action Section (Tabbed) */}
      <motion.section
        className="w-full py-16 px-8 md:px-24 bg-white relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="absolute left-24 top-10 w-8 h-8 bg-[#a259ff] rounded-lg rotate-12 z-0" />
        <h2 className="text-4xl font-extrabold italic text-black text-center mb-2 uppercase">
          SKILLS IN ACTION
        </h2>
        <p className="text-center text-black text-lg mb-8">
          See how Sandblox skills translate to real-world success
        </p>
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-yellow-400 rounded-full overflow-hidden shadow-lg">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                className={`px-8 py-3 font-extrabold italic uppercase text-lg transition-all duration-200 ${
                  activeTab === idx
                    ? "bg-yellow-400 text-white "
                    : "bg-yellow-400 text-black hover:bg-yellow-200"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* Tab Content */}
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto items-stretch">
          {/* Left: Main Card (2/5) */}
          <motion.div
            key={activeTab}
            className="w-full md:basis-2/5 bg-[#eaf1ff] rounded-2xl p-8 flex flex-col shadow-md"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-extrabold text-blue-600 mb-5">
              {skillsInActionContent[activeTab].main.heading}
            </h3>
            <div className="text-black text-lg font-bold mb-6">
              {skillsInActionContent[activeTab].main.subtitle}
            </div>
            <ul className="text-black text-base list-disc pl-6">
              {skillsInActionContent[activeTab].main.bullets.map(
                (item, idx) => (
                  <li key={idx}>{item}</li>
                )
              )}
            </ul>
          </motion.div>
          {/* Right: Practicality Card (3/5) */}
          <motion.div
            className="w-full md:basis-3/5 bg-[#f7f7f7] rounded-2xl p-8 flex flex-col justify-center shadow-md"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-stretch h-full">
              {/* Left: Text */}
              <div className="flex-1 flex flex-col justify-center">
                <h4 className="text-xl font-extrabold text-black mb-2">
                  Practicality
                </h4>
                <div className="text-black text-base mb-2 whitespace-pre-line">
                  {skillsInActionContent[activeTab].practicality.text}
                </div>
              </div>
              {/* Right: Icon */}
              <div className="flex items-center justify-center">
                <div className="bg-[#eaf1ff] rounded-xl p-6 flex items-center justify-center">
                  <Image
                    src={skillsInActionContent[activeTab].practicality.icon}
                    alt="Practicality Icon"
                    width={240}
                    height={240}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Educator Resources Section */}
      <section className="w-full bg-[#232323] py-16 px-8 md:px-24 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start ml-12">
          <h2 className="text-3xl md:text-4xl font-extrabold italic text-yellow-400 mb-2 uppercase">
            Educator Resources
          </h2>
          <div className="text-white text-base md:text-lg mb-4 max-w-lg">
            We provide comprehensive support for teachers and counselors
            implementing Sandblox.
          </div>
          <ul className="text-white text-base md:text-lg mb-6 space-y-2">
            <li className="flex items-start gap-2">
              <img
                src="/Skills-Page/6a.webp"
                alt="bullet"
                className="w-6 h-6 mt-1"
              />
              Implementation guides for classroom settings
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/Skills-Page/6a.webp"
                alt="bullet"
                className="w-6 h-6 mt-1"
              />
              Assessment tools to measure skill development
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/Skills-Page/6a.webp"
                alt="bullet"
                className="w-6 h-6 mt-1"
              />
              Professional development workshops
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/Skills-Page/6a.webp"
                alt="bullet"
                className="w-6 h-6 mt-1"
              />
              Curriculum integration frameworks
            </li>
          </ul>
          <button
            onClick={() => setShowComingSoon(true)}
            className="bg-[#a259ff] text-white font-extrabold px-8 py-3 rounded shadow hover:bg-purple-400 transition text-lg mt-2"
          >
            COMING SOON
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/Skills-Page/6b.webp"
            alt="Educator Resources"
            className="rounded-xl object-cover w-full max-w-xl h-auto"
          />
        </div>
      </section>

      <Footer />
      <ComingSoonPopup
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
      />
    </div>
  );
}
