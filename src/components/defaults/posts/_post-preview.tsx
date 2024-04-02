import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

import { SvgIcons, TagLink } from "../../index";
import { PostPreviewBlockProps } from "@/lib/types";

interface PostPreviewProps extends PostPreviewBlockProps {
  className?: string;
  type?: "group" | "regular";
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
  type,
}: PostPreviewProps) => {
  return (
    <div
      className={classNames(
        "post post-previewer flex cursor-pointer",
        className && className,
        {
          "flex-row justify-between space-x-3xl":
            (view && view == "row") || view == "row-full",
          "flex-col space-y-3xl": view && view == "col",
        },
      )}
    >
      <div
        className={classNames("thumbnail overflow-hidden rounded-md", {
          "min-w-[320px]": view && view == "row",
          "w-full": view && view == "col",
          "w-1/2": view && view == "row-full",
          "h-ctm-14": type === "regular",
        })}
      >
        <Image
          src={image}
          alt="post__preview__thumbnail__image"
          className="h-full w-full"
        />
      </div>
      <div
        className={classNames(
          "text-content flex-col items-start justify-start space-y-xl",
          {
            "w-1/2": (view && view == "row") || view == "row-full",
            "w-full": view && view == "col",
          },
        )}
      >
        <div className="content w-full flex-col items-start justify-start space-y-sm">
          {author && (
            <div className="author-info w-full">
              <p className="text-medium leading-normal text-gray">
                <span className="name">{author}</span>
                {date && (
                  <>
                    {" • "}
                    <span className="date">{date}</span>
                  </>
                )}
              </p>
            </div>
          )}
          <h4
            className={classNames(
              "flex w-full flex-row items-start justify-between font-semibold leading-normal",
              {
                "text-large": isGridSmall != undefined && isGridSmall === true,
                "text-2xl": isGridSmall == undefined || isGridSmall === false,
              },
            )}
          >
            <span>{title}</span>
            <SvgIcons type="Explore-Arrow-Up-Right" />
          </h4>
          <div className="text-block w-full text-normal text-gray">
            <p className=" text-inherit">{texts}</p>
          </div>
        </div>
        {tags && (
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
        )}
      </div>
    </div>
  );
};

export default PostPreview;
