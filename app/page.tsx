import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* hero */}
      <div className="w-screen h-[600px] overflow-hidden z-[-1] bg-[url('/heroBanner.jpg')] bg-bottom relative">
        <span className="text-white bottom-1/2 absolute left-[5%] font-bold text-3xl">
          Your health is important. <br /> We protect it.
        </span>
      </div>
    </>
  );
}
