import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-4">
      <h1 className="text-7xl font-extrabold">404</h1>
      <h2 className="text-3xl font-semibold">Could not find this page.</h2>
      <Link href={"/"}>
        <button className="btn bg-gray-500 text-white">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
