import { FaGraduationCap } from "react-icons/fa6";

export default function Courses() {
  return (
    <section id="courses" className="mx-auto mt-20 max-w-6xl w-full">
      <div className="flex flex-col gap-16 py-20 md:flex-row">
        {/* Courses */}
        <div className="w-full">
          <div className="w-full rounded-xl bg-white p-3 shadow-lg">
            <h3 className="text-center text-4xl font-bold sm:text-5xl">
              Our Courses
            </h3>

            <ul className="mt-10 w-full rounded-xl bg-green-200 p-5">
              <li className="border-b-2 border-dashed pb-5 text-2xl font-semibold">
                <FaGraduationCap className="mr-3 inline" />
                11 and 12 (CBSE and BSEB)
              </li>

              <li className="border-b-2 border-dashed py-5 text-2xl font-semibold">
                <FaGraduationCap className="mr-3 inline" />
                NEET
              </li>

              <li className="border-b-2 border-dashed py-5 text-2xl font-semibold">
                <FaGraduationCap className="mr-3 inline" />
                JEE Mains/Advance
              </li>
            </ul>
          </div>
        </div>

        {/* Google Map */}
        <div className="aspect-video w-full overflow-hidden rounded-xl shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.4752883093897!2d84.35312717447857!3d26.213741989780534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fbff8d9cae45%3A0xd2309dcfe12bbffb!2sRam%20Rajya%20More%2C%2024%2C%20Station%20Rd%2C%20near%20Richa%20Gas%20Agency%2C%20Kagzi%20Muhalla%2C%20Siwan%2C%20Bihar%20841226!5e0!3m2!1sen!2sin!4v1766815130500!5m2!1sen!2sin"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}