import axios from "axios";
import React from "react";

export default async function page(props) {
  const { id } = await props.params;
  console.log(id);
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return (
    <>
      <section className="mt-24">
        <div className="border p-8 shadow-sm rounded-xl max-w-2xl mx-auto mt-4">
          <h1 className="text-xl font-bold mb-2 md:text-3xl ">{data?.title}</h1>
          <p className="">{data?.body}</p>
        </div>
      </section>
    </>
  );
}
