import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Newsletter from "@/components/Newsletter";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Articles from "@/components/Articles";

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <Hero />
      </div>
      <div className="flex justify-center mb-[2rem] mt-[2rem]">
        <Services />
      </div>

      <div>
        <Info />
        <Articles />
      </div>
      <div className="flex justify-center gap-[4rem] mb-[2rem] p-[2rem]">
        <Projects />
        <Newsletter />
      </div>
    </>
  );
}
