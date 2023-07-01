import BlogCard from "@/components/BlogCard";
import Tabs from "@/components/Tabs";
import Image from "next/image";

const Home = () => {
  return (
    <div className="py-5">
      <Tabs/>
    <div className="mt-10 gap-5 px-3 grid grid-cols-1 md:grid-cols-2 ">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
    </div>
  );
};

export default Home;
