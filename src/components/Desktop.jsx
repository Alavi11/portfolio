import React, { useMemo, useState } from "react";
import Dock from "./Dock";
import WindowShell from "./WindowShell";
import AboutWindow from "./windows/AboutWindow";
import SkillsWindow from "./windows/SkillsWindow";
import ProjectsWindow from "./windows/ProjectsWindow";
import ContactWindow from "./windows/ContactWindow";
import { useLanguage } from "../hooks/useLanguage";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaFolder } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";

const Desktop = () => {
  const { lang } = useLanguage();

  const apps = useMemo(
    () => [
      {
        id: "about",
        label: lang.ui?.about || "About",
        color: "#ba7200",
        icon: <FaUser />,
      },
      {
        id: "skills",
        label: lang.ui?.skills || "Skills",
        color: "#00b533",
        icon: <FaClipboardList />,
      },
      {
        id: "projects",
        label: lang.ui?.projects || "Projects",
        color: "#00aa74",
        icon: <FaFolder />,
      },
      {
        id: "contact",
        label: lang.ui?.contact || "Contact",
        color: "#2200ff",
        icon: <BiSolidContact />,
      },
    ],
    [lang]
  );

  const [windows, setWindows] = useState(() =>
    apps.map((app, index) => ({
      id: app.id,
      isOpen: app.id === "about",
      isMinimized: false,
      zIndex: index + 1,
    }))
  );

  const [activeId, setActiveId] = useState("about");
  const [zCounter, setZCounter] = useState(10);

  const bringToFront = (id) => {
    setWindows((prev) => {
      const currentMax = prev.reduce((m, w) => Math.max(m, w.zIndex || 0), 0);
      const nextZ = Math.max(currentMax, zCounter) + 1;
      setZCounter(nextZ);
      return prev.map((w) =>
        w.id === id
          ? {
              ...w,
              zIndex: nextZ,
            }
          : w
      );
    });
    setActiveId(id);
  };

  const openApp = (id) => {
    setWindows((prev) => {
      const exists = prev.find((w) => w.id === id);
      let next = prev;

      if (!exists) {
        next = [
          ...prev,
          { id, isOpen: true, isMinimized: false, zIndex: zCounter + 1 },
        ];
      } else {
        next = prev.map((w) =>
          w.id === id ? { ...w, isOpen: true, isMinimized: false } : w
        );
      }

      return next;
    });
    bringToFront(id);
  };

  const closeApp = (id) => {
    setWindows((prev) => {
      const updated = prev.map((w) =>
        w.id === id ? { ...w, isOpen: false, isMinimized: false } : w
      );

      if (activeId === id) {
        const stillOpen = updated.filter(
          (w) => w.id !== id && w.isOpen && !w.isMinimized
        );
        if (stillOpen.length > 0) {
          const top = stillOpen.reduce(
            (max, w) => (w.zIndex > max.zIndex ? w : max),
            stillOpen[0]
          );
          setActiveId(top.id);
        } else {
          setActiveId(null);
        }
      }

      return updated;
    });
  };

  const minimizeApp = (id) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
  };

  const renderWindowContent = (id) => {
    switch (id) {
      case "about":
        return <AboutWindow />;
      case "skills":
        return <SkillsWindow />;
      case "projects":
        return <ProjectsWindow />;
      case "contact":
        return <ContactWindow />;
      default:
        return null;
    }
  };

  return (
    <div className="relative h-full w-full bg-[color:var(--bg-soft)] text-[color:var(--text)] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 mac-gradient opacity-80 z-0"
        aria-hidden="true"
      />

      <main className="relative z-10 flex h-full flex-col">
        <header
          className="
            relative z-20
            flex items-center justify-between
            px-4 py-3
            text-xs text-[color:var(--muted)]
            bg-[color:var(--panel)]/40
            backdrop-blur-xl
            border-b border-[color:var(--border-subtle)]
            shadow-[0_1px_0_0_rgba(255,255,255,0.04)]
          "
        >
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Portfolio OS</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </header>

        <div className="relative flex-1 overflow-hidden">
          {windows
            .filter((w) => w.isOpen && !w.isMinimized)
            .map((w) => {
              const app = apps.find((a) => a.id === w.id) || { label: w.id };
              return (
                <WindowShell
                  key={w.id}
                  id={w.id}
                  title={app.label}
                  icon={app.icon}
                  zIndex={w.zIndex}
                  isActive={activeId === w.id}
                  onClose={() => closeApp(w.id)}
                  onMinimize={() => minimizeApp(w.id)}
                  onFocus={() => bringToFront(w.id)}
                >
                  {renderWindowContent(w.id)}
                </WindowShell>
              );
            })}
        </div>

        <div className="pb-4 flex justify-center relative z-20">
          <Dock apps={apps} activeApp={activeId} onOpenApp={openApp} />
        </div>
      </main>
    </div>
  );
};

export default Desktop;
