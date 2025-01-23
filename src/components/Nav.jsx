import Link from "next/link";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "./ui/button";
import MobileMenu from "./MobileMenu";

export default async function Nav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <>
      <nav className="">
        <div className="relative px-[5%] mx-auto py-2 flex flex-row justify-between items-center">
          <h1 className="flex text-xl  md:text-2xl items-center gap-1 font-semibold ">
            SOLO BLOGS
          </h1>
          <ul className="hidden md:flex items-center flex-row space-x-4">
            <Link className="hover:underline" href="/">
              <li>Home</li>
            </Link>

            <Link className="hover:underline" href="/profile">
              <li>Profile</li>
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
          <MobileMenu />
        </div>
      </nav>
    </>
  );
}
