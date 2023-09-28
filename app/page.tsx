import Services from "@/components/Services";
import Footer from "@/components/Footer";
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
      <div>
        <div className="text-[2.5rem] font-bold my-[8rem] text-center px-[8rem]">
          <div className="mb-[2rem]">
            Think insurance is complicated? <br />
            Think again.
          </div>
          <div className="text-left text-[1.5rem] font-semibold text-gray mb-[2rem]">
            We provide insurance for individuals, employers and businesses, so
            you are covered for the unexpected. We take pride in our work,
            providing you with the best medical services possible, all in one
            easy to use package.
          </div>
          <button className="px-[1.5rem] py-[0.75rem] text-white font-semibold bg-mainBlue rounded-[10px] text-[1.5rem] hover:bg-mainBlue/80 active:bg-mainBlue/80 active:scale-90">
            Join us
          </button>
        </div>
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
      <Footer />
    </>
  );
}
