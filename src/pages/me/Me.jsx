import React, { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import AboutDesc from "./components/AboutDesc";

const Me = () => {
  const { handleImageLoad } = useOutletContext();
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      handleImageLoad();
    }
  }, []);
  return (
    <>
      <div className="w-full h-full  bg-[url('/images/main.jpg')] bg-cover bg-center bg-no-repeat">
        <img
          src="/images/main.jpg"
          alt="bg"
          className="hidden"
          onLoad={handleImageLoad}
          ref={imgRef}
        />
        <div className="w-full h-full flex items-center justify-center">
          <AboutDesc />
        </div>
      </div>
    </>
  );
};

export default Me;
