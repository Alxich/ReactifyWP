import { FC, useContext } from "react";
import Link from "next/link";

import classNames from "classnames";

import { PageContext } from "@/pages/_app";
import { TagLinkProps } from "@/lib/types";

const TagLink: FC<TagLinkProps> = ({
  type,
  id,
  slug,
  link,
  text,
  color,
  background,
}: TagLinkProps) => {
  const { setPageId, setPageSlug } = useContext(PageContext);

  return (
    <Link
      href={link}
      className={classNames("tag-link fmedium-normal rounded-xl", {
        "px-xs py-xxxs": type === "normal" || type === undefined || null,
        "px-lg py-sm": type === "big",
      })}
      style={{
        display: !background || !color ? "none" : "block",
        background: background,
        color: color,
      }}
      onClick={() => {
        id && setPageId && setPageId(id);
        slug && setPageSlug && setPageSlug(slug);
      }}
    >
      {text}
    </Link>
  );
};

export default TagLink;
