import { useContext } from "react";
import { SidebarContext } from "../context/sidebarcontext";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";

export const navData = [
  {
    id: 0,
    text: "Home",
    link: "/",
  },
  {
    id: 1,
    text: "Explore",
    link: "explore",
  },
  {
    id: 2,
    text: "Statistics",
    link: "statistics",
  },
  {
    id: 3,
    text: "Settings",
    link: "settings",
  },
];

export default function Sidebar() {
  const { isActive, toggleActive } = useContext(SidebarContext);

  return (
    <>
      
      {isActive && (
        <div className="sidebar">
          <div className="text-[white] text-lg font-[500] flex flex-col px-6 py-6">
            {navData.map((item) => {
              return (
                <Link href={"/"} key={item.id}>
                  {item.text}
                </Link>
              );
            })}
          </div>
        </div>
      )}
      <button className="menuBtn" onClick={toggleActive}>
        {<HiMenu size={53} color="white"></HiMenu>}
      </button>

    </>
  );
}
