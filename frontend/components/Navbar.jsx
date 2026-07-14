"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Results", href: "/#results" },
  { name: "Courses", href: "/#courses" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <div className="text-xl sm:text-2xl w-10 h-10 font-bold flex gap-1 items-center">
            <Image
              alt="logo"
              width={200}
              height={200}
              src={"/images/applogo.webp"}
            />
            <span className="text-green-600">Chemistry</span>
            <span className="text-gray-900">Mint</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.name !== "Contact" ? (
                <Link
                  href={link.href}
                  className={`${"text-gray-700 transition-colors hover:text-green-600"}`}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 bg-black transition ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={` overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-100 border-t" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col bg-white pb-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.name !== "Contact" ? (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`${"block px-4 py-3 text-gray-700 hover:bg-gray-100"}`}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
