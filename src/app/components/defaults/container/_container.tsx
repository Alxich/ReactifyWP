import classNames from "classnames";
import { FC, ReactNode } from "react";

import { PaddingValues } from "@/lib/types";

interface СontainerProps {
  children: ReactNode;
  width: "sm" | "md" | "lg" | "xl";
  padding?: PaddingValues;
  classNames?: string;
}

const Сontainer: FC<СontainerProps> = ({
  children,
  width,
  padding,
  classNames: customClassNames,
}: СontainerProps) => {
  const paddingClasses = {
    xxs: "px-xxs",
    xs: "px-xs",
    sm: "px-sm",
    md: "px-md",
    lg: "px-lg",
    xl: "px-xl",
    "2xl": "px-2xl",
    "3xl": "px-3xl",
    "4xl": "px-4xl",
    "5xl": "px-5xl",
    "6xl": "px-6xl",
    "7xl": "px-7xl",
    "8xl": "px-8xl",
    "9xl": "px-9xl",
  };
  const paddingClass = padding && paddingClasses[padding];

  return (
    <div
      className={classNames(
        "wrapper mx-auto w-full",
        paddingClass && paddingClass,
        customClassNames && customClassNames,
        {
          "max-w-wrapper-sm-sz": width === "sm",
          "max-w-wrapper-md-sz": width === "md",
          "max-w-wrapper-lg-sz": width === "lg",
          "max-w-wrapper-xl-sz": width === "xl",
        },
      )}
    >
      {children}
    </div>
  );
};

export default Сontainer;
