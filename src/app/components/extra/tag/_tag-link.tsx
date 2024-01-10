import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";

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
      className={classNames(
        "tag-link py-xxxs rounded-xl px-xs text-medium font-normal",
        {
          [`bg-[${background}]`]: background,
          [`text-[${color}]`]: color,
        },
      )}
    >
      {text}
    </Link>
  );
};

export default TagLink;
