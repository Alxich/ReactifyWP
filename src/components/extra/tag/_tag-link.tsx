import { FC } from "react";
import Link from "next/link";

import { TagLinkProps } from "@/lib/types";
import classNames from "classnames";

const TagLink: FC<TagLinkProps> = ({
  type,
  link,
  text,
  color,
  background,
}: TagLinkProps) => {
  return (
    <Link
      href={link}
      className={classNames("tag-link rounded-xl text-medium font-normal", {
        "px-xs py-xxxs": type === "normal" || type === undefined || null,
        "px-lg py-sm": type === "big",
      })}
      style={{
        display: !background || !color ? "none" : "block",
        background: background,
        color: color,
      }}
    >
      {text}
    </Link>
  );
};

export default TagLink;
