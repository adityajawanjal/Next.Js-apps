import Image from "next/image";
import { fetchSingleArticle, url } from "../../utils/api";

const singlePage = ({ article }) => {
  console.log(article);
  const updateDate = () => {
    const d = new Date(article.updatedAt);
    return d.toString().split("GMT")[0];
  };
  return (
    <div className="my-10 container mx-auto px-5">
      <p className=" font-bold font-serif text-xl">{article.Title}</p>
      <div className="flex items-center my-5 ">
        <Image
          src={"/favicon.ico"}
          alt="Logo"
          width={100}
          height={100}
          className=" rounded-full w-16 h-16 "
        />
        <p className=" ml-5">
          {article.users_permissions_user.data.attributes.FirstName +
            " " +
            article.users_permissions_user.data.attributes.LastName}{" "}
          : {updateDate()}
        </p>
      </div>
      <Image
      src={''}
          // src={`${url}/${article.Image.data.attributes.formats.large.url}`}
          alt="Logo"
          width={100}
          height={100}
          className=" w-full h-80 "
        />
      {/* <div className=" border-2 border-red-500 h-80 my-10"></div> */}
      <p className="my-5 text-justify">{article.Description}</p>
    </div>
  );
};

export default singlePage;

export const getServerSideProps = async ({ query }) => {
  const { data } = await fetchSingleArticle(query.slug);

  return {
    props: {
      article: data.data[0].attributes,
    },
  };
};
