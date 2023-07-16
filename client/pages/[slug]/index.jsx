import Image from "next/image";
import { fetchSingleArticle, fetchUser, url } from "../../utils/api";

const singlePage = ({ article, user }) => {
  
  const updateDate = () => {
    const d = new Date(article.updatedAt);
    return d.toString().split("GMT")[0];
  };
if(!article || !user){
  return "No Page Found Please Login"
}
  if(article && user){
  return (
    <div className="my-10 container mx-auto px-5">
      <p className=" font-bold font-serif text-xl">{article.Title}</p>
      <div className="flex items-center my-5 ">
        <Image
          src={`${url}${user.Profile.url}`}
          alt="Logo"
          width={100}
          height={100}
          className=" rounded-full w-16 h-16 "
        />
        <p className=" ml-5">
          {user.FirstName + " " + user.LastName} : {updateDate()}
        </p>
      </div>
      <Image
        src={`${url}${article?.Image?.data?.attributes?.formats?.large.url}`}
        alt="Logo"
        width={700}
        height={500}
        quality={96}
      />
      <p className="my-5 text-justify">{article.Description}</p>
    </div>
  );
}
};

export default singlePage;

export const getServerSideProps = async (ctx) => {
  const token = ctx.req.rawHeaders[11]?.split('=')[1];
  const res = await fetchSingleArticle(ctx.query.slug);
  const email = res
    ? res.data.data[0].attributes.users_permissions_user.data.attributes.email
    : "";
  const res2 = await fetchUser(email);
  
  if(token.length>30){
    return {
      props: {
        article: res.data.data[0].attributes,
        user: res2.data[0],
      },
    };
  }
  return {
    props: {
      auth:false
    },
  };
};
