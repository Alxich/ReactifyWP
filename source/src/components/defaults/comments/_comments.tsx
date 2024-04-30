import { FC } from "react";

import { Button, Container } from "@/components";
import CommentWrapper from "./_comment-wrapper";

interface CommentsWrapperProps {
  showTitle?: boolean;
  showEditor?: boolean;
  commentsData: any;
}

const Comments: FC<CommentsWrapperProps> = ({
  showTitle,
  showEditor,
  commentsData,
}: CommentsWrapperProps) => {
  const { nodes: comments } = commentsData;
  return (
    <Container
      width="md"
      classNames="flex-dcol pt-7xl space-y-3xl !mt-0 small-laptop:space-y-lg"
    >
      {showTitle !== false && (
        <div className="title f2xl-semibold">
          <h3 className="text-inherit">
            Hey! Lets write some comment. Please not be shy !
          </h3>
        </div>
      )}
      <Container
        width="md"
        classNames="flex-dcol flex-ccenter space-y-xl small-laptop:space-y-lg"
      >
        {showEditor !== false && <CommentWrapper type="answer" />}
        {comments?.map(
          (item: any, key: number) =>
            item && (
              <CommentWrapper
                type="reg"
                commentData={item}
                key={`post-comments__${item}__${key}`}
              />
            ),
        )}
        {comments && (
          <Button formType="btn__action:load-more" type="button">
            Load More
          </Button>
        )}
      </Container>
    </Container>
  );
};

export default Comments;
