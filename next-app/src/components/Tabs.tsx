

const Tabs = () => {
  return (
    <div>
        <ul className=" flex justify-start flex-wrap px-2 font-serif italic text-xl cursor-pointer">
          {[
            ["Node", "/node"],
            ["fullstack", "/node"],
            ["Digital", "/node"],
            ["React", "/node"],
          ].map(([name, url], i) => {
            return (
              <li key={i} className="m-2">
                {name}
              </li>
            );
          })}
        </ul>
      </div>
  )
}

export default Tabs
