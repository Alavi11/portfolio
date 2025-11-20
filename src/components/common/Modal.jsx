import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  isCross,
  crossFunc,
  crossValue,
  children,
  title,
  close,
  onClose,
  isBlur,
  z,
  bg,
  border,
  max_h,
}) => {
  if (!close) return null;

  const overlayRef = useRef(null);

  const defaultWidth = 720;
  const defaultHeight = 480;

  const [size, setSize] = useState({
    width: defaultWidth,
    height: defaultHeight,
  });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [dragState, setDragState] = useState({
    dragging: false,
    offsetX: 0,
    offsetY: 0,
  });

  const [resizeState, setResizeState] = useState({
    resizing: false,
    startX: 0,
    startY: 0,
    startWidth: defaultWidth,
    startHeight: defaultHeight,
  });

  const zIndex =
    typeof z === "number" ? z : z ? 50 : 10;

  const handleClose = () => {
    if (crossFunc && crossValue !== undefined) {
      crossFunc(crossValue);
    } else if (onClose) {
      onClose(false);
    }
  };

  useEffect(() => {
    if (!close) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    setPosition({
      x: Math.max((vw - size.width) / 2, 20),
      y: Math.max((vh - size.height) / 2, 20),
    });
  }, [close]); 

  const handleHeaderMouseDown = (e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;

    setDragState({
      dragging: true,
      offsetX: startX - position.x,
      offsetY: startY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (dragState.dragging) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      let newX = e.clientX - dragState.offsetX;
      let newY = e.clientY - dragState.offsetY;

      const margin = 16;

      newX = Math.max(margin - size.width + 80, Math.min(vw - margin - 80, newX));
      newY = Math.max(margin, Math.min(vh - margin - 40, newY));

      setPosition({ x: newX, y: newY });
    }

    if (resizeState.resizing) {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      let newWidth = resizeState.startWidth + (e.clientX - resizeState.startX);
      let newHeight = resizeState.startHeight + (e.clientY - resizeState.startY);

      const minWidth = 360;
      const minHeight = 260;
      const maxWidth = vw - 40;
      const maxHeight = vh - 40;

      newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
      newHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));

      setSize({
        width: newWidth,
        height: newHeight,
      });
    }
  };

  const handleMouseUp = () => {
    if (dragState.dragging) {
      setDragState((prev) => ({ ...prev, dragging: false }));
    }
    if (resizeState.resizing) {
      setResizeState((prev) => ({ ...prev, resizing: false }));
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const startResize = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setResizeState({
      resizing: true,
      startX: e.clientX,
      startY: e.clientY,
      startWidth: size.width,
      startHeight: size.height,
    });
  };

  return createPortal(
    <div
      ref={overlayRef}
      style={{ zIndex }}
      className={
        isBlur
          ? "fixed inset-0 pointer-events-none bg-black/20 backdrop-blur-[6px]"
          : "fixed inset-0 pointer-events-none"
      }
    >
      <div
        className="
          absolute 
          pointer-events-auto 
          rounded-2xl 
          shadow-2xl 
          flex 
          flex-col 
          overflow-hidden
        "
        style={{
          width: size.width,
          height: max_h ? Math.min(size.height, parseInt(max_h)) : size.height,
          left: position.x,
          top: position.y,
          border: border || "1px solid rgba(255,255,255,0.12)",
          backgroundColor: bg || "rgba(15, 15, 20, 0.65)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        <div
          className="
            w-full 
            flex 
            items-center 
            justify-between 
            px-3 
            py-2 
            border-b 
            border-white/10 
            bg-white/5
            cursor-move
          "
          onMouseDown={handleHeaderMouseDown}
        >
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleClose}
              className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/30 hover:bg-[#ff7b73] active:bg-[#e0433a]"
            />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/30" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/30" />
          </div>

          <div className="flex-1 text-center pointer-events-none">
            <span className="text-[11px] text-white/70 truncate">{title}</span>
          </div>

          <div className="w-14" />
        </div>

        <div className="w-full h-full flex justify-center bg-transparent overflow-auto hide-scrollbar">
          {children}
        </div>

        <div
          onMouseDown={startResize}
          className="
            absolute 
            right-1 
            bottom-1 
            w-4 
            h-4 
            cursor-se-resize 
            opacity-60 
            hover:opacity-100
          "
        >
          <div className="w-full h-full border-r-2 border-b-2 border-white/40 rounded-br-xl" />
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
