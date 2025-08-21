import { useState, useRef, useEffect } from "react";

const images = [
  { id: 4, url: "", title: "" },

  { id: 1, url: "https://picsum.photos/id/237/1200/600", title: "Dog" },
  { id: 2, url: "https://picsum.photos/id/1025/1200/600", title: "Eagle" },
  { id: 3, url: "https://picsum.photos/id/1074/1200/600", title: "Deer" },
  { id: 4, url: "https://picsum.photos/id/1084/1200/600", title: "Elephant" },
  
  { id: 4, url: "", title: "" },
];

export default function Slider() {
  const [active, setActive] = useState(images[2]);
  const [animImage, setAnimImage] = useState(null);
  const [animStyle, setAnimStyle] = useState({});
  const containerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth =
        window.visualViewport?.width || document.documentElement.clientWidth;

      if (viewportWidth < 990) {
        setHeaderHeight(50);
      } else {
        setHeaderHeight(100);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (img, e) => {
    const rect = e.target.getBoundingClientRect();

    setAnimImage(img.url);
    setAnimStyle({
      top: rect.top + "px",
      left: rect.left + "px",
      width: rect.width + "px",
      height: rect.height + "px",
    });

    setActive(img);

    requestAnimationFrame(() => {
      setAnimStyle({
        top: headerHeight < 100 ? "50px" : "100px",
        left: "0px",
        width: "100%",
        height: `calc(100vh - ${headerHeight}px)`,
      });
    });

    setTimeout(() => {
      setAnimImage(null);
    }, 700);
  };

  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${active.url})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
          {active.title}
        </h1>
      </div>

      <div className="absolute  bottom-4 left-1/2 -translate-x-1/2 w-[700px] h-[120px] px-4 z-20">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {images.map((img) => (
            <button
              key={img.id}
              onClick={(e) => handleClick(img, e)}
              className={`min-w-[180px] min-h-[110px] rounded-lg overflow-hidden border-2 transition 
              ${
                active.id === img.id
                  ? "border-white"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              {img.url && (
                <img
                  src={img.url}
                  className="w-full h-full object-cover pointer-events-none"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {animImage && (
        <img
          src={animImage}
          alt="anim"
          className="fixed z-10 object-cover transition-all duration-700 ease-in-out rounded-lg"
          style={animStyle}
        />
      )}
    </div>
  );
}
