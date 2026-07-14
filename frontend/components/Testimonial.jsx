import Image from "next/image";
import { FaCircleDot } from "react-icons/fa6";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto mt-20 max-w-6xl w-full">
      <h2 className="text-center text-4xl font-bold leading-14 sm:text-5xl">
        What our students say ?
      </h2>

      <div
        className="relative mx-auto mt-10 min-h-[1120px] w-full max-w-[880px] bg-cover bg-center bg-no-repeat pt-10 sm:min-h-[1120px]"
        style={{
          backgroundImage: "url('/images/paper.webp')",
        }}
      >
        {/* White Gradient */}
        <div
          className="absolute left-0 top-0 z-10 h-full w-full"
          style={{
            background:
              "linear-gradient(to right, white 0%, transparent 50%), linear-gradient(to left, white 0%, transparent 50%), linear-gradient(to bottom, white 0%, transparent 50%), linear-gradient(to top, white 0%, transparent 50%)",
          }}
        />

        {/* Card 01 */}
        <div className="relative z-20 mx-auto w-full max-w-[300px] rounded-xl bg-white p-3 shadow-lg sm:absolute sm:left-10 sm:top-14 sm:rotate-6 sm:min-h-[380px]">
          <div className="text-center">
            <FaCircleDot className="text-3xl text-green-200 mx-auto" />
          </div>

          <div className="mt-10 rounded-xl bg-green-200 p-5">
            <div className="flex items-center justify-between">
              <p className="font-caveat text-5xl font-bold">01</p>

              <Image
                src="/images/mdhamdan01.jpg"
                alt="student_image"
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>

            <h4 className="py-3 text-xl font-bold">
              Md. Hamdan (MBBS, IGMS Patna)
            </h4>

            <p className="font-caveat text-2xl leading-7">
              “Sir explains concepts very clearly and from the basics that made
              revision much easier during NEET.”
            </p>
          </div>
        </div>

        {/* Card 02 */}
        <div className="relative z-20 mx-auto mt-10 w-full max-w-[300px] rounded-xl bg-white p-3 shadow-lg sm:absolute sm:right-10 sm:top-28 sm:-rotate-6 sm:min-h-[380px]">
          <div className="text-center">
            <FaCircleDot className="text-3xl text-pink-200 mx-auto" />
          </div>

          <div className="mt-10 rounded-xl bg-pink-200 p-5">
            <div className="flex items-center justify-between">
              <p className="font-caveat text-5xl font-bold">02</p>

              <Image
                src="/images/mdfaizan.jpg"
                alt="student_image"
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>

            <h4 className="py-3 text-xl font-bold">
              Md. Faizan (IIIT Jabalpur)
            </h4>

            <p className="font-caveat text-2xl leading-7">
              “Notes are simple and easy to revise. Teaching is calm and
              supportive, especially before exams.”
            </p>
          </div>
        </div>

        {/* Card 03 */}
        <div className="relative z-20 mx-auto mt-10 w-full max-w-[300px] rounded-xl bg-white p-3 shadow-lg sm:absolute sm:left-10 sm:top-1/2 sm:-rotate-12">
          <div className="text-center">
            <FaCircleDot className="text-3xl text-blue-200 mx-auto" />
          </div>

          <div className="mt-10 h-full rounded-xl bg-blue-200 p-5">
            <div className="flex items-center justify-between">
              <p className="font-caveat text-5xl font-bold">03</p>

              <Image
                src="/images/sidhart01.jpg"
                alt="student_image"
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>

            <h4 className="py-3 text-xl font-bold">
              Siddhart (IIIT Patna)
            </h4>

            <p className="font-caveat text-2xl leading-7">
              “Personal attention and regular doubt sessions helped me a lot.
              Organic chemistry finally makes sense now.”
            </p>
          </div>
        </div>

        {/* Card 04 */}
        <div className="relative z-20 mx-auto mt-10 w-full max-w-[300px] rounded-xl bg-white p-3 shadow-lg sm:absolute sm:right-10 sm:top-[55%] sm:rotate-12">
          <div className="text-center">
            <FaCircleDot className="text-3xl text-yellow-200 mx-auto" />
          </div>

          <div className="mt-10 h-full rounded-xl bg-yellow-200 p-5">
            <div className="flex items-center justify-between">
              <p className="font-caveat text-5xl font-bold">04</p>

              <Image
                src="/images/ravikumar.jpg"
                alt="student_image"
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>

            <h4 className="py-3 text-xl font-bold">
              Ravi Kumar (NIT-Durgapur)
            </h4>

            <p className="font-caveat text-2xl leading-7">
              The best thing about this institute is personal attention. Sir
              always clears doubts patiently, even after class.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}