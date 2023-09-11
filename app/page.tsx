import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Newsletter from "@/components/Newsletter";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex justify-center mb-[128px] mt-[32px]">
        <Services />
      </div>

      <div className="flex justify-center gap-[64px]">
        <Projects />
        <Newsletter />
      </div>
    </>
  );
}
