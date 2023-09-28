import Image from "next/image";
import article1 from "@/public/article1.jpg";
import article2 from "@/public/article2.jpg";
import article3 from "@/public/article3.jpg";

const articles = [
  {
    title: "ePlatform Maintenance",
    date: "10 Sep. 2023",
    image: article1,
  },
  {
    title: "Allergy medication shortage",
    date: "29 Aug. 2023",
    image: article2,
  },
  {
    title: "Partnership program closed",
    date: "15 Aug. 2023",
    image: article3,
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
                className="object-cover"
                src={article.image}
                fill={true}
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>
              <div className="absolute bottom-0 left-0 padding-[1rem] m-[1rem] overflow-hidden z-20">
                <p className="text-[#e5e2e2] text-[0.875rem] mb-[0.75rem]">
                  {article.date}
                </p>
                <p className="font-semibold text-[1.25rem] text-white cursor-pointer">
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
