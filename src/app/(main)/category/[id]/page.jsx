import LeftSidebar from "@/components/homePage/LeftSidebar";
import NewsCard from "@/components/homePage/NewsCard";
import RightSidebar from "@/components/homePage/RightSidebar";
import { fetchCategories, fetchNewsByCategoryId } from "@/lib/data";
import { TfiFaceSad } from "react-icons/tfi";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log("ID: ", id);

  const categories = await fetchCategories();

  const news = await fetchNewsByCategoryId(id);

  return (
    <div className="xl:container xl:mx-auto">
      <div className="grid grid-cols-4">
        <LeftSidebar categories={categories} activeId={id} />

        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-4">
            {
              categories.news_category.find(
                (category) => category.category_id === String(id),
              ).category_name
            }
          </h2>
          <div className="space-y-2">
            {news.length > 0 ? (
              news.map((n) => <NewsCard key={n._id} news={n} />)
            ) : (
              <div className="h-[50vh] flex flex-col gap-4 items-center justify-center ">
                <TfiFaceSad className="gray-text" size={40} />
                <h3 className="text-2xl font-semibold text-center gray-text">
                  No news available.
                </h3>
              </div>
            )}
          </div>
        </div>

        <RightSidebar />
      </div>
    </div>
  );
};

export default NewsCategoryPage;
