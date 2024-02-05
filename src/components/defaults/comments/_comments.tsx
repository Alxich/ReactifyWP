import { Container } from "@/components";
import { FC } from "react";

interface CommentsWrapperProps {}

const Comments: FC<CommentsWrapperProps> = ({}: CommentsWrapperProps) => {
  return (
    <Container width="md" classNames="flex flex-column pt-7xl space-y-3xl">
      <div className="title text-2xl font-semibold text-black">
        <h3 className="text-inherit">
          Hey! Lets write some comment. Please not be shy !
        </h3>
        <Container width="md" classNames="flex flex-col justify-start items-start space-y-xl">
            
        </Container>
      </div>
    </Container>
  );
};

export default Comments;
