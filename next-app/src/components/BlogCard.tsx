import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="border-2 rounded-3xl h-80 sm:h-48 md:h-52 xl:h-48 p-5 overflow-hidden shadow-xl hover:translate-y-1 cursor-pointer">
      <div className="flex flex-col">
        <h2 className=" font-bold">How to learn Node.Js in Hindi How to</h2>
        <div className="flex items-center my-2 ">
          <Image
            src={"/favicon.ico"}
            alt="Logo"
            width={100}
            height={100}
            className=" rounded-full w-8 h-8 "
          />
          <p className=" ml-5">Aditya Kumar : 26 feb 2023</p>
        </div>
        <p className=" text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
          corporis fugiat cumque temporibus quo sequi sunt, tempore, atque
          laboriosam architect
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
