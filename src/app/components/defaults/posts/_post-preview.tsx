import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

import { TagLink } from "../../index";
import { TagLinkProps } from "@/lib/types";

interface PostPreviewerProps {
  view: "row" | "col";
  image: string;
  title: string;
  texts: string;
  tags: [TagLinkProps];
}

const PostPreviewer: FC<PostPreviewerProps> = ({
  view,
  image,
  title,
  texts,
  tags,
}: PostPreviewerProps) => {
  return (
    <div
      className={classNames("post post-previewer", {
        "flex-row justify-between space-x-3xl": view && view == "row",
        "flex-col space-y-3xl": view && view == "col",
      })}
    >
      <div className="thumbnail w-1/2">
        <Image src={image} alt="post__preview__thumbnail__image" />
      </div>
      <div className="text-content item-start w-1/2 flex-col justify-start space-y-xl">
        <div className="content w-full flex-col items-start justify-start space-y-sm">
          <div className="author-info w-full">
            <p className="text-gray text-medium">
              <span className="name">Olivia Rhye</span>
              {" • "}
              <span className="date">1 Jan 2023</span>
            </p>
          </div>
          <h4 className="flex w-full flex-row items-center justify-between text-2xl font-semibold text-black">
            <span>{title}</span>
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 21L17 11M17 11H7M17 11V21"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h4>
          <div className="text-block w-full">
            <p className="text-gray">{texts}</p>
          </div>
        </div>
        <div className="tags flex w-full flex-row flex-wrap space-x-xs">
          {tags.map(({ background, color, link, text }, key) => (
            <TagLink
              background={background}
              color={color}
              link={link}
              text={text}
              key={`items_${key}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPreviewer;
