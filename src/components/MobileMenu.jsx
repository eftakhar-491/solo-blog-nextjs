"use client";
import React, { useState } from "react";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "./ui/button";

export default function MobileMenu() {
  const [menu, setMenu] = useState(false);
  const { user } = useKindeBrowserClient();

  return (
    <>
      <div className="md:hidden block">
        <div
          onClick={() => setMenu((p) => !p)}
          className="active:scale-95 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        {menu && (
          <ul className="block absolute right-10 top-12 border p-4 rounded-lg backdrop-blur-md w-44 md:hidden">
            <Link href="/">
              <li className="border-b-2 mb-2 hover:font-semibold hover:border-b-black border-gray-600">
                Home
              </li>
            </Link>

            <Link href="/profile">
              <li className="border-b-2 hover:font-semibold hover:border-b-black mb-2 border-gray-600">
                Profile
              </li>
            </Link>
            <div>
              {!user?.email ? (
                <>
                  <LoginLink>
                    <Button variant="outline">Login</Button>{" "}
                  </LoginLink>
                  <RegisterLink>
                    <Button variant="outline">Sign up</Button>
                  </RegisterLink>
                </>
              ) : (
                <LogoutLink>
                  <Button variant="outline">Logout</Button>
                </LogoutLink>
              )}
            </div>
          </ul>
        )}
      </div>
    </>
  );
}
