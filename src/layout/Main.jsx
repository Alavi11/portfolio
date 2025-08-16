import React, { useEffect, useState } from "react";
import HeaderDesc from "../components/HeaderDesc";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import HeaderMobile from "../components/HeaderMobile";

const Main = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [location.pathname]);

  const handleImageLoad = () => {
    setLoading(false)
  };

  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-[100px] max-[990px]:h-[50px]">
          <HeaderDesc />
          <HeaderMobile/>
        </div>
        <div className="w-full h-[calc(100%-100px)] max-[990px]:h-[calc(100%-50px)] relative">
          {loading && <Loading />}
          <Outlet context={{ handleImageLoad }} />
        </div>
      </div>
    </>
  );
};

export default Main;
