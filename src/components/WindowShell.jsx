import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MIN_WIDTH = 420;
const MIN_HEIGHT = 260;

const WindowShell = ({
  id,
  title,
  icon,
  children,
  zIndex = 1,
  isActive = false,
  onClose,
  onMinimize,
  onFocus,
}) => {
  const [position, setPosition] = useState(() => ({
    x: 120 + Math.random() * 80,
    y: 80 + Math.random() * 40,
  }));
  const [size, setSize] = useState(() => ({
    width: 680,
    height: 440,
  }));
  const [isMaximized, setIsMaximized] = useState(false);

  const dragDataRef = useRef(null);
  const resizeDataRef = useRef(null);

  useEffect(() => {
    return () => {
      stopDrag();
      stopResize();
    };
  }, []);

  const clampPosition = (x, y) => {
    if (typeof window === "undefined") {
      return { x, y };
    }
    const padding = 16;
    const maxX = window.innerWidth - padding - 200;
    const maxY = window.innerHeight - padding - 160;

    return {
      x: Math.min(Math.max(padding, x), maxX),
      y: Math.min(Math.max(padding, y), maxY),
    };
  };

  const stopDrag = () => {
    if (dragDataRef.current) {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", stopDrag);
      dragDataRef.current = null;
    }
  };

  const stopResize = () => {
    if (resizeDataRef.current) {
      window.removeEventListener("mousemove", handleResize);
      window.removeEventListener("mouseup", stopResize);
      resizeDataRef.current = null;
    }
  };

  const handleDrag = (event) => {
    if (!dragDataRef.current) return;
    event.preventDefault();
    const { startX, startY, startPos } = dragDataRef.current;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    const next = clampPosition(startPos.x + dx, startPos.y + dy);
    setPosition(next);
  };

  const handleResize = (event) => {
    if (!resizeDataRef.current) return;
    event.preventDefault();
    const { startX, startY, startSize } = resizeDataRef.current;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    setSize(() => ({
      width: Math.max(MIN_WIDTH, startSize.width + dx),
      height: Math.max(MIN_HEIGHT, startSize.height + dy),
    }));
  };

  const startDrag = (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    onFocus?.(id);

    const startPos = position;
    dragDataRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      startPos,
    };

    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("mouseup", stopDrag);
  };

  const startResize = (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    onFocus?.(id);

    resizeDataRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      startSize: size,
    };

    window.addEventListener("mousemove", handleResize);
    window.addEventListener("mouseup", stopResize);
  };

  const toggleMaximize = () => {
    onFocus?.(id);
    setIsMaximized((prev) => !prev);
  };

  const baseStyle = isMaximized
    ? {
        top: 16,
        left: "50%",
        width: "calc(100% - 32px)",
        height: "calc(100% - 120px)",
        transform: "translateX(-50%)",
      }
    : {
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
        transform: "none",
      };

  return (
    <motion.div
      style={{
        position: "absolute",
        zIndex,
        ...baseStyle,
      }}
      onMouseDown={() => onFocus?.(id)}
      initial={{ opacity: 0, scale: 0.9, y: 34 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 34 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={`rounded-mac border shadow-mac-window overflow-hidden backdrop-glass bg-[color:var(--panel)]/90 border-[color:var(--border-subtle)] ${
        isActive ? "ring-2 ring-[color:var(--accent)]/40" : ""
      }`}
    >
      <div
        className="flex items-center justify-between px-3.5 py-2 border-b border-[color:var(--border-subtle)] bg-[color:var(--panel-soft)]/85 cursor-move select-none"
        onMouseDown={startDrag}
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose?.();
              }}
              className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/20 hover:brightness-110"
            />
            <button
              type="button"
              // onClick={(e) => {
              //   e.stopPropagation();
              //   onMinimize?.();
              // }}
              className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/20 hover:brightness-110"
            />
            <button
              type="button"
              // onClick={(e) => {
              //   e.stopPropagation();
              //   toggleMaximize();
              // }}
              className="w-3 h-3 rounded-full bg-[#28c840] border border-black/20 hover:brightness-110"
            />
          </div>
          <span className="text-xs font-medium text-[color:var(--text)]">
            {title}
          </span>
        </div>
      </div>

      <div className="relative w-full h-[calc(100%-40px)]">
        <div className="h-full w-full overflow-y-auto mac-scroll px-4 sm:px-6 py-4">
          {children}
        </div>

        {!isMaximized && (
          <div
            onMouseDown={startResize}
            className="absolute bottom-1.5 right-2 w-3.5 h-3.5 cursor-se-resize rounded-sm border border-white/30 bg-white/15"
          />
        )}
      </div>
    </motion.div>
  );
};

export default WindowShell;
