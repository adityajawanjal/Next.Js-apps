import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" h-16 sm:h-24 md:h-24 xl:h-28 border-2 rounded-3xl border-gray-950 m-5 shadow-slate-700 shadow-lg flex items-center justify-between px-3 md:px-5 ">
      <div className=" flex items-center">
        <Image
          src={"/favicon.ico"}
          alt="Logo"
          width={100}
          height={100}
          className=" rounded-full w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
        />
        <h2 className="ml-5 text-xl md:text-4xl">Blogipodia</h2>
      </div>
      <div>
      <Image
          src={"/favicon.ico"}
          alt="Logo"
          width={100}
          height={100}
          className=" rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
        />
      </div>
    </div>
  );
};

export default Navbar;
