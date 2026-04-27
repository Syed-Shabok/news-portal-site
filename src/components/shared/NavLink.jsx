"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${pathName === href ? "text-black font-semibold" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
