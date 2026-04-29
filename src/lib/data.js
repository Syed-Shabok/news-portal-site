export const fetchCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();

  return data.data;
};

export const fetchNewsByCategoryId = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`,
  );
  const data = await res.json();

  return data.data;
};

export const fetchNewsDetailsById = async (newsId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${newsId}`,
  );
  const data = await res.json();

  return data.data[0];
};
