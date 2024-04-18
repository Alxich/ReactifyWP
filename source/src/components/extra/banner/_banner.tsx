"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import classNames from "classnames";

import { XMarkIcon } from "@heroicons/react/24/outline";

import { Tiptap } from "@/components";

interface BannerProps {
  title: string;
  children: ReactNode;
  type: "reg" | "message" | "editor";
  className?: string;
  additionalChildren?: ReactNode;
}

const Banner: FC<BannerProps> = ({
  title,
  children,
  type,
  className,
  additionalChildren,
}) => {
  const [closeBanner, closeTheBanner] = useState<boolean>(false);

  useEffect(() => {
    if (!closeBanner) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [closeBanner]);

  return (
    <div
      className={classNames(
        "banner-wrapper use-transition flex-ccenter flex-drow visible fixed left-0 top-0 z-50 h-screen w-screen bg-black/30 px-10xl opacity-100 backdrop-blur-sm tablet-portrait:px-3xl tablet-portrait:py-xl tablet:px-md",
        {
          "invisible opacity-0": closeBanner,
          "py-[3vw]": type === "reg",
        },
      )}
    >
      <div
        className={classNames(
          "banner flex-dcol flex-cspace h-[80%] w-full space-y-7xl overflow-y-auto overflow-x-hidden rounded-lg bg-white px-3xl pb-7xl tablet-portrait:h-full tablet:space-y-lg tablet:px-xl tablet:pb-xl phone-portrait:space-y-md phone-portrait:pb-md",
          {
            "spread-block": type === "reg",
            "w-full max-w-[680px]": type === "message",
          },
        )}
      >
        <div className="banner-head flex-cspace flex-drow wp-border-b-gray sticky top-0 z-10 w-full overflow-hidden bg-white pb-xl pt-7xl tablet:pb-3xl">
          <h2 className="f3xl-semibold leading-none">{title}</h2>
          <XMarkIcon
            onClick={() => closeTheBanner(!closeBanner)}
            height={32}
            width={32}
            className="cursor-pointer "
          />
        </div>
        <div
          className={classNames(
            "content page-content-text spread-block flex-cstart flex-dcol relative z-0 space-y-7xl tablet:space-y-lg",
            {
              [className as string]:
                className !== undefined && typeof className === "string",
            },
          )}
        >
          {children}
          {type == "editor" && <Tiptap isPostEditor={true} />}
        </div>
        {additionalChildren}
      </div>
    </div>
  );
};

export default Banner;
