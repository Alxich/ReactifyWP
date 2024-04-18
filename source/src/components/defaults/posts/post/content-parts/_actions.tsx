import { FC } from "react";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@/components";

interface PostActionsProps {}

const PostActions: FC<PostActionsProps> = ({}: PostActionsProps) => {
  return (
    <div className="post-actions flex-drow flex-cspace w-full space-x-xs">
      <div className="flex-ccenter flex-drow w-auto space-x-xs">
        <Button type="button" formType="post__action:post-actions">
          <HandThumbUpIcon className="mr-xs h-full w-auto text-inherit" />
          Like
        </Button>
        <Button type="button" formType="post__action:post-actions">
          <HandThumbDownIcon className="mr-xs h-full w-auto text-inherit" />
          Dislike
        </Button>
      </div>
      <Button type="button" formType="post__action:post-actions">
        <PencilIcon className="mr-xs h-full w-auto text-inherit" />
        Report
      </Button>
    </div>
  );
};

export default PostActions;
