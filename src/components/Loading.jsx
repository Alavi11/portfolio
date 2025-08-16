import React from "react";

const Loading = () => {
  return (
    <>
      <div className="w-full h-full z-50 bg-gray-200 absolute flex justify-center">
        <div className="w-[300px] h-full flex flex-col items-center justify-center">
          <div className="w-[300px] h-[130px] flex items-center gap-2">
            <div className="w-20 h-20 rounded-full bg-gray-300 relative overflow-hidden">
              {" "}
              <div className="spark"></div>
            </div>
            <div className="w-[200px] h-8 flex flex-col justify-between">
              <div className="w-[200px] h-[10px] bg-gray-300 rounded-2xl relative overflow-hidden">
                {" "}
                <div className="spark"></div>
              </div>
              <div className="w-[180px] h-[10px] bg-gray-300 rounded-2xl relative overflow-hidden">
                {" "}
                <div className="spark"></div>
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[300px] bg-gray-300 rounded-2xl overflow-hidden relative">
            <div className="spark"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
