import Image from "next/image";
import heroClipboard from "@/public/heroClipboard.svg";
import heroAmbulance from "@/public/heroAmbulance.svg";
import heroHandshake from "@/public/heroHandshake.svg";
import heroMedical from "@/public/heroMedical.svg";

const Hero = () => {
  return (
    <div className="p-[3rem] flex flex-col md:flex-row">
      <div></div>
      <div className="text-[64px] font-bold leading-[95%]">
        We make <br />
        insurance <br />
        <span className="text-mainBlue flex gap-2">
          easy{" "}
          <Image
            src={heroClipboard}
            width={64}
            height={64}
            alt=""
            aria-hidden="true"></Image>{" "}
        </span>
      </div>
    </div>
  );
};
export default Hero;
