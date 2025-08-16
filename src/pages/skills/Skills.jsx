import React, { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import SkillsCard from "./components/SkillsCard";
import "./skills.css"

const Skills = () => {

  const skills = [
    {
      title: "React",
      color:"#005469",
      img:"/images/react.png"
    },
    {
      title: "TS",
      color:"#007ACD",
      img:"/images/ts.png"
    },
    {
      title: "HTML",
      color:"#E44D26",
      img:"/images/html.png"
    },
    {
      title: "CSS",
      color:"#2865F2",
      img:"/images/css.png"
    },
    {
      title: "JS",
      color:"#FDCD00",
      img:"/images/js.png"
    },
    {
      title: "Tailwind",
      color:"",
      img:"/images/tailwind.png"
    },
    {
      title: "Git",
      color:"",
      img:"/images/git.png"
    },
    {
      title: "PWA",
      color:"",
      img:"/images/pwa.png"
    },
    {
      title: "Socket.io",
      color:"",
      img:"/images/socket.png"
    },
    {
      title: "Axios",
      color:"",
      img:"/images/axios.png"
    },
    {
      title: "REST API",
      color:"",
      img:"/images/api.png"
    },
    {
      title: "React Query",
      color:"",
      img:"/images/react-query.png"
    },

  ]
  const { handleImageLoad } = useOutletContext()
 const imgRef = useRef(null);

  useEffect(() => {
    console.log("test")
    if (imgRef.current && imgRef.current.complete) {
      handleImageLoad()
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
        <div className="banner">
          <div className="slider" style={{"--quantity":12}}>
            {skills.map((item,index) => {
              return <SkillsCard bgColor={item.color} title={item.title} position={index+1} src={item.img} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
