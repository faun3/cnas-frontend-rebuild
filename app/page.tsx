import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      {/* hero */}
      <div className="w-screen h-[600px] overflow-hidden z-[-1] bg-[url('/heroBanner.jpg')] bg-bottom relative">
        <span className="text-white bottom-1/2 absolute left-[5%] font-bold text-3xl">
          Your health is important. <br /> We protect it.
        </span>
      </div>

      {/* Services */}
      <div className="flex justify-center">
        <Services />
      </div>

      {/* Insurance and information */}
      <div className="rounded-xl bg-sky-100 my-10 mx-5">
        <h1 className="font-bold text-3xl text-center">
          Insurance - peace of mind for you and your loved ones
        </h1>
        <button className="rounded-lg px-6 py-3 bg-blue-700 text-white font-bold my-5">
          Check your insurance status
        </button>
        <div>
          <h2>Information about our insurance offers</h2>
          <p>
            We offer a wide range of insurance products to suit your needs.
            Whether you are looking for a simple health insurance or a
            comprehensive package, we have the right solution for you.
          </p>
        </div>
      </div>
    </>
  );
}
