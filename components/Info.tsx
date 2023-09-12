import Image from "next/image";
import infoSurrounded from "@/public/infoSurrounded.svg";
import arrow16px from "@/public/arrow16px.svg";

const topics = [
  "For insurance beneficiaries",
  "For employers",
  "For suppliers",
  "For healthcare workers",
];

const Info = () => {
  return (
    <div className="p-[2rem] border border-cream shadow rounded-[20px] my-[2rem]">
      <p className="text-[4rem] font-bold text-center mb-[1.5rem]">
        We believe in transparency
      </p>
      <p className="text-gray text-center mb-[3rem]">
        All the info you need, always available and constantly kept up to date
      </p>
      <div className="flex flex-col gap-[1rem] md:grid md:grid-cols-2 md:grid-rows-2 md:gap-[2rem]">
        {topics.map((topic, index) => {
          return (
            <div
              className="flex flex-col gap-[1rem]"
              key={index}>
              <div className="flex gap-[.75rem]">
                <Image
                  src={infoSurrounded}
                  width={32}
                  height={32}
                  alt=""
                  aria-hidden="true"></Image>
                <p className="text-[1.25rem] font-semibold">{topic}</p>
              </div>
              <div>
                <span className="flex text-mainBlue font-semibold cursor-pointer">
                  More info&nbsp;
                  <Image
                    src={arrow16px}
                    width={16}
                    height={16}
                    alt=""
                    aria-hidden="true"></Image>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Info;
