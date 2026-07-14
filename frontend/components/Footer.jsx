import Link from "next/link";
import {
  FaLocationDot,
  FaPhone,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="mt-32 font-inter">
      <div className="w-full mx-auto max-w-7xl px-4 py-14">
        {/* Top Grid */}
        <div className=" grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-black">
              Chemistry Mint
            </h3>

            <p className="text-sm leading-relaxed">
              Dedicated to building strong concepts and confident students
              through clear explanations, personal attention, and consistent
              practice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-black">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition hover:text-gray-600">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/#about" className="transition hover:text-gray-600">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/#courses" className="transition hover:text-gray-600">
                  Courses
                </Link>
              </li>

              <li>
                <Link href="/#results" className="transition hover:text-gray-600">
                  Results
                </Link>
              </li>

              <li>
                <Link href="/#contact" className="transition hover:text-gray-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-black">
              Our Courses
            </h4>

            <ul className="space-y-2 text-sm">
              <li>Class 9 & 10 Chemistry</li>
              <li>Class 11 Chemistry</li>
              <li>Class 12 Chemistry</li>
              <li>NEET Preparation</li>
              <li>Doubt & Revision Classes</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-black">
              Contact Us
            </h4>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaLocationDot />
                Ram Rajya more, Siwan, Bihar
              </li>

              <li className="flex items-center gap-2">
                <FaPhone />
                +91 8468962451
              </li>

              <li className="flex items-center gap-2">
                <HiOutlineEnvelope />
                chemistrymint@gmail.com
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-4 flex gap-4 text-2xl">
              <Link
                href="https://www.youtube.com/@chemistrymint8691"
                className="transition hover:text-gray-700"
                aria-label="YouTube"
              >
                <FaYoutube />
              </Link>

              <Link
                href="#"
                className="transition hover:text-gray-700"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://wa.me/918468962451"
                target="_blank"
                className="transition hover:text-gray-700"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          © 2026 Chemistry Mint. All rights reserved.
        </div>
      </div>
    </footer>
  );
}