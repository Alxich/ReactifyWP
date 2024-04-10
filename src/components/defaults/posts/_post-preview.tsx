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
        "post post-previewer small-laptop:flex-dcol flex cursor-pointer tablet:w-full small-laptop:space-x-0 small-laptop:space-y-lg",
        className && className,
        {
          "group-[.post-in-col]:small-laptop:flex-dcol flex-drow justify-between space-x-3xl group-[.post-in-col]:small-laptop:space-x-0 group-[.post-in-col]:laptop:items-start group-[.post-in-col]:laptop:justify-between group-[.post-in-col]:desktop:space-x-lg":
            (view && view == "row") || view == "row-full",
          "flex-dcol space-y-3xl": view && view == "col",
          "tablet:flex-dcol small-laptop:flex-dcol laptop:flex-drow tablet:space-x-0 tablet:space-y-lg laptop:justify-between laptop:space-x-lg laptop:space-y-0 desktop:space-y-lg":
            type != "regular" && view && view == "col",
          "desktop:space-y-xs": type === "regular",
        },
      )}
    >
      <div
        className={classNames(
          "thumbnail overflow-hidden rounded-md tablet:h-ctm-10 small-laptop:w-full",
          {
            "min-w-[320px] tablet:h-ctm-10 small-laptop:h-ctm-10 desktop:min-w-[200px]":
              view && view == "row",
            "w-full": view && view == "col",
            "w-1/2 small-laptop:h-ctm-14": view && view == "row-full",
            "h-ctm-14 desktop:h-ctm-10": type === "regular",
          },
        )}
      >
        <Image
          src={image}
          alt="post__preview__thumbnail__image"
          className="spread-block"
        />
      </div>
      <div
        className={classNames(
          "text-content flex-tstart flex-dcol space-y-xl desktop:space-y-lg",
          {
            "w-1/2 small-laptop:w-full desktop:w-1/2 group-[.post-in-col]:desktop:w-full ":
              (view && view == "row") || view == "row-full",
            "w-full desktop:w-full": view && view == "col",
          },
        )}
      >
        <div className="content flex-tstart flex-dcol w-full space-y-sm laptop:space-y-xxs">
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
              "flex-tspace flex-drow w-full leading-normal",
              {
                "flarge-semibold small-laptop:text-2xl": (isGridSmall =
                  undefined && isGridSmall === true),
                "f2xl-semibold":
                  isGridSmall == undefined || isGridSmall === false,
              },
            )}
          >
            <span>{title}</span>
            <SvgIcons type="Explore-Arrow-Up-Right" />
          </h4>
          <div className="text-block fnormal-normal w-full text-gray">
            <p className=" text-inherit">{texts}</p>
          </div>
        </div>
        {tags && (
          <div className="tags flex-drow w-full flex-wrap space-x-xs">
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
