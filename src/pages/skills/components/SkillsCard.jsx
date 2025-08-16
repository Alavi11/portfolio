import React from "react";

const SkillsCard = ({ bgColor, title, src, position }) => {
  return (
    <>
      <div
        className="item flex items-center justify-center  rounded-2xl flex-col"
        style={{
        //   backgroundColor: bgColor,
          "--position": position,
        }}
      >
        
        <div className="w-full h-1/2 flex items-center justify-center pt-10">
          <img src={src} className="w-[100px] h-[100px]" />
        </div>
        <div className="w-full h-1/2 flex items-end pb-9 justify-center">
          <h1 className="text-white text-3xl">{title}</h1>
        </div>
        
      </div>
    </>
  );
};

export default SkillsCard;
