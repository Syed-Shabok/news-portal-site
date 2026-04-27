import React from "react";
import Marquee from "react-fast-marquee";

const tempNewsData = [
  {
    id: 1,
    headline: "Global Markets React to Sudden Interest Rate Changes",
  },
  {
    id: 2,
    headline: "Major Tech Company Announces Breakthrough in AI Technology",
  },
  {
    id: 3,
    headline: "Severe Weather Alerts Issued Across Multiple Regions",
  },
  {
    id: 4,
    headline: "New Space Mission Successfully Launches Into Orbit",
  },
  {
    id: 5,
    headline: "Government Unveils New Economic Reform Plan",
  },
  {
    id: 6,
    headline: "Cybersecurity Breach Affects Millions of Users Worldwide",
  },
  {
    id: 7,
    headline: "Healthcare Experts Warn of Rising Global Health Concern",
  },
  {
    id: 8,
    headline: "International Summit Begins Amid Global Tensions",
  },
  {
    id: 9,
    headline: "Breakthrough Renewable Energy Project Gains Momentum",
  },
  {
    id: 10,
    headline: "Major Sports Event Delivers Unexpected Results",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between items-center gap-5 mx-2 xl:container xl:mx-auto bg-[#F3F3F3] px-4">
      <button className="btn bg-red-500 text-white text-xs md:text-base">
        Latest
      </button>
      <Marquee
        pauseOnHover
        speed={70}
        className="h-18 text-xs md:text-base font-semibold"
      >
        {tempNewsData.map((news) => (
          <span key={news.id} className="mx-4 md:mx-6">
            {news.headline}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
