import { FC } from "react";
import Image from "next/image";
import classNames from "classnames";

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

import thumbnail1 from "../../../../public/images/thumbnail-1.png";
import { Button, SvgIcons, Tiptap } from "@/components";

interface CommentWrapperProps {
  type: "edit" | "reg" | "answer";
  author: {
    thumbnail: string;
    name: string;
  };
  content: string;
}

const CommentWrapper: FC<CommentWrapperProps> = ({
  type,
  author,
  content,
}: CommentWrapperProps) => {
  const submitBtnText = () => {
    switch (type) {
      case "answer":
        return "Answer";

      case "edit":
        return "Comment";

      case "reg":
        return "Answer";

      default:
        break;
    }
  };

  return (
    <div className="comment-wrapper flex w-full flex-col items-start justify-center space-y-md rounded-lg border border-black border-opacity-25 p-xl child:w-full">
      <div className="author flex items-center justify-start space-x-xs">
        <div className="thumbnail h-5xl w-5xl cursor-pointer overflow-hidden rounded-full ">
          <Image src={thumbnail1} alt="author-comment-thumbnail" />
        </div>
        <div
          className={classNames(
            "name cursor-pointer text-large font-semibold text-black",
            {
              "flex w-full flex-row items-center justify-between":
                type === "answer",
            },
          )}
        >
          <p className="text-inherit">
            {type === "answer" ? "Your answer to this..." : author.name}
          </p>
          {type === "answer" && (
            <div className="item text-black cursor-default">
              <ArrowUpIcon width={20} height={20} />
            </div>
          )}
        </div>
      </div>
      <div
        className={classNames("content text-normal font-normal text-black", {
          "text-gray": type === "reg",
          "text-black": type === "edit" || type === "answer",
        })}
      >
        {type !== "reg" ? <Tiptap /> : <p>{content}</p>}
      </div>
      <div className=" flex w-full flex-row items-center justify-between space-x-sm border-t border-t-gray/20 pt-md">
        {type != "edit" && type != "answer" ? (
          <div className="actions comment-actions svg-animated-stroke">
            <div className="item h-2.5xl w-2.5xl bg-gray/5 p-xxs text-black">
              <ArrowUpIcon width={20} height={20} />
            </div>
            <div className="item h-2.5xl w-2.5xl bg-gray/5 p-xxs text-black">
              <ArrowDownIcon width={20} height={20} />
            </div>
            <div className="item post-time cursor-auto text-medium font-semibold text-gray">
              <p className="cursor-auto text-inherit">5 min ago</p>
            </div>
          </div>
        ) : (
          <div className="actions comment-actions svg-animated-stroke">
            <div className="item">
              <SvgIcons type="Bold" />
            </div>
            <div className="item">
              <SvgIcons type="Italic" />
            </div>
            <div className="item">
              <SvgIcons type="Link" />
            </div>
          </div>
        )}
        <div className="btn-submit">
          <Button type="button" formType="comment">
            {submitBtnText()}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentWrapper;
