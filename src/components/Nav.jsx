import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="px-[5%] mx-auto py-2 flex flex-row justify-between items-center">
          <h1 className="text-2xl font-semibold ">Solo Blogs</h1>
          <ul className="flex flex-row space-x-4">
            <Link className="hover:underline" href="/">
              <li>Home</li>
            </Link>

            <Link className="hover:underline" href="/blogs">
              <li>Blog's</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
