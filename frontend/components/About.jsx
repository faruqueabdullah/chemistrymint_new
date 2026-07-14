import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl pt-12 px-1 md:px-5">
      <h2 className="text-center text-4xl font-bold leading-14 sm:text-5xl">
        Why consider us?
      </h2>

      <div className=" py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left */}
        <div className="relative h-125 w-full max-w-120 overflow-hidden rounded-xl shadow-sm">
          <Image
            src="/images/aboutImage.webp"
            alt="Er. Roshan Sir"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-0 right-0 max-w-72 rounded-tl-2xl bg-white p-3">
            <p className="text-2xl font-semibold leading-8">
              Er. Roshan Sir
            </p>

            <span className="inline-block text-sm">
              B.Tech (Awarded with Hon&apos;s)
              <br />
              M.Sc. (Chemistry)
              <br />
              B.Ed.
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between text-xl">
          <div>
            <p>
              <strong>Chemistry Mint</strong> is a focused chemistry institute
              helping students prepare for{" "}
              <strong>
                Class 11 and 12 (CBSE & BSE boards), NEET, and JEE Main.
              </strong>
            </p>

            <p className="pt-4">
              We simplify complex concepts through clear explanations,
              exam-oriented teaching, and consistent practice.
            </p>

            <p className="py-4">
              Our goal is to build strong fundamentals, boost confidence, and
              help students achieve top results in board and competitive exams.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {/* Card 1 */}
            <div className="flex w-full max-w-60 flex-col items-center justify-center rounded-2xl bg-white shadow-lg">
              <Image
                src="/images/students.webp"
                alt="Students"
                width={130}
                height={100}
                className="h-24 w-32 object-contain"
              />

              <p className="p-4 text-center text-3xl font-semibold leading-6">
                5000+
                <br />
                <span className="text-lg font-medium leading-5">
                  students taught
                </span>
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex w-full max-w-60 flex-col items-center justify-center rounded-2xl bg-white shadow-lg">
              <Image
                src="/images/experiance.webp"
                alt="Experience"
                width={130}
                height={100}
                className="w-32 object-contain"
              />

              <p className="p-4 text-center text-3xl font-semibold leading-6">
                7+ Years
                <br />
                <span className="text-lg font-medium leading-5">
                  teaching experience
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}