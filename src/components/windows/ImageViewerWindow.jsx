import React, { useEffect, useState } from "react";
import Modal from "../common/Modal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageViewerWindow = ({
  images = [],
  initialIndex = 0,
  title = "Image Viewer",
  open,
  onClose,
}) => {
  const [index, setIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex, images]);

  useEffect(() => {
    setZoom(1);
  }, [index, open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose && onClose(false);
      } else if (e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + images.length) % images.length);
      } else if (e.key === "+") {
        setZoom((z) => Math.min(z + 0.25, 4));
      } else if (e.key === "-") {
        setZoom((z) => Math.max(z - 0.25, 0.5));
      } else if (e.key === "0") {
        setZoom(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, images.length, onClose]);

  if (!images.length) return null;

  const goNext = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  const goPrev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const handleZoomIn = () => {
    setZoom((z) => Math.min(z + 0.25, 4));
  };

  const handleZoomOut = () => {
    setZoom((z) => Math.max(z - 0.25, 0.5));
  };

  const handleZoomReset = () => {
    setZoom(1);
  };

  const imageStyle = {
    width: `${zoom * 35}%`,
    height: "auto",
    display: "block",
  };

  return (
    <Modal
      close={open}
      onClose={onClose}
      isCross
      isBlur={false}
      z={60}
      title={`${title}`}
      bg="rgba(0, 0, 0, 0.85)"
      border="1px solid rgba(255,255,255,0.15)"
    >
      <div className="w-full h-full flex flex-col items-center px-4 pb-4 relative">
        <div className="w-full h-[80vh] bg-black rounded-lg overflow-auto">
          <div className="min-w-full min-h-full flex items-center justify-center">
            <img
              src={images[index]}
              alt={`${title} screenshot ${index + 1}`}
              className="rounded-lg"
              style={imageStyle}
            />
          </div>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-10 top-1/2 -translate-y-1/2 text-2xl w-10 h-10 
                       flex items-center justify-center rounded-full 
                       bg-white text-black"
          >
            <IoIosArrowBack />
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-2xl w-10 h-10 
                       flex items-center justify-center rounded-full 
                       bg-white text-black"
          >
            <IoIosArrowForward />
          </button>

          <div className="absolute right-4 bottom-4 flex items-center gap-2 bg-black/60 rounded-full px-3 py-1 text-white text-xs">
            <button
              type="button"
              onClick={handleZoomOut}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-black/70 hover:bg-black/90"
            >
              −
            </button>
            <span className="min-w-[48px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={handleZoomIn}
              className="w-6 h-6 flex items-center justify-center rounded-full bg-black/70 hover:bg-black/90"
            >
              +
            </button>
            <button
              type="button"
              onClick={handleZoomReset}
              className="px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-[10px]"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mt-2 text-[11px] text-white/70 text-center">
          {index + 1} / {images.length}
        </div>
      </div>
    </Modal>
  );
};

export default ImageViewerWindow;
