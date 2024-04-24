import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import DOMPurify from "isomorphic-dompurify";

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
  const cleanedText = DOMPurify.sanitize(texts, {
    USE_PROFILES: { html: true },
  });

  return (
    <div
      className={classNames(
        "post post-previewer small-laptop:flex-dcol flex cursor-pointer small-laptop:space-x-0 small-laptop:space-y-lg tablet:w-full",
        className && className,
        {
          "group-[.post-in-col]:small-laptop:flex-dcol flex-drow justify-between space-x-xl group-[.post-in-col]:desktop:space-x-lg group-[.post-in-col]:laptop:items-start group-[.post-in-col]:laptop:justify-between group-[.post-in-col]:small-laptop:space-x-0":
            (view && view == "row") || view == "row-full",
          "flex-dcol space-y-3xl": view && view == "col",
          "tablet:flex-dcol small-laptop:flex-dcol laptop:flex-drow desktop:space-y-lg laptop:justify-between laptop:space-x-lg laptop:space-y-0 tablet:space-x-0 tablet:space-y-lg":
            type != "regular" && view && view == "col",
          "desktop:space-y-xs": type === "regular",
        },
      )}
    >
      <div
        className={classNames(
          "thumbnail overflow-hidden rounded-md small-laptop:w-full tablet:h-ctm-10",
          {
            "min-w-[320px] desktop:min-w-[200px] small-laptop:h-ctm-10 tablet:h-ctm-10":
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
          height={100}
          width={100}
          className={classNames("spread-block max-h-[320px]", {
            "max-h-[220px]": view && view == "col"
          })}
        />
      </div>
      <div
        className={classNames(
          "text-content flex-tstart flex-dcol space-y-xl desktop:space-y-lg",
          {
            "w-1/2 desktop:w-1/2 group-[.post-in-col]:desktop:w-full small-laptop:w-full ":
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
              "flex-tspace flex-drow w-full leading-normal break-all overflow-hidden",
              {
                "flarge-semibold small-laptop:text-2xl": (isGridSmall =
                  undefined && isGridSmall === true),
                "fxl-semibold":
                  isGridSmall == undefined || isGridSmall === false,
              },
            )}
          >
            <span>{title}</span>
            <SvgIcons type="Explore-Arrow-Up-Right" classname="min-w-[24px]" />
          </h4>
          <div className="text-block fnormal-normal w-full text-gray break-words overflow-hidden">
            <p className="text-inherit">
              {view != "row-full"
                ? cleanedText
                    .replace(/(<([^>]+)>)/gi, "")
                    .split(" ")
                    .slice(0, 20)
                    .join(" ")
                : cleanedText.replace(/(<([^>]+)>)/gi, "")}
            </p>
          </div>
        </div>
        {tags && tags?.length > 0 && (
          <div className="tags flex-drow w-full flex-wrap space-x-xs">
            {tags.map(
              ({ link, text, background, color }, key) =>
                text && (
                  <TagLink
                    background={background}
                    color={color}
                    link={link}
                    text={text}
                    key={`items_${key}`}
                  />
                ),
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostPreview;
