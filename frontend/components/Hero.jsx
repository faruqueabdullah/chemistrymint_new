"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaFlask, FaWhatsapp } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:justify-between w-full py-12"
    >
      {/* Left */}
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold sm:text-6xl">
          <span className="text-green-600">Chemistry </span>

          <span className="relative inline-block">
            Mint

            <Image
              src="/images/leaves.png"
              alt="Leaves"
              width={80}
              height={80}
              className="absolute -right-16 -bottom-8 -z-10 inline-block w-20 rotate-90"
            />
          </span>
        </h1>

        <h2 className="py-10 text-3xl font-bold sm:text-4xl sm:leading-11">
          The best{" "}
          <span className="inline-block h-8 w-8 rounded-full bg-green-400"></span>

          <span className="relative inline-block h-8 w-20 rounded-full bg-blue-400">
            <FaArrowRightLong className="absolute left-4 top-0 text-3xl text-white" />
          </span>

          <br />

          <span className="relative inline-block h-7 w-7 rounded-full bg-violet-400">
            <span className="absolute left-2 top-2 inline-block h-3 w-3 rounded-full border-2 border-white"></span>
          </span>{" "}

          chem<FaFlask className="inline text-2xl text-pink-400" />
          stry coaching
          <br />
          Institute in Siwan
        </h2>

        <Link
          href="https://wa.me/918468962451"
          target="_blank"
          className="block max-w-72 rounded-lg bg-black py-3 text-center text-white transition-all duration-300 hover:bg-gray-800"
        >
          Contact us <FaWhatsapp className="inline text-4xl pl-3"/>
        </Link>
      </div>

      {/* Right */}

      <div className="flex gap-4 sm:gap-10">
        <div className="relative h-100 w-48 rounded-t-full bg-yellow-300 shadow-lg md:w-48 lg:w-52">
          <Image
            src="/images/heroimage.webp"
            alt="Home Image"
            fill
            className="object-cover scale-125"
            priority
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex h-48 w-32 flex-col items-center justify-center rounded-b-full bg-blue-300 p-3 shadow-sm md:h-56 md:w-40">
            <Image
              src="/images/brain.webp"
              alt="Brain"
              width={120}
              height={120}
              className="w-28"
            />

            <p className="p-4 text-center text-3xl font-semibold leading-5">
              100%
              <span className="text-lg leading-4"> concept clarity</span>
            </p>
          </div>

          <div className="flex h-48 w-32 flex-col items-center justify-center rounded-full bg-green-300 p-3 shadow-sm md:h-60 md:w-40">
            <Image
              src="/images/books.webp"
              alt="Books"
              width={120}
              height={120}
            />

            <p className="text-center text-lg font-semibold leading-5">
              Exam based study
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}