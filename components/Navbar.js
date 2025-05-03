"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useSession, signOut } from "next-auth/react";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const { data: session, status } = useSession();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/community", label: "Community" }
  ];

  return (
    <header className="bg-[#F7F9F3] text-black shadow-md px-2.5 p-4 sticky top-0 z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold tracking-wide">Samarthan Setu</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-lg font-light">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${
                  pathname === href
                    ? "text-lime-600 "
                    : "text-black hover:text-[#73A40D]"
                } hover:underline transition font-bold`}
              >
                {label}
              </Link>
            </li>
          ))}
          {session ? (
            <li>
              <button
                onClick={() => signOut()}
                className="text-black hover:text-[#73A40D] hover:underline transition font-bold"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link
                href="/login"
                className={`${
                  pathname === "/login"
                    ? "text-lime-600"
                    : "text-black hover:text-[#73A40D]"
                } hover:underline transition font-bold`}
              >
                Get Involved
              </Link>
            </li>
          )}
        </ul>
        <Link
        href="/donate"
        className="hidden md:inline-block bg-lime-600 text-white py-2 px-6 rounded-full font-semibold hover:shadow-md outline-0"
      >
        Donate
      </Link>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-black"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3BottomLeftIcon className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 px-4 pb-4 text-lg font-light">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block ${
                  pathname === href
                    ? "text-lime-600"
                    : "text-black hover:text-[#73A40D]"
                } hover:underline transition font-bold`}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {label}
              </Link>
            </li>
          ))}
          {session ? (
            <li>
              <button
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
                className="text-black hover:text-[#73A40D] hover:underline transition font-bold"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link
                href="/login"
                className="block text-black hover:text-[#73A40D] hover:underline transition font-bold"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>
          )}
                  <Link
        href="/donate"
        className=" bg-lime-600 text-white py-2 px-6 rounded-full font-semibold hover:shadow-md outline-0"
      >
        Donate
      </Link>
        </ul>
      )}
    </header>
  );
}
