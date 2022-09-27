import { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const navLinks = [
  { id: "1", title: "All" },
  { id: "2", title: "Design" },
  { id: "3", title: "Brandig" },
  { id: "4", title: "Illustrations" },
  { id: "5", title: "Icons" },
  { id: "6", title: "Themes" },
];

const NavBar = ({ router }) => {
  const [active, setActive] = useState(navLinks[0].title);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
  }, [router]);

  return (
    <div className="w-full flex pt-6 pb-4 justify-between items-center ">
      <ul className="list-none sm:inline-flex hidden justify-start items-end flex-1 ">
        {router.pathname.includes("/article") && (
          <li
            className={" cursor-pointer text-[18px] select-none mr-10 "}
            onClick={() => {
              setActive("All");
              router.push("/");
            }}
          >
            Home
          </li>
        )}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={
              " cursor-pointer text-[18px] select-none  " +
              (index === navLinks.length - 1 ? " mr-0 " : " mr-10 ") +
              (active === nav.title ? " text-blue-600 " : " text-black ")
            }
            onClick={() => {
              setActive(nav.title);
              router.push({
                pathname: "/",
                query: {
                  category: nav.title,
                },
              });
            }}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <MdClose
            className="w-[28px] h-[28px]"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <MdMenu
            className="w-[28px] h-[28px]"
            onClick={() => setToggle(!toggle)}
          />
        )}

        <div
          className={
            (toggle ? "flex " : "hidden ") +
            " p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-50 bg-slate-200 drop-shadow-lg sidebar "
          }
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1 ">
            {router.pathname.includes("/article") && (
              <li
                className={" cursor-pointer text-[16px] select-none mb-4 "}
                onClick={() => {
                  setActive("All");
                  router.push("/");
                }}
              >
                Home
              </li>
            )}
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={
                  " cursor-pointer text-[16px] select-none " +
                  (index === navLinks.length - 1 ? " mb-0 " : " mb-4 ") +
                  (active === nav.title ? " text-blue-600 " : " text-black ")
                }
                onClick={() => {
                  setActive(nav.title);
                  router.push({
                    pathname: "/",
                    query: {
                      category: nav.title,
                    },
                  });
                }}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
