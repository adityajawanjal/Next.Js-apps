import BlogCard from "@/components/BlogCard";
import Tabs from "@/components/Tabs";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import {fetchCategories} from "@/service/api"

const Home = () => {
  return (
    <div className="py-5">
      <Tabs />
      <div className="mt-10 gap-5 px-3 grid grid-cols-1 md:grid-cols-2 ">
        <Link href={"/1"}>
          <BlogCard />
        </Link>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Home;

