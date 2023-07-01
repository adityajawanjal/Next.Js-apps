import Link from "next/link";


const Tabs = () => {
  return (
    <div>
        <ul className=" flex justify-start flex-wrap px-2 font-serif italic text-2xl cursor-pointer">
          {[
            ["Node", "/node"],
            ["fullstack", "/node"],
            ["Digital", "/node"],
            ["React", "/node"],
          ].map(([name, url], i) => {
            return (
              <Link key={i} href={`category/${url}`}>
              <li className="m-2">
                {name}
              </li>
              </Link>
            );
          })}
        </ul>
      </div>
  )
}

export default Tabs
