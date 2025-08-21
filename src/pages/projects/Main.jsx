import React, { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import Slider from "./components/Slider";

const Projects = () => {
  const { handleImageLoad } = useOutletContext();

  useEffect(() => {
        setTimeout(()=>{
            handleImageLoad()
        },2000)
    }, []);
  return (
    <>
      <div className="w-full h-full  bg-[url('/images/main.jpg')] bg-cover bg-center bg-no-repeat">
        <img
          src="/images/main.jpg"
          alt="bg"
          className="hidden"
        />
        <div className="w-full h-full flex items-center justify-center">
          <Slider/>
        </div>
      </div>
    </>
  );
};

export default Projects;
