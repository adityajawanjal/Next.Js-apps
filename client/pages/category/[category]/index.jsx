import Link from "next/link";
import BlogCard from "../../../components/BlogCard";
import { fetchArticles } from "../../../utils/api";

const category = ({ articles }) => {
  return (
    <div className="mt-10 gap-5 px-3 grid grid-cols-1 ">
      {articles.map((e) => {
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
  );
};

export default category;

export const getServerSideProps = async ({ query }) => {
  const { data } = await fetchArticles(query.category);
  const sorted = data?.data.filter(
    (e) => e.attributes.category.data.attributes.Slug === query.category
  );

  return {
    props: {
      articles: sorted,
    },
  };
};
