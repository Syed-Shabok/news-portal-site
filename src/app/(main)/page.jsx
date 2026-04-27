import LeftSidebar from "@/components/homePage/LeftSidebar";
import RightSidebar from "@/components/homePage/RightSidebar";
import Image from "next/image";
import Link from "next/link";

const fetchCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();

  return data.data;
};

export default async function Home() {
  const categories = await fetchCategories();

  // console.log(categories);

  return (
    <div className="xl:container xl:mx-auto">
      <div className="grid grid-cols-4">
        <LeftSidebar categories={categories} activeId={null} />

        <div className="col-span-2 bg-green-100">
          <h2>News</h2>
        </div>

        <RightSidebar />
      </div>
    </div>
  );
}
