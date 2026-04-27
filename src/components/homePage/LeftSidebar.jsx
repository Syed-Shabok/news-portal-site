import Link from "next/link";
import React from "react";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div className="col-span-1  space-y-4">
      <h2 className="text-xl font-semibold">All Categories</h2>
      <ul className="flex flex-col  justify-center gap-2">
        {categories.news_category.map((category) => (
          <li
            key={category.category_id}
            className={`py-4 text-xl font-medium text-gray-500 ${activeId === category.category_id && "bg-slate-100 text-gray-950 font-semibold "}`}
          >
            <Link
              href={`/categories/${category.category_id}`}
              className="block"
            >
              <p className="pl-15">{category.category_name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
