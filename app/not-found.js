"use client"
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

export default function Custom404() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('bg-white', !isDark);
    document.body.classList.toggle('bg-black', isDark);
    document.body.classList.toggle('text-black', !isDark);
    document.body.classList.toggle('text-white', isDark);
  }, [isDark]);

  return (
    <>
    <Navbar/>
        <main className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-8 text-center px-4">
        <div className="flex justify-center gap-2">
          <div className="w-20 h-20 bg-lime-500 rounded-full grid place-items-center">
            <div className="w-7.5 h-7.5 bg-black rounded-full animate-pupil" />
          </div>
          <div className="w-20 h-20 bg-lime-500 rounded-full grid place-items-center">
            <div className="w-7.5 h-7.5 bg-black rounded-full animate-pupil-reverse" />
          </div>
        </div>

        <div>
          <h1 className="text-lime-500 text-3xl sm:text-4xl font-semibold capitalize">Looks like you're lost</h1>
          <p className="text-xl sm:text-2xl mt-2 font-light">404 error</p>
        </div>

        <a
          href="/"
          aria-label="back to home"
          title="back to home"
          className="text-inherit border border-lime-500 text-lg sm:text-xl font-light px-6 py-3 rounded-xl shadow-[0_7px_0_-2px_rgba(94,165,0,1)] hover:bg-lime-500 hover:text-white transition-all"
        >
          back to home
        </a>
      </div>

      <button
        className="fixed top-10 right-10 text-lime-500 text-2xl sm:text-3xl"
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle dark mode"
      >
        🌙
      </button>

      <style jsx>{`
        .animate-pupil {
          animation: movePupil 2s infinite ease-in-out;
        }

        .animate-pupil-reverse {
          animation: movePupil 2s infinite ease-in-out reverse;
        }

        @keyframes movePupil {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-10px, -10px);
          }
          50% {
            transform: translate(10px, 10px);
          }
          75% {
            transform: translate(-10px, 10px);
          }
        }
      `}</style>
    </main>
    </>

  );
}
