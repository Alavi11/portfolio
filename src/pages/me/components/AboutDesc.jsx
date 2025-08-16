import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GiLinkedRings } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const AboutDesc = () => {
  return (
    <>
      <div className="w-full h-full flex px-20">
        <div className="w-full h-full flex flex-col items-start max-[728px]:items-center justify-center gap-10">
          <div className="w-[500px] max-[540px]:w-[420px] max-[440px]:w-[320px] h-[280px] bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center justify-center">
            <h1 className="w-full text-center comic-font text-[18px]  max-[540px]:text-[16px] max-[440px]:text-[14px] text-white">
              I am a front-end developer with over 3 years of experience in
              designing and implementing web-based applications and various
              services. I am passionate about enhancing my knowledge and skills
              in the field of information technology and seeking challenging
              opportunities in a leading company to contribute to the growth and
              development of innovative products. I am committed to creating
              creative solutions and improving software development processes.
            </h1>
          </div>
          <div className="w-[500px] max-[540px]:w-[420px] max-[440px]:w-[320px] h-[170px] max-[440px]:h-[250px] bg-white/10 backdrop-blur-md rounded-2xl p-4 flex text-white max-[440px]:flex-col max-[440px]:gap-3">
            <div className="w-1/2 max-[440px]:w-full max-[440px]:items-center h-full flex flex-col gap-y-3 comic-font">
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <h1>Qom</h1>
              </div>
              <div className="flex items-center gap-2">
                <GiLinkedRings />
                <h1>married</h1>
              </div>
              <div className="flex items-center gap-2">
                <FaBirthdayCake />
                <h1>2002</h1>
              </div>
              <div className="flex items-center gap-2">
                <FaUniversity />
                <h1>University of Qom-CS</h1>
              </div>
            </div>
            <div className="w-1/2 max-[440px]:w-full max-[440px]:items-center h-full flex flex-col gap-y-3">
              <div className="flex items-center gap-2">
                <FaMobile />
                <h1>09934156323</h1>
              </div>
               <div className="flex items-center gap-2">
                <SiGmail />
                <h1>e.alavi1380@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDesc;
