import { FC, ReactNode } from "react";
import CommentInput from "./_comment-input";
import CommentRegular from "./_comment-regular";

interface CommentWrapperProps {
  type: "edit" | "reg" | "answer";
  author: {
    thumbnail: string;
    name: string;
  };
  content: string;
  children?: ReactNode;
}

const CommentWrapper: FC<CommentWrapperProps> = ({
  type,
  author,
  content,
  children,
}: CommentWrapperProps) => {
  return (
    <>
      {type == "edit" ? (
        <CommentInput author={author} content={content} type="edit" />
      ) : type == "answer" ? (
        <CommentInput author={author} content={content} type="answer" />
      ) : (
        type == "reg" && (
          <CommentRegular author={author} content={content}>
            {children}
          </CommentRegular>
        )
      )}
    </>
  );
};

export default CommentWrapper;
