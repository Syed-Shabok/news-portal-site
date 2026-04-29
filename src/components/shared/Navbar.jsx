"use client";

import Link from "next/link";
import avatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  // console.log("Session User: ", user);

  return (
    <div className="navbar bg-base-100 xl:px-0 xl:container xl:mx-auto my-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink href={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink href={"/career"}>Career</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal text-lg gray-text px-1">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink href={"/career"}>Career</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-2 gap-2">
        {user ? (
          <>
            <p>{`Hello, ${user.name}`}</p>

            <Image
              src={user.image || avatar}
              alt="User photo"
              width={60}
              height={60}
              className="rounded-full"
            />

            <Link href={"/login"}>
              <button
                onClick={async () => await authClient.signOut()}
                className="btn text-white bg-[#403F3F] px-10"
              >
                Logout
              </button>
            </Link>
          </>
        ) : (
          <Link href={"/login"}>
            <button className="btn text-white bg-[#403F3F] px-10">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
