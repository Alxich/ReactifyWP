import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

import { SvgIcons, TagLink } from "../../index";
import { ProductPreviewBlockProps } from "@/lib/types";

interface ProductPreviewProps extends ProductPreviewBlockProps {
  className?: string;
  type?: "group" | "regular";
}

const ProductPreview: FC<ProductPreviewProps> = ({
  view,
  isGridSmall,
  image,
  breadcrumbs,
  price,
  title,
  texts,
  tags,
  className,
  type,
}: ProductPreviewProps) => {
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
        className={classNames(
          "thumbnail overflow-hidden rounded-md border border-gray/20 tablet:!h-ctm-10 small-laptop:w-full",
          {
            "min-w-[320px]": view && view == "row",
            "w-full": view && view == "col",
            "w-1/2": view && view == "row-full",
            "h-ctm-14": type === "regular",
          },
        )}
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
        <div className="content w-full flex-col items-start justify-start space-y-sm desktop:space-y-xxxs">
          <div className="short-info flex-drow w-full items-baseline justify-between">
            {breadcrumbs && (
              <p className="w-full text-medium leading-normal text-gray">
                <span className="breadcrumb">{breadcrumbs}</span>
              </p>
            )}
            {price && (
              <p className="price font-semibold text-highlight">£{price}</p>
            )}
          </div>

          <h4
            className={classNames(
              "flex-tspace flex-drow w-full font-semibold leading-normal",
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
          <div className="tags flex-drow-wrap w-full space-x-xs">
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

export default ProductPreview;
