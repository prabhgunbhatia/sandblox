"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ComingSoonPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonPopup({
  isOpen,
  onClose,
}: ComingSoonPopupProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close popup"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="text-center">
            {/* Icon */}
            <div className="mx-auto w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-extrabold text-gray-800 mb-3 italic">
              COMING SOON
            </h3>

            {/* Message */}
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We're working hard to bring you this feature. Stay tuned for
              updates!
            </p>

            {/* Decorative elements */}
            <div className="flex justify-center gap-2 mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>

            {/* Action button */}
            <button
              onClick={onClose}
              className="bg-yellow-400 text-black font-extrabold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105 italic"
            >
              GOT IT
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
