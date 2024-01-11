import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames";

import { TagLink } from "../../index";
import { TagLinkProps } from "@/lib/types";

interface PostPreviewProps {
  view: "row" | "col";
  isGridSmall?: boolean;
  image: string | StaticImageData;
  author: string;
  date: string;
  title: string;
  texts: string;
  tags: TagLinkProps[];
  className?: string;
}

const PostPreview: FC<PostPreviewProps> = ({
  view,
  isGridSmall,
  image,
  author,
  date,
  title,
  texts,
  tags,
  className,
}: PostPreviewProps) => {
  return (
    <div
      className={classNames(
        "post post-previewer flex",
        className && className,
        {
          "flex-row justify-between space-x-3xl": view && view == "row",
          "flex-col space-y-3xl": view && view == "col",
        },
      )}
    >
      <div
        className={classNames("thumbnail", {
          "min-w-[320px]": view && view == "row",
          "w-full": view && view == "col",
        })}
      >
        <Image src={image} alt="post__preview__thumbnail__image" className="w-full"/>
      </div>
      <div
        className={classNames(
          "text-content flex-col items-start justify-start space-y-xl",
          {
            "w-1/2": view && view == "row",
            "w-full": view && view == "col",
          },
        )}
      >
        <div className="content w-full flex-col items-start justify-start space-y-sm">
          <div className="author-info w-full">
            <p className="text-medium leading-normal text-gray">
              <span className="name">{author}</span>
              {" • "}
              <span className="date">{date}</span>
            </p>
          </div>
          <h4
            className={classNames(
              "flex w-full flex-row items-center justify-between font-semibold text-black",
              {
                "text-large": isGridSmall != undefined && isGridSmall === true,
                "text-2xl": isGridSmall == undefined ||  isGridSmall === false,
              },
            )}
          >
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
          <div className="text-block w-full text-normal text-gray">
            <p className=" text-inherit">{texts}</p>
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

export default PostPreview;
