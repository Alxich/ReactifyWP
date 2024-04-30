import { FC, ReactNode } from "react";
import Image from "next/image";
import classNames from "classnames";

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components";

interface CommentWrapperProps {
  author: {
    thumbnail: string;
    name: string;
  };
  content: string;
  children: ReactNode;
}

const CommentRegular: FC<CommentWrapperProps> = ({
  author,
  content,
  children,
}: CommentWrapperProps) => {
  return (
    <div className="comment-wrapper flex-dcol flex-tcenter inputs-bborder-round w-full space-y-md border-opacity-25 child:w-full">
      <div className="comment-content flex-dcol flex-tcenter space-y-md p-xl child:w-full tablet:px-0">
        <div className="author flex-cstart flex-drow space-x-xs">
          <div className="thumbnail h-5xl w-5xl cursor-pointer overflow-hidden rounded-full bg-gray">
            {author?.thumbnail && <Image src={author.thumbnail} width={100} height={100} alt="author-comment-thumbnail" /> }
          </div>
          <div
            className={classNames(
              "name flarge-semibold cursor-pointer truncate tablet:text-normal",
            )}
          >
            <p className="text-inherit">{author?.name || "Undefined"}</p>
          </div>
        </div>
        <div
          className={"content fnormal-normal text-gray"}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <div className=" flex-drow flex-cspace w-full space-x-sm border-t border-t-gray/20 pt-md">
          <div className="actions comment-actions svg-animated-stroke">
            <div className="item flex-drow flex-ccenter h-2.5xl w-2.5xl bg-gray/5 p-xxs transition duration-300 hover:bg-gray/15">
              <ArrowUpIcon width={20} height={20} />
            </div>
            <div className="item flex-drow flex-ccenter h-2.5xl w-2.5xl bg-gray/5 p-xxs transition duration-300 hover:bg-gray/15">
              <ArrowDownIcon width={20} height={20} />
            </div>
            <div className="item post-time fmedium-semibold cursor-auto text-gray">
              <p className="cursor-auto text-inherit">5 min ago</p>
            </div>
          </div>
          <div className="btn-submit">
            <Button type="button" formType="comment">
              Answer
            </Button>
          </div>
        </div>
      </div>
      <div className="replies p-xl pt-0 tablet:px-0">{children}</div>
    </div>
  );
};

export default CommentRegular;
