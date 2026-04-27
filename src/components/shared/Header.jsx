import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center space-y-2 my-4 mx-2 xl:container xl:mx-auto">
      <Image src={logo} className="mx-auto" alt="Dragon News Logo" />
      <p className="text-sm md:text-lg">Journalism Without Fear or Favour</p>

      <p className="text-xl font-medium">
        {format(new Date(), "EEEE, MMMM, d, yyy")}
      </p>
    </div>
  );
};

export default Header;
