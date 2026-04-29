import LeftSidebar from "@/components/homePage/LeftSidebar";
import RightSidebar from "@/components/homePage/RightSidebar";
import { fetchCategories, fetchNewsByCategoryId } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const defaultCategoryId = "01";

export default async function Home() {
  redirect(`/category/${defaultCategoryId}`);
}
