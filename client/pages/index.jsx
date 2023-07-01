import BlogCard from "../components/BlogCard";
import Tabs from "../components/Tabs";
import { fetchArticles, fetchCategories } from "../utils/api";
import Link from "next/link";

const Home = ({ categories, articles }) => {
  return (
    <div className="py-5">
      <Tabs categories={categories} />
      <div className="mt-10 gap-5 px-3 grid grid-cols-1 md:grid-cols-2 ">
        {articles?.map((e) => {
          return (
            <Link key={e.id} href={`/${e.attributes.Slug}`}>
            <BlogCard 
              title={e.attributes.Title}
              description={e.attributes.Description}
              author={
                e.attributes.users_permissions_user.data.attributes.FirstName +
                " " +
                e.attributes.users_permissions_user.data.attributes.LastName
              }
              date={e.attributes.updatedAt}
            />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetchCategories();
  const res2 = await fetchArticles();

  return {
    props: {
      categories: res.data.data,
      articles: res2.data.data,
    },
  };
};
