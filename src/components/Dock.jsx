"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import {
  MotionValue,
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const SCALE = 2.25;
const DISTANCE = 110;
const NUDGE = 40;
const SPRING = {
  mass: 0.1,
  stiffness: 170,
  damping: 12,
};

export default function Dock({ apps, activeApp, onOpenApp }) {
  const mouseLeft = useMotionValue(-Infinity);
  const mouseRight = useMotionValue(-Infinity);
  const left = useTransform(mouseLeft, [0, 40], [0, -40]);
  const right = useTransform(mouseRight, [0, 40], [0, -40]);
  const leftSpring = useSpring(left, SPRING);
  const rightSpring = useSpring(right, SPRING);

  return (
    <>
      <motion.div
        onMouseMove={(e) => {
          const { left, right } = e.currentTarget.getBoundingClientRect();
          const offsetLeft = e.clientX - left;
          const offsetRight = right - e.clientX;
          mouseLeft.set(offsetLeft);
          mouseRight.set(offsetRight);
        }}
        onMouseLeave={() => {
          mouseLeft.set(-Infinity);
          mouseRight.set(-Infinity);
        }}
        className="w-[350px] hover:w-[450px] transition-all duration-500 rounded-2xl  flex items-center justify-center px-1 py-3 gap-5 relative bg-white/10 backdrop-blur-[20px]"
      >

        {apps.map((app, index) => (
          <DynamicAppIcon
            key={app.id}
            app={app}
            mouseLeft={mouseLeft}
            index={index}
            onClick={() => onOpenApp(app.id)}
            isActive={activeApp === app.id}
          />
        ))}
      </motion.div>
    </>
  );
}

function DynamicAppIcon({ mouseLeft, app, onClick, isActive, index }) {
  const ref = useRef(null);

  const distance = useTransform(() => {
    const bounds = ref.current
      ? {
          x: ref.current.offsetLeft,
          width: ref.current.offsetWidth,
        }
      : { x: 0, width: 0 };

    return mouseLeft.get() - bounds.x - bounds.width / 2;
  });

  const scale = useTransform(distance, [-DISTANCE, 0, DISTANCE], [1, SCALE, 1]);
  const x = useTransform(() => {
    const d = distance.get();
    if (d === -Infinity) return 0;
    if (d < -DISTANCE || d > DISTANCE) return Math.sign(d) * -NUDGE;
    return (-d / DISTANCE) * NUDGE * scale.get();
  });

  const scaleSpring = useSpring(scale, SPRING);
  const xSpring = useSpring(x, SPRING);
  const y = useMotionValue(0);

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span>
            <motion.button
              ref={ref}
              style={{ x: xSpring, scale: scaleSpring, y , backgroundColor:app?.color}}
              onClick={() => {
                onClick();
                animate(y, [0, -40, 0], {
                  repeat: 1,
                  ease: [[0, 0, 0.2, 1], [0.8, 0, 1, 1]],
                  duration: 0.6,
                });
              }}
              className={`aspect-square w-12 rounded-2xl shadow-xl origin-bottom 
                flex items-center justify-center text-xl
                bg-opacity-90`}
                
            >
              {app.icon}
            </motion.button>
          </span>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={10}
            className="bg-black/80 shadow-lg border border-white/10 px-2 py-1 text-sm rounded text-white font-medium z-50"
          >
            {app.label}
            <Tooltip.Arrow className="fill-black/80" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
