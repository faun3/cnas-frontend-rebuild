import arrow16px from "@/public/arrow16px.svg";
import pillSurrounded from "@/public/pillSurrounded.svg";
import chatSurrounded from "@/public/chatSurrounded.svg";
import clipboardSurrounded from "@/public/clipboardSurrounded.svg";
import Image from "next/image";

const Services = () => {
  return (
    <div className="p-[2rem] rounded-[20px] shadow md:w-[51.875rem] border border-cream">
      <p className="font-bold text-[2rem] mb-[2.5rem] text-center">
        What can we do for you?
      </p>
      <div className="flex flex-row justify-between w-full">
        <div>
          <Image
            className="mb-[1.5rem]"
            src={pillSurrounded}
            width={32}
            height={32}
            alt=""
            aria-hidden="true"></Image>
          <p className="font-bold mb-[0.75rem]">Check prices</p>
          <p className="text-gray w-[12rem] mb-[1.5rem] h-[9rem]">
            Check the prices of medication in real time using our online
            platform. We keep you up to date so there&apos;s no more unpleasant
            surprises.
          </p>
          <span className="flex text-mainBlue font-semibold cursor-pointer">
            Try now&nbsp;
            <Image
              src={arrow16px}
              width={16}
              height={16}
              alt=""
              aria-hidden="true"></Image>
          </span>
        </div>
        <div>
          <Image
            className="mb-[1.5rem]"
            src={chatSurrounded}
            width={32}
            height={32}
            alt=""
            aria-hidden="true"></Image>
          <p className="font-bold mb-[0.75rem]">Chat with us</p>
          <p className="text-gray w-[12rem] mb-[1.5rem] h-[9rem]">
            Chat with one of our experts and get help with our services, or
            discuss different pricing options. We answer 24/7.
          </p>
          <span className="flex text-mainBlue font-semibold cursor-pointer">
            Try now&nbsp;
            <Image
              src={arrow16px}
              width={16}
              height={16}
              alt=""
              aria-hidden="true"></Image>
          </span>
        </div>
        <div>
          <Image
            className="mb-[1.5rem]"
            src={clipboardSurrounded}
            width={32}
            height={32}
            alt=""
            aria-hidden="true"></Image>
          <p className="font-bold mb-[0.75rem]">Personalized eFile</p>
          <p className="text-gray w-[12rem] mb-[1.5rem] h-[9rem]">
            All your medical info, including insurance status in one place. We
            protect your data and comply with all EU laws and regulations.
          </p>
          <span className="flex text-mainBlue font-semibold cursor-pointer">
            Try now&nbsp;
            <Image
              src={arrow16px}
              width={16}
              height={16}
              alt=""
              aria-hidden="true"></Image>
          </span>
        </div>
      </div>
      <p className="text-gray underline text-center mt-[4rem] font-medium cursor-pointer">
        Browse our full list of services here
      </p>
    </div>
  );
};
export default Services;
