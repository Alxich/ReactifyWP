import { FC, ReactNode } from "react";
import Image from "next/image";
import classNames from "classnames";

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

import thumbnail1 from "../../../../public/images/thumbnail-1.png";
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
    <div className="comment-wrapper flex-dcol flex-tcenter w-full space-y-md rounded-lg border border-black border-opacity-25 p-xl child:w-full">
      <div className="author flex items-center justify-start space-x-xs">
        <div className="thumbnail h-5xl w-5xl cursor-pointer overflow-hidden rounded-full">
          <Image src={thumbnail1} alt="author-comment-thumbnail" />
        </div>
        <div
          className={classNames(
            "name cursor-pointer text-large font-semibold ",
          )}
        >
          <p className="text-inherit">{author.name}</p>
        </div>
      </div>
      <div className={"content text-normal font-normal text-gray"}>
        <p>{content}</p>
      </div>
      <div className=" flex-drow w-full items-center justify-between space-x-sm border-t border-t-gray/20 pt-md">
        <div className="actions comment-actions svg-animated-stroke">
          <div className="item h-2.5xl w-2.5xl bg-gray/5 p-xxs transition duration-300 hover:bg-gray/15">
            <ArrowUpIcon width={20} height={20} />
          </div>
          <div className="item h-2.5xl w-2.5xl bg-gray/5 p-xxs transition duration-300 hover:bg-gray/15">
            <ArrowDownIcon width={20} height={20} />
          </div>
          <div className="item post-time cursor-auto text-medium font-semibold text-gray">
            <p className="cursor-auto text-inherit">5 min ago</p>
          </div>
        </div>
        <div className="btn-submit">
          <Button type="button" formType="comment">
            Answer
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CommentRegular;
