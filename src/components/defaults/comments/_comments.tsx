import { FC } from "react";

import { Container } from "@/components";
import CommentWrapper from "./_comment-wrapper";

interface CommentsWrapperProps {}

const Comments: FC<CommentsWrapperProps> = ({}: CommentsWrapperProps) => {
  return (
    <Container width="md" classNames="flex flex-col pt-7xl space-y-3xl">
      <div className="title text-2xl font-semibold text-black">
        <h3 className="text-inherit">
          Hey! Lets write some comment. Please not be shy !
        </h3>
      </div>
      <Container
        width="md"
        classNames="flex flex-col justify-start items-start space-y-xl"
      >
        <CommentWrapper
          type="answer"
          author={{
            name: "John Doe",
            thumbnail: "placeholder-text-nah",
          }}
          content="I just tried this recipe and it was amazing! The instructions were clear and easy to follow, and the end result was delicious. I will definitely be making this again. Thanks for sharing!"
        />
      </Container>
    </Container>
  );
};

export default Comments;
