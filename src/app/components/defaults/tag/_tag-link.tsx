import { FC } from "react";
import Link from "next/link";

import { TagLinkProps } from "@/lib/types";

const TagLink: FC<TagLinkProps> = ({
  link,
  text,
  color,
  background,
}: TagLinkProps) => {
  return (
    <Link
      href={link}
      className={"tag-link rounded-xl px-xs py-xxxs text-medium font-normal"}
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
