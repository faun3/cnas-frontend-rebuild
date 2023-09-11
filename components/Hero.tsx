import Image from "next/image";
import heroClipboard from "@/public/heroClipboard.svg";
import heroAmbulance from "@/public/heroAmbulance.svg";
import heroHandshake from "@/public/heroHandshake.svg";
import heroMedical from "@/public/heroMedical.svg";
import top from "@/public/top.jpg";
import bottomRight from "@/public/bottomRight.jpg";
import bottomLeft from "@/public/bottomLeft.jpg";

const Hero = () => {
  return (
    <div className="p-[3rem] flex flex-col md:flex-row gap-[4rem] items-center">
      <div className="flex flex-col">
        <div className="relative">
          <div className="relative rounded-[20px] w-[35rem] h-[14rem] overflow-hidden mb-[2rem]">
            <Image
              className="object-cover"
              src={top}
              fill={true}
              alt=""
              aria-hidden="true"></Image>
          </div>
          <Image
            className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
            src={heroMedical}
            width={64}
            height={64}
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-[2rem]">
          <div className="relative">
            <div className="relative rounded-[20px] w-[10.25rem] h-[14rem] overflow-hidden ml-[1.5rem]">
              <Image
                className="object-cover"
                src={bottomLeft}
                fill={true}
                alt=""
                aria-hidden="true"></Image>
            </div>
            <Image
              className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
              src={heroHandshake}
              width={64}
              height={64}
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="relative w-fit h-fit">
            <div className="relative rounded-[20px] w-[16rem] h-[11rem] overflow-hidden">
              <Image
                className="object-cover"
                src={bottomRight}
                fill={true}
                alt=""
                aria-hidden="true"></Image>
            </div>
            <Image
              className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
              src={heroAmbulance}
              height={64}
              width={64}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
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
