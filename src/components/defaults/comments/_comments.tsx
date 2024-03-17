import { FC } from "react";

import { Button, Container } from "@/components";
import CommentWrapper from "./_comment-wrapper";

interface CommentsWrapperProps {
  showTitle?: boolean;
  showEditor?: boolean;
}

const Comments: FC<CommentsWrapperProps> = ({
  showTitle,
  showEditor,
}: CommentsWrapperProps) => {
  return (
    <Container width="md" classNames="flex flex-col pt-7xl space-y-3xl !mt-0">
      {showTitle !== false && (
        <div className="title text-2xl font-semibold text-black">
          <h3 className="text-inherit">
            Hey! Lets write some comment. Please not be shy !
          </h3>
        </div>
      )}
      <Container
        width="md"
        classNames="flex flex-col justify-start items-center space-y-xl"
      >
        {showEditor !== false && (
          <CommentWrapper
            type="answer"
            author={{
              name: "John Doe",
              thumbnail: "placeholder-text-nah",
            }}
            content="I just tried this recipe and it was amazing! The instructions were clear and easy to follow, and the end result was delicious. I will definitely be making this again. Thanks for sharing!"
          />
        )}
        <CommentWrapper
          type="reg"
          author={{
            name: "Jane Doe",
            thumbnail: "placeholder-text-nah",
          }}
          content="I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!"
        >
          <CommentWrapper
            type="reg"
            author={{
              name: "Jane Doe",
              thumbnail: "placeholder-text-nah",
            }}
            content="I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!"
          >
            <CommentWrapper
              type="reg"
              author={{
                name: "Jane Doe",
                thumbnail: "placeholder-text-nah",
              }}
              content="I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!"
            >
              {showEditor !== false && (
                <CommentWrapper
                  type="answer"
                  author={{
                    name: "Jane Doe",
                    thumbnail: "placeholder-text-nah",
                  }}
                  content="I really appreciate the insights and perspective shared in this article. It's definitely given me something to think about and has helped me see things from a different angle. Thank you for writing and sharing!"
                />
              )}
            </CommentWrapper>
          </CommentWrapper>
        </CommentWrapper>
        <Button formType="btn__action:load-more" type="button">
          Load More
        </Button>
      </Container>
    </Container>
  );
};

export default Comments;
