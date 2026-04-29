import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

const NewsCard = ({ news }) => {
  //   console.log("News Card: ", news);

  return (
    <div className="card bg-base-100 shadow-sm">
      {/* Author Info */}
      <div className="bg-gray-100 p-5 flex gap-4">
        <Image
          src={news.author.img}
          alt={`Image of Author, ${news.author.name}`}
          width={50}
          height={45}
          className="rounded-full"
        />

        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="text-lg font-semibold">{news.author.name}</h3>
            <p>{format(news.author.published_date, "yyyy-MM-dd")}</p>
          </div>

          <div className="flex gap-1">
            <CiBookmark size={25} />
            <CiShare2 size={25} />
          </div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>
        <figure>
          <Image
            src={news.image_url}
            alt={`Image of ${news.title}`}
            width={300}
            height={300}
            className="w-full"
          />
        </figure>
        <p className="line-clamp-3">{news.details}</p>
        <Link href={`/news/${news._id}`}>
          <p className="text-[#FF8C47] font-semibold text-lg">Read More</p>
        </Link>

        <hr className="my-3" />

        <div className="flex justify-between">
          <div className="flex gap-2">
            <FaStar className="text-[#FF8C47]" size={25} />
            <p className="text-lg">{news.rating.number}</p>
          </div>

          <div className="flex gap-2">
            <IoEye className="text-gray-500" size={25} />
            <p className="text-lg">{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
