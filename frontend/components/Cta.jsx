import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaWhatsapp } from "react-icons/fa6";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="mx-auto mt-20 flex max-w-6xl flex-col items-center w-full"
    >
      <h2 className="text-center text-3xl font-bold sm:text-4xl sm:leading-12 w-full py-20">
        Join us{" "}
        <span className="inline-block pr-6">
          <span className="relative z-10 inline-block w-24 rounded-full bg-yellow-200 text-5xl">
            &

            <span className="absolute -top-2 left-14 -z-10 inline-block w-16 rounded-full border bg-white">
              <Image
                src="/images/bags.png"
                alt="School Bag"
                width={64}
                height={64}
              />
            </span>
          </span>
        </span>
        
        start your journey towards
        <br />
        better results{" "}
        <span className="relative inline-block h-10 w-24 rounded-full bg-green-400">
          <FaArrowRightLong className="absolute left-6 top-1 text-3xl text-white" />
        </span>{" "}
        today.
      </h2>

      <Link
        href="https://wa.me/918468962451"
        target="_blank"
        className="mt-8 block w-full max-w-75 rounded-lg bg-black py-3 text-center text-white text-xl transition-all duration-300 hover:bg-gray-800"
      >
        Contact us <FaWhatsapp className="inline text-4xl pl-3"/>
      </Link>
    </section>
  );
}