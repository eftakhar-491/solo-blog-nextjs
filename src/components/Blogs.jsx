import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
export default function Blogs({ data }) {
  return (
    <div className=" grid grid-cols-1 px-[5%] md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mx-auto">
      {data?.map((blog, i) => (
        <Card key={i}>
          <CardHeader>
            <Link href={`/blog/${blog?.id}`}>
              <CardTitle>{blog?.title}</CardTitle>
            </Link>
            <CardDescription>{blog?.body}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
