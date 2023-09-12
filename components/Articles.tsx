import Image from "next/image";

const articles = [
  {
    title: "ePlatform Maintenance",
    date: "10 Sep. 2023",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  {
    title: "Allergy medication shortage",
    date: "29 Aug. 2023",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    title: "Partnership program closed",
    date: "15 Aug. 2023",
    image:
      "https://images.unsplash.com/photo-1584516150909-c43483ee7932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2024&q=80",
  },
];

const Articles = () => {
  return (
    <div className="p-[2rem]">
      <p className="text-[2rem] font-bold mb-[2.25rem] text-center">
        Our latest articles
      </p>
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-[1rem]">
        {articles.map((article, index) => {
          return (
            <div
              key={index}
              className="rounded-[20px] overflow-hidden h-[20rem] w-[18rem] relative border border-cream shadow">
              <Image
                className="-z-20 object-cover"
                src={article.image}
                fill={true}
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/90 -z-10"></div>
              <div className="absolute bottom-0 left-0 padding-[1rem] m-[1rem] overflow-hidden">
                <p className="text-[#e5e2e2] text-[0.875rem] mb-[0.75rem]">
                  {article.date}
                </p>
                <p className="font-semibold text-[1.25rem] text-white">
                  {article.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Articles;
