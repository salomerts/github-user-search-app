import userImg from "/img/defaultUser.png";
import address from "/img/address.svg";
import url from "/img/url.svg";
import twitter from "/img/twitter.svg";
import building from "/img/office-building.svg";
import axios from "axios";
import { useEffect, useState } from "react";

interface Idata {
  login: string;
  joinDate: string;
  bio: string;
  repos: number;
  followers: number;
  following: number;
  address: string;
  link: string;
  twitter: string;
  blog: string;
  img: "";
}

export default function User({ saveName }: { saveName: { current: string } }) {
  const { current } = saveName;
  const [data, setData] = useState<Idata>({
    login: "",
    joinDate: "",
    bio: "",
    repos: 0,
    followers: 0,
    following: 0,
    address: "",
    link: "",
    twitter: "",
    blog: "",
    img: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      if (current !== undefined) {
        try {
          const response = await axios.get(
            `https://api.github.com/users/${current}`
          );

          setData((prevData) => ({
            ...prevData,
            login: response.data.login || "",
            joinDate: response.data.created_at || "",
            bio: response.data.bio || "",
            repos: response.data.public_repos || 0,
            followers: response.data.followers || 0,
            following: response.data.following || 0,
            address: response.data.location || "",
            link: response.data.html_url || "",
            twitter: response.data.twitter_username || "",
            blog: response.data.blog || "",
            img: response.data.avatar_url || "",
          }));
        } catch (error) {
          console.log("error fetching data");
        }
      }
    };
    fetchData();
  }, [current]);

  const divStyle =
    "flex flex-col justify-center items-center w-1/3 dark:text-white";
  const h3Style = "text-[#4B6A9B] text-[11px] dark:text-white";
  const numStyle =
    "text-[#2B3442] font-bold tablet:text-[22px] dark:text-white";

  return (
    <div className="w-full h-full max-w-[573px] tablet:max-w-[730px] max-h-[444px] target:max-h-[419px]  mt-4 p-6 flex flex-col items-center justify-center bg-white dark:bg-[#1E2A47] rounded-[15px] shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.2)]">
      <div className="w-full flex gap-5">
        <div className="w-1/5">
          <img
            className="w-full max-w-[117px] rounded-[70px] "
            src={data.img || userImg}
            alt="userImg"
          />
        </div>

        <div className="ml-4 mt-2">
          <h1 className=" font-mono text-[#2B3442] font-bold tablet:text-[26px] dark:text-white">
            {data.login || "The Octocat"}
          </h1>
          <p className=" font-mono text-[#0079FF] text-[13px] tablet:text-[16px]">
            @{data.login || "octocat"}{" "}
          </p>
          <p className="font-mono text-[#697C9A] text-[13px] tablet:text-[15px]">
            {data.joinDate || "Joined 25 Jan 2011"}
          </p>
        </div>
      </div>

      <div className="mt-8 w-full">
        <p className="font-mono text-[#4B6A9B] text-[13px] tablet:text-[16px] leading-[25px]">
          {data.bio || "This profile has no bio"}
        </p>
      </div>

      <div className="bg-[#F6F8FF] dark:bg-[#141D2F]  w-full h-[85px] rounded-[10px] mt-[23px] flex justify-center items-center p-4 font-mono">
        <div className={divStyle}>
          <h3 className={h3Style}>Repos</h3>
          <div className={numStyle}>{data.repos || 0}</div>
        </div>

        <div className={divStyle}>
          <h3 className={h3Style}>Followers</h3>
          <div className={numStyle}>{data.followers || 0}</div>
        </div>

        <div className={divStyle}>
          <h3 className={h3Style}>Following</h3>
          <div className={numStyle}>{data.following || 0}</div>
        </div>
      </div>

      <div className="flex flex-col tablet:flex-row tablet:justify-evenly w-full mt-6 font-mono text-[#4B6A9B] text-[13px] dark:text-white ">
        <div className="w-1/2">
          <div className="flex gap-3 ">
            <img src={address} alt="" />
            <span>{data.address || "San Francisco"}</span>
          </div>

          <div className="flex gap-3 mt-2">
            <img src={url} alt="" />
            <a href={data.blog || "https://github.blog"}>
              {data.blog || "https://github.blog"}
            </a>
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex gap-3  mt-2">
            <img src={twitter} alt="" />
            <a
              className={`${data.twitter ? "text-[#4B6A9B]" : "text-gray-300"}`}
              href={data.twitter || "#"}
            >
              {data.twitter || "Not Available"}{" "}
            </a>
          </div>

          <div className="flex gap-3  mt-2">
            <img src={building} alt="" />
            <a href="https://github.com/" target="_blanck">
              @github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
