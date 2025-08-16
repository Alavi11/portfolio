import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderDesc = () => {

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

  const navigate = useNavigate()

  const handelClickMenu = (route) => {
      navigate(`/${route}`)
  }

  return (
    <>
      <div className="w-full h-full bg-blue-950 flex items-center max-[990px]:hidden">
        <div className="w-[30%] h-full flex items-center justify-end">
          <div
            className="w-[90px] h-[90px] rounded-full bg-white overflow-hidden max-[1160px]:w-[80px]  max-[1160px]:h-[80px]"
            style={{ marginLeft: "40px" }}
          >
            <img className="w-full h-full" src="/images/profile.png" />
          </div>
          <h2 className="text-white beauty-font text-7xl max-[1160px]:text-6xl" style={{marginLeft:"19px"}}>Ehsan Alavi</h2>
        </div>
        <div className="w-[70%] h-full flex gap-10 items-center justify-center">
          {
            menuItems.map((item)=>{
              return <div onClick={()=>handelClickMenu(item.route)} className="w-[100px] text-white text-[20px] max-[1160px]:text-[18px] corptic-font hover:cursor-pointer hover:text-[22px]" key={item.id}>{item.title}</div>
            })
          }
        </div>
      </div>
    </>
  );
};

export default HeaderDesc;
