import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function YoutubeSection() {
  return (
    <section id="youtube" className="mx-auto w-full max-w-6xl pt-12">
      <h2 className="text-center text-4xl font-bold leading-14 sm:text-5xl">
        We are on <FaYoutube className="inline text-[#fc1c03]" />
        YouTube
      </h2>

      <div className="flex flex-col-reverse gap-16 py-16 md:flex-row">
        {/* Left */}
        <div className="w-full text-center text-xl md:max-w-100 md:text-left">
          <h3 className="pb-6 font-caveat text-2xl font-bold">
            Learn Anytime with
            <br />
            <span className="font-inter text-3xl">
              <span className="text-green-600">Chemistry</span> Mint
            </span>
          </h3>

          <p>
            Learn Chemistry beyond the classroom through our YouTube channel,
            where complex topics are explained in a simple and practical way.
          </p>

          <div className="mt-16 flex gap-6">
            <Link
              href="https://www.youtube.com/@chemistrymint8691"
              target="_blank"
              className="w-full rounded-lg bg-white py-3 text-center text-black shadow-sm transition-all duration-300 hover:bg-gray-200"
            >
              Subscribe{" "}
              <FaYoutube className="inline  text-4xl text-[#fc1c03]" />
            </Link>

            <Link
              href="https://wa.me/918468962451"
              target="_blank"
              className="w-full rounded-lg bg-black py-3 text-center text-white transition-all duration-300 hover:bg-gray-800"
            >
              Contact us <FaWhatsapp className="inline text-4xl pl-3" />
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative aspect-video w-full max-w-220 overflow-hidden rounded-xl shadow-xl">
          <Link
            href="https://www.youtube.com/@chemistrymint8691"
            target="_blank"
          >
            <Image
              src="/images/youtubechannel_img.webp"
              alt="Chemistry Mint YouTube Channel"
              fill
              className=" transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
