"use client";

import React from "react";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm sm:max-w-md w-full p-6 sm:p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
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
          <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4 sm:mb-6">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-white"
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
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-2 sm:mb-3 italic">
            COMING SOON
          </h3>

          {/* Message */}
          <p className="text-gray-600 text-sm sm:text-lg mb-4 sm:mb-6 leading-relaxed">
            We&apos;re working hard to bring you this feature. Stay tuned for
            updates!
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center gap-2 mb-4 sm:mb-6">
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
            className="bg-yellow-400 text-black font-extrabold px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105 italic text-sm sm:text-base"
          >
            GOT IT
          </button>
        </div>
      </div>
    </div>
  );
}
