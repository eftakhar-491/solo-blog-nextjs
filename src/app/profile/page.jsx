import React from "react";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import TypeEffect from "@/components/TypeEffect";
import Loading from "@/components/Loading";

export default async function page() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();

  if (!isUserAuthenticated) {
    console.log(isUserAuthenticated);

    return redirect(
      `/api/auth/login?${process.env.KINDE_POST_LOGIN_REDIRECT_URL}=/profile`
    );
  }
  console.log(user);
  return (
    <>
      <section className="flex-col min-h-[80vh] flex items-center justify-center">
        <p className="text-xl pb-4 font-medium text-gray-700">
          <TypeEffect>Welcome to your profile!</TypeEffect>
        </p>
        <div className="flex flex-row items-center space-x-4">
          <div className="w-[180px] h-[180px] rounded-full border-2">
            <img
              className="w-full h-full rounded-full object-cover"
              src={user?.picture}
              alt="profile image"
            />
          </div>
          <div className="border-l-2 py-4 pl-4">
            <h1 className="text-4xl font-bold">
              {user?.given_name} {user?.family_name}
            </h1>
            <p className="text-xl mt-2 font-medium text-gray-700">
              {user?.email}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
