import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ProjectSlider = ({ images = [], projectName, onOpenViewer }) => {
  const [index, setIndex] = useState(0);
  const [orientations, setOrientations] = useState(() =>
    images.map(() => null)
  );

  useEffect(() => {
    setIndex(0);
    setOrientations(images.map(() => null));
  }, [images]);

  if (!images.length) return null;

  const handleImageLoad = (event, imgIndex) => {
    const img = event.target;
    const isPortrait = img.naturalHeight >= img.naturalWidth;

    setOrientations((prev) => {
      const next = [...prev];
      next[imgIndex] = isPortrait ? "portrait" : "landscape";
      return next;
    });
  };

  const orientation = orientations[index];

  const imgClass =
    orientation === "portrait"
      ? "h-full w-auto max-w-full mx-auto object-contain"
      : "w-full h-full object-contain";

  const goNext = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  const goPrev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const handleClick = () => {
    if (onOpenViewer) {
      onOpenViewer(index);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="relative rounded-xl overflow-hidden border border-[color:var(--border-subtle)] bg-black/40 aspect-[4/3]">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${projectName} screenshot ${index + 1}`}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className={`${imgClass} cursor-pointer`}
            onLoad={(e) => handleImageLoad(e, index)}
            onClick={handleClick}
          />
        </AnimatePresence>

        <button
          type="button"
          onClick={goPrev}
          className="text-2xl w-10 h-10 absolute left-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          <IoIosArrowBack/>
        </button>
        <button
          type="button"
          onClick={goNext}
          className="text-2xl w-10 h-10 absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          <IoIosArrowForward/>
        </button>

        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all ${
                i === index ? "w-4 bg-white" : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
