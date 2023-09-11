const Newsletter = () => {
  return (
    <div className="p-[2rem] border border-cream shadow rounded-[20px] h-fit">
      <p className="mb-[3rem] text-[32px] font-bold w-[350px]">
        Never want to miss our updates? Sign up for our newsletter
      </p>
      <label
        htmlFor="newsletterEmail"
        hidden>
        Email
      </label>
      <div className="flex w-full gap-[1.5rem] mb-[2rem] items-center">
        <input
          type="email"
          placeholder="email@example.com"
          id="newsletterEmail"
          className="rounded-[10px] border-cream border text-[14px] px-4 flex-shrink-0 h-[2rem] block"
        />
        <button className="bg-mainBlue text-white text-bold font-bold px-4 py-2 rounded-[10px] text-[14px] hover:bg-blue-800">
          Subscribe
        </button>
      </div>
      <p>
        Your data is safe. Read our{" "}
        <span className="text-mainBlue font-semibold cursor-pointer">
          privacy policy.
        </span>
      </p>
    </div>
  );
};
export default Newsletter;
