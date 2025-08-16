import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { FaLongArrowAltLeft } from "react-icons/fa";

const HeaderMobile = () => {
  const menuItems = [
    {
      id: 1,
      title: "Me",
      route: "me",
    },
    {
      id: 2,
      title: "Skills",
      route: "me/skills",
    },
    {
      id: 3,
      title: "Projects",
      route: "me/projects",
    },
    {
      id: 4,
      title: "Experience",
      route: "me/experience",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const handelClickMenu = (route) => {
    navigate(`/${route}`);
  };

  return (
    <>
      <div className="w-full h-full bg-blue-950 flex items-center justify-end">
        {showMenu ? (
          <div
            className="text-white text-3xl mr-5 hover:cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <RxCross2 />
          </div>
        ) : (
          <div
            className="text-white text-3xl mr-5 hover:cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <TiThMenu />
          </div>
        )}
        <div
          className={
            showMenu
              ? "w-[320px] h-screen bg-blue-950/20 backdrop-blur-md absolute top-0 left-0 z-50 transition-all duration-700"
              : "w-[320px] h-screen bg-blue-950/20 backdrop-blur-md absolute top-0 -left-[100%] z-50 transition-all duration-700"
          }
        >
          <div className="w-full h-[100px] flex items-center justify-end pr-5 text-white text-3xl">
            <FaLongArrowAltLeft
              className="hover:cursor-pointer hidden max-[325px]:block"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <div className="w-full h-[200px] flex flex-col items-center justify-center">
            <div className="w-[100px] h-[100px] rounded-full bg-white overflow-hidden">
              <img className="w-full h-full" src="/images/profile.png" />
            </div>
            <h2
              className="text-white beauty-font text-7xl max-[1160px]:text-6xl"
              style={{ marginLeft: "19px" }}
            >
              Ehsan Alavi
            </h2>
          </div>
          <div className="w-full h-[400px] flex flex-col gap-10 items-center justify-center">
            {menuItems.map((item) => {
              return (
                <div
                  onClick={() => handelClickMenu(item.route)}
                  className="h-[100px] text-white text-[20px] corptic-font hover:cursor-pointer hover:text-[22px]"
                  key={item.id}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
