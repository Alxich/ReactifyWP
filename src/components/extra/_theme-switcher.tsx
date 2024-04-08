"use client";

import { FC } from "react";
import { useEffect, useState } from "react";
import classNames from "classnames";

import { SvgIcons } from "@/components";

interface ThemeSwitherProps {}

const ThemeSwither: FC<ThemeSwitherProps> = (props) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    if (
      localStorage.getItem("web-theme") === "dark" ||
      (!("web-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add("light");
    }

    if (typeof window !== "undefined") {
      const themeEarlySetup = localStorage.getItem("web-theme");
      if (themeEarlySetup == undefined) {
        setTheme("light");
        return;
      } else {
        setTheme(themeEarlySetup as typeof theme);
      }
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme !== undefined) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      localStorage.setItem("web-theme", theme);
      console.log(localStorage.getItem("web-theme"));
    }
  }, [theme]);

  return (
    <div
      className={classNames(
        "theme-switcher use-transition flex-ccenter group fixed bottom-xl left-xl flex h-9xl w-9xl cursor-pointer rounded-full border-4 border-black shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] tablet:bottom-lg tablet:left-sm",
        {
          "dark bg-black hover:bg-white": theme === "dark",
          "light border-black bg-white hover:bg-black": theme === "light",
        },
      )}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div
        className={classNames(
          "sun-icon use-transition invisible absolute opacity-0 group-[.dark]:visible group-[.dark]:block group-[.dark]:h-auto group-[.dark]:w-auto group-[.dark]:opacity-100",
          {
            "group-hover:visible group-hover:h-auto group-hover:w-auto group-hover:opacity-100":
              theme === "light",
            "group-hover:!invisible group-hover:!h-0 group-hover:!w-0 group-hover:!opacity-0":
              theme === "dark",
          },
        )}
      >
        <SvgIcons type="Sun" />
      </div>
      <div
        className={classNames(
          "moon-icon use-transition invisible absolute opacity-0 group-[.light]:visible group-[.light]:block group-[.light]:h-auto group-[.light]:w-auto group-[.light]:opacity-100",
          {
            "group-hover:visible group-hover:h-auto group-hover:w-auto group-hover:opacity-100":
              theme === "dark",
            "group-hover:!invisible group-hover:!h-0 group-hover:!w-0 group-hover:!opacity-0":
              theme === "light",
          },
        )}
      >
        <SvgIcons type="Moon" />
      </div>
    </div>
  );
};

export default ThemeSwither;
