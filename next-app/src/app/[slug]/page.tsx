import Image from "next/image";

const singlePage = () => {
  return (
    <div className="my-10 container mx-auto px-5">
      <p className=" font-bold font-serif text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis aut
        exercitationem quo? Quam, non et.
      </p>
      <div className="flex items-center my-5 ">
        <Image
          src={"/favicon.ico"}
          alt="Logo"
          width={100}
          height={100}
          className=" rounded-full w-16 h-16 "
        />
        <p className=" ml-5">Aditya Kumar : 26 feb 2023</p>
      </div>
      <div className=" border-2 border-red-500 h-80 my-10"></div>
      <p className="my-5 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, nihil unde temporibus voluptates amet blanditiis dolore minima facilis, illo ipsam alias excepturi omnis aut. Doloribus earum et at voluptatem est dolorum quam cum dolor maiores, nobis recusandae enim qui expedita eum molestiae voluptas temporibus corrupti? Nisi, veniam nobis. Cupiditate sapiente minus atque qui autem, quaerat ut itaque beatae quod pariatur minima necessitatibus velit, voluptas eaque quidem, non voluptatem. Ipsum, quisquam? Natus deleniti recusandae ipsum aliquid, a temporibus, ad eligendi laudantium voluptates incidunt cumque, quam doloremque labore? Rem quo porro deleniti architecto quod fugiat quaerat fugit, ex vel, quos numquam neque!</p>
    </div>
  );
};

export default singlePage;
