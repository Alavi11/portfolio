import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdSettingsRemote } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaMobile } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Ex = () => {
  return (
    <>
      <div className="w-full h-full flex px-20 overflow-y-auto hide-scrollbar">
        <div className="w-full h-full max-[440px]:h-[110%] flex flex-col items-start max-[728px]:items-center justify-center gap-10 max-[440px]:gap-3">
          <div className="w-[500px] max-[540px]:w-[420px] max-[440px]:w-[320px] h-[280px] max-[540px]:h-[305px] max-[440px]:h-[365px] bg-white/10 backdrop-blur-md rounded-2xl p-4 flex text-white flex-col max-[440px]:gap-3">
            <div className="flex flex-col items-center justify-center gap-2 comic-font">
              <h1 className="text-[25px]">Kohpayeh IT</h1>
              <h1 className="text-[15px]">Mashhad</h1>
            </div>
            <div className="w-full max-[440px]:w-full max-[440px]:items-center h-full flex flex-col gap-y-3 comic-font">
              <div className="flex items-center gap-2">
                <MdSettingsRemote size={"25px"} />
                <h1 className="text-[18px] mt-2">Remote</h1>
              </div>
              <div className="flex items-center gap-2">
                <BsCalendarDateFill size={"25px"} />
                <h1 className="text-[18px] mt-2">2024 - 2025</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1>
                  I worked in the front-end position in this team. In this team,
                  I developed a fully web-based network farming game, which was
                  run and presented under the Telegram bot.
                  <br />
                  React , TS , Tailwind , lottie animations , REST Api.
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[500px] max-[540px]:w-[420px] max-[440px]:w-[320px] h-[255px] max-[540px]:h-[280px] max-[440px]:h-[335px] bg-white/10 backdrop-blur-md rounded-2xl p-4 flex text-white flex-col max-[440px]:gap-3">
            <div className="flex flex-col items-center justify-center gap-2 comic-font">
              <h1 className="text-[25px]">Nojahan Farda Pardaz</h1>
              <h1 className="text-[15px]">Esfahan</h1>
            </div>
            <div className="w-full max-[440px]:w-full max-[440px]:items-center h-full flex flex-col gap-y-3 comic-font">
              <div className="flex items-center gap-2">
                <MdSettingsRemote size={"25px"} />
                <h1 className="text-[18px] mt-2">Remote</h1>
              </div>
              <div className="flex items-center gap-2">
                <BsCalendarDateFill size={"25px"} />
                <h1 className="text-[18px] mt-2">2022 - 2024</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1>
                  I worked in the front-end position in this team. I designed 3
                  admin panels for student, instructor and parent management.
                  <br />
                  React , TS , Tailwind , React Query , REST Api.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ex;
