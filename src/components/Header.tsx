import { useState } from "react";
import moonIcon from "../../public/img/moon.svg";
import sunIcon from "../../public/img/sunP.png";
import { useTheme } from "../context/ThemeContext";
export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [buttonName, setButtonName] = useState("dark");

  return (
    <div className="flex  justify-between mb-[36px]  w-full max-w-[573px] tablet:max-w-[730px]">
      <div>
        <h2 className="font-mono text-[#222731] text-[26px] font-bold dark:text-[#FFF]">
          devfinder
        </h2>
      </div>

      <div className="flex gap-1 w-[20px] h-[20px] mr-[50px]">
        <button
          className="font-mono text-[#4B6A9B] text-[13px] font-bold tracking-[2.5px] uppercase dark:text-[#FFF]"
          onClick={() => {
            toggleTheme();
            setButtonName(theme);
            if (theme === "light") {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          }}
        >
          {buttonName}
        </button>

        <img src={theme === "dark" ? sunIcon : moonIcon} alt="" />
      </div>
    </div>
  );
}
