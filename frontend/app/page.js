import About from "@/components/About";
import Courses from "@/components/Courses";
import CallToAction from "@/components/Cta";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonial";
import YoutubeSection from "@/components/Youtube";
import Carausel from "@/components/Carausel";
import FadeIn from "@/components/Motion";

export default function Home() {
  return (
    <div className="px-4">
      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn>
        <About />
      </FadeIn>

      <YoutubeSection />
      <Testimonials />
      <Carausel />

      <FadeIn>
        <Courses />
      </FadeIn>

      <CallToAction />


    </div>
  );
}
