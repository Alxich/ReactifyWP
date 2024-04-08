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
  className?: string;
  additionalChildren?: ReactNode;
}

const Banner: FC<BannerProps> = ({
  title,
  isClosed,
  closeTheBanner,
  children,
  type,
  className,
  additionalChildren,
}) => {
  useEffect(() => {
    if (!isClosed) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isClosed]);

  return (
    <div
      className={classNames(
        "banner-wrapper use-transition flex-ccenter visible fixed left-0 top-0 z-50 flex h-screen w-screen bg-black/30 px-10xl opacity-100 backdrop-blur-sm tablet-portrait:px-3xl",
        {
          "hidden opacity-0": isClosed,
          "py-[3vw]": type === "reg",
        },
      )}
    >
      <div
        className={classNames(
          "banner flex-dcol items-center justify-between space-y-7xl overflow-y-auto overflow-x-hidden rounded-lg bg-white px-3xl pb-7xl tablet:space-y-lg tablet:px-xl tablet:pb-xl",
          {
            "h-full w-full": type === "reg",
            "w-full max-w-[680px]": type === "message",
          },
        )}
      >
        <div className="banner-head flex-tspace sticky top-0 z-10 flex w-full overflow-hidden border-b border-b-gray bg-white pb-xl pt-7xl tablet:pb-md tablet:pt-0">
          <h2 className="text-3xl font-semibold leading-none">{title}</h2>
          <XMarkIcon
            onClick={() => closeTheBanner(!isClosed)}
            height={32}
            width={32}
            className="cursor-pointer "
          />
        </div>
        <div
          className={classNames(
            "content page-content-text relative z-0 flex h-full w-full flex-col items-center justify-start space-y-7xl tablet:space-y-lg",
            {
              [className as string]:
                className !== undefined && typeof className === "string",
            },
          )}
        >
          {children}
        </div>
        {additionalChildren}
      </div>
    </div>
  );
};

export default Banner;
