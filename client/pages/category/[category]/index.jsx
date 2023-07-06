import Link from "next/link";
import BlogCard from "../../../components/BlogCard";
import { fetchAllUsers, fetchArticles } from "../../../utils/api";

const category = ({ articles, users }) => {
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
              pic={
                users.find(
                  (i) =>
                    i.email ===
                    e.attributes.users_permissions_user.data.attributes.email
                ).Profile.url
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
  const data = await fetchArticles(query.category);
  const sorted = data?.data.data.filter(
    (e) => e.attributes.category.data.attributes.Slug === query.category
  );
  const res2 = await fetchAllUsers();

  return {
    props: {
      articles: sorted,
      users: res2.data,
    },
  };
};
