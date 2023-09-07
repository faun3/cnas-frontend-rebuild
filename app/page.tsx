import Image from "next/image";

const services = [
  "Check the price of medication",
  "Chat with us online",
  "My personal eFile",
  "Check your insurance status",
  "Download PIAS Software",
  "Online pharmaceutical supplier data",
  "Nationwide contact links",
];

export default function Home() {
  return (
    <>
      {/* hero */}
      <div className="w-screen h-[600px] overflow-hidden z-[-1] bg-[url('/heroBanner.jpg')] bg-bottom relative">
        <span className="text-white bottom-1/2 absolute left-[5%] font-bold text-3xl">
          Your health is important. <br /> We protect it.
        </span>
      </div>

      {/* container */}
      <div className="w-[calc(100%-256px)] mx-auto">
        {/* Services */}
        <div className="rounded-xl bg-sky-100 overflow-hidden text-lg w-[25em] my-10">
          <div className="bg-slate-200 font-bold w-full py-2 px-5">
            What can we help you with?
          </div>
          <ul>
            {services.map((service, idx) => {
              return (
                <li
                  className="py-1 px-5 hover:bg-white"
                  key={idx}>
                  {service}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
