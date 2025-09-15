import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  //   useEffect(() => {
  //     document.documentElement.classList.add("dark");
  //     document.documentElement.setAttribute("data-theme", theme);

  //     localStorage.setItem("theme", theme);
  //   }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleToggle} className=" cursor-pointer">
      {theme === "light" ? (
        <div className="text-white ">
          <MdOutlineDarkMode size={30} />
        </div>
      ) : (
        <div>
          <CiLight size={30} color="yellow" />
        </div>
      )}
    </button>
  );
};

export default ThemeToggle;
