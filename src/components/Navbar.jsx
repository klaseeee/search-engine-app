import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { HiMenuAlt4 } from "react-icons/hi";
import { BsSun } from "react-icons/bs";

const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState({ id: "", class: "" });

  const moveToAnotherPage = useNavigate();

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");

      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.theme = "light";

      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  };

  const handleToggle = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const linkHref = (url) => {
    moveToAnotherPage(`/search/${url}`);

    setActive({ id: url, class: "bg-green-800 text-white dark:bg-slate-500" });
  };

  return (
    <nav
      className={`z-20 fixed flex justify-between items-center w-full p-2 pt-4 xl:p-2 pr-4 pl-4 dark:bg-slate-800 bg-white dark:text-white`}
    >
      <button onClick={() => changeTheme()}>
        {theme === "light" ? (
          <BsSun className="text-md text-xl md:text-lg lg:text-lg xl:text-lg" />
        ) : (
          <MdOutlineDarkMode className="text-md text-xl md:text-lg lg:text-lg xl:text-lg" />
        )}
      </button>

      <ul className="hidden md:flex justify-end gap-2 pt-2">
        <li
          className={`${
            active.id === "image" ? active.class : ""
          } cursor-pointer pt-1 pb-1 p-3 rounded-md capitalize`}
          onClick={() => linkHref("image")}
        >
          image
        </li>
        <li
          className={`${
            active.id === "news" ? active.class : ""
          } cursor-pointer pt-1 pb-1 p-3 rounded-md capitalize`}
          onClick={() => linkHref("news")}
        >
          news
        </li>
      </ul>

      <button
        className="md:hidden lg:hidden xl:hidden"
        onClick={() => handleToggle()}
      >
        <HiMenuAlt4 className="text-2xl" />
      </button>

      {toggle && (
        <ul className="absolute right-1 top-10 w-32 rounded bg-zinc-300 shadow-sm dark:bg-slate-400 flex justify-center items-center flex-col">
          <li
            className="text-center text-base w-full hover:bg-green-500 hover:dark:bg-slate-500 p-2 capitalize"
            onClick={() => linkHref("image")}
          >
            image
          </li>
          <li
            className="text-center text-base w-full hover:bg-green-500 hover:dark:bg-slate-500 p-2 capitalize"
            onClick={() => linkHref("news")}
          >
            news
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
