import Blogs from "@/components/Blogs";
import Loading from "@/components/Loading";
import axios from "axios";
async function fetchBlogs() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return res.data;
}
export default async function Home() {
  const data = await fetchBlogs();

  return (
    <>
      <section>
        <h1 className="text-center mt-4 text-3xl font-semibold">All Blogs</h1>
        <p className="text-sm max-w-[500px] mx-auto text-center mt-1">
          Explore insightful blogs on a variety of topics, crafted to inspire
          and inform. Stay updated with the latest trends and ideas all in one
          place!
        </p>
        <Blogs data={data} />
      </section>
    </>
  );
}
