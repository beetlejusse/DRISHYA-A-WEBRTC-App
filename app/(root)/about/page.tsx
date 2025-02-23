"use client";
import React from 'react';

export default function AboutPage() {
  return (
    <main className="relative flex h-screen w-full items-center justify-center">
      <div className="absolute inset-0 animate-pulse bg-opacity-10"></div>

      <div className="z-10 flex flex-col items-center justify-center p-6 rounded-lg bg-black bg-opacity-40 backdrop-blur-lg shadow-lg max-w-3xl">
        <h1 className="text-white text-4xl font-bold mb-4">About DRISHYA</h1>
        <p className="text-gray-300 mb-6 text-center">
          DRISHYA is a cutting-edge web application designed to provide seamless real-time communication through WebRTC technology. Our platform enables users to connect effortlessly, ensuring high-quality audio and video interactions directly from their browsers.
        </p>
        <p className="text-gray-300 mb-6 text-center">
          Currently, i am refining the user interface to enhance user experience, with all core functionalities already implemented. Stay tuned for upcoming updates that will make your interactions even more intuitive and enjoyable.
        </p>
        <a
          href="https://github.com/beetlejusse/WEBRTC"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Star on GitHub
        </a>
      </div>
    </main>
  );
}
