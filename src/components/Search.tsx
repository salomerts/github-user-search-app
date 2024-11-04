import icon from "../../public/img/Shape 2.svg";
import { MutableRefObject, useState } from "react";

type SearchProps = {
  userName: string;
  setUserName: (name: string) => void;
  saveName: MutableRefObject<string>;
};

export default function Search({
  userName,
  setUserName,
  saveName,
}: SearchProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!userName) {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 2000);
    } else {
      saveName.current = userName;
      setShowWarning(false);
      setUserName("");
    }
  };

  const [showWarning, setShowWarning] = useState(false);
  return (
    <div className="flex justify-between h-[60px] w-full max-w-[573px] tablet:max-w-[730px] rounded-[15px] bg-[#FEFEFE]  dark:bg-[#1E2A47] shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.20)]">
      <div className="flex gap-8">
        <div className="w-[20.048px] h-[20px] ml-[16px] mt-[20px]">
          <img src={icon} alt="" />
        </div>

        <div className="mt-[15px] ml-[-20px]">
          <input
            className="placeholder:font-mono placeholder:text-[#4B6A9B] border-0  dark:placeholder:text-white dark:text-white placeholder:leading-[25px] placeholder:text-[13px]  dark:bg-[#1E2A47]"
            value={userName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserName(e.target.value);
            }}
            type="text"
            placeholder="Search GitHub username..."
          />

          {showWarning && (
            <span className="text-[#F74646] font-mono ">No results</span>
          )}
        </div>
      </div>
      <div className="m-[7px]">
        <button
          className="w-[84px] h-[46px] rounded-[10px] bg-[#0079FF] text-white text-center text-[14px] font-bold hover:bg-[#60ABFF]"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}
