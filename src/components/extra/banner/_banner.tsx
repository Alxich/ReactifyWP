"use client";

import { FC, Dispatch, SetStateAction, ReactNode, useEffect } from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

interface BannerProps {
  title: string;
  isClosed: boolean;
  closeTheBanner: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  type: "reg" | "message";
}

const Banner: FC<BannerProps> = ({
  title,
  isClosed,
  closeTheBanner,
  children,
  type,
}) => {
  useEffect(() => {
    if (!isClosed) {
      document.body.classList.add("overflow-hidden");
    }
  }, []);

  return (
    <div
      className={classNames(
        "banner-wrapper use-transition visible fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/30 px-10xl opacity-100 backdrop-blur-sm",
        {
          "hidden opacity-0": isClosed,
          "py-[3vw]": type === "reg",
        },
      )}
    >
      <div
        className={classNames(
          "banner space-y-7xl rounded-lg bg-white px-3xl pb-7xl overflow-y-scroll overflow-x-hidden",
          {
            "h-full w-full": type === "reg",
            "w-full max-w-[680px]": type === "message",
          },
        )}
      >
        <div className="banner-head sticky top-0 pt-7xl overflow-hidden flex w-full bg-white z-10 items-start justify-between border-b border-b-gray pb-xl">
          <h2 className="text-3xl font-semibold leading-none text-black">
            {title}
          </h2>
          <XMarkIcon
            onClick={() => closeTheBanner(false)}
            height={32}
            width={32}
            className="text-black"
          />
        </div>
        <div className="content relative z-0 w-full page-content-text space-y-7xl">{children}</div>
      </div>
    </div>
  );
};

export default Banner;
