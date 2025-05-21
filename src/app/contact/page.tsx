"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const faq = [
  {
    q: "How can I purchase Sandblox?",
    a: "Sandblox is available for specific schools, organizations, and individual educators. The game is still in pre-development.",
  },
  {
    q: "How can I donate?",
    a: "Fill out the form on this page with the subject matter: 'Donate' for more information.",
  },
  {
    q: "How can I play the game?",
    a: "The app for Sandblox will be on the App Store and Google Play Store once completed. Stay tuned for more updates.",
  },
  {
    q: "What is the age demographic?",
    a: "Sandblox is designed for all young teens & young adults preparing for the real world. Ages range from 14-30.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // For now, just alert the data
    alert(
      `Message sent!\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`
    );
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      {/* Hero Section */}
      <motion.section
        className="w-full bg-[#a41e1e] pt-10 pb-8 px-4 md:px-0 text-center border-b-4 border-yellow-400"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold italic text-white mb-2 mt-2 tracking-tight">
          CONTACT US OR DONATE
        </h1>
        <p className="text-white text-lg max-w-2xl mx-auto mb-4">
          Have questions about Sandblox or need more information? We're here to
          help! Reach out to our team using the contact form or the information
          below.
        </p>
        <div className="text-white text-base font-bold mb-1">
          <a
            href="mailto:info@sandblox.org"
            className="underline hover:text-yellow-300"
          >
            info@sandblox.org
          </a>
        </div>
        <div className="text-white text-base">(503) 555-1234</div>
        <div className="text-white text-base">Portland, Oregon, USA</div>
      </motion.section>

      {/* Contact Form & FAQ Section */}
      <motion.section
        className="w-full py-12 px-2 md:px-0 bg-[#f6f6f6] flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="flex flex-col md:flex-row gap-14 w-full max-w-5xl justify-center items-stretch relative">
          {/* Decorative shape */}
          <div className="hidden md:block absolute left-[23%] -top-12 w-8 h-8 bg-[#a259ff] rounded-lg rotate-12 z-20" />
          {/* Form Card */}
          <div
            className="bg-white border-2 border-black p-10 flex-1 flex flex-col justify-between relative z-20 shadow-lg h-full"
            style={{ boxShadow: "10px 12px 0 #000" }}
          >
            <h2
              className="text-4xl md:text-5xl font-extrabold italic uppercase text-[#a41e1e] mb-8 text-center tracking-wider leading-tight"
              style={{ letterSpacing: "0.04em" }}
            >
              SEND US A MESSAGE
            </h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <div className="flex flex-col flex-1">
                  <label className="font-bold text-lg mb-1 text-black text-left">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={`bg-white rounded-lg px-4 py-3 text-base text-black placeholder-gray-400 border-2 border-black focus:border-[#a41e1e] focus:outline-none transition-colors`}
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label className="font-bold text-lg mb-1 text-black text-left">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className={`bg-white rounded-lg px-4 py-3 text-base text-black placeholder-gray-400 border-2 border-black focus:border-[#a41e1e] focus:outline-none transition-colors`}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-lg mb-1 text-black text-left">
                  Subject
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="bg-white rounded-lg px-4 py-3 text-base text-black placeholder-gray-400 border-2 border-black focus:border-[#a41e1e] focus:outline-none transition-colors"
                >
                  <option value="" disabled className="text-gray-400 font-bold">
                    Select a subject
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Donate">Donate</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Press">Press</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-lg mb-1 text-black text-left">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your Message"
                  className="bg-white rounded-lg px-4 py-3 text-base text-black placeholder-gray-400 border-2 border-black focus:border-[#a41e1e] focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#a41e1e] text-white font-extrabold italic uppercase px-8 py-2 rounded shadow-lg hover:bg-red-800 transition text-lg tracking-wide mt-2 mx-auto"
                style={{ boxShadow: "4px 6px 0 #000" }}
              >
                SUBMIT
              </button>
              {submitted && (
                <div className="text-green-600 font-bold mt-2">
                  Thank you! Your message has been sent.
                </div>
              )}
            </form>
          </div>
          {/* FAQ Card */}
          <div
            className="bg-[#e6f0fa] border-2 border-black p-10 flex-1 flex flex-col justify-between relative z-20 shadow-lg h-full"
            style={{ boxShadow: "10px 12px 0 #000" }}
          >
            <h3 className="text-3xl font-extrabold italic uppercase text-black mb-6 text-left tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <div className="flex flex-col gap-6">
              {faq.map((item, idx) => (
                <div key={idx}>
                  <div className="font-extrabold text-black text-lg mb-1 text-left">
                    {item.q}
                  </div>
                  <div className="text-gray-700 text-base mb-2 text-left">
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      {/* Stay Connected & Footer (reuse existing) */}
      <Footer />
    </div>
  );
}
