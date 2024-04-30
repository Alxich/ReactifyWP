import { FC, ReactNode, useEffect, useState } from "react";
import CommentInput from "./_comment-input";
import CommentRegular from "./_comment-regular";
import DOMPurify from "dompurify";

interface CommentWrapperProps {
  type: "edit" | "reg" | "answer";
  commentData?: any;
}

const CommentWrapper: FC<CommentWrapperProps> = ({
  type,
  commentData,
}: CommentWrapperProps) => {
  const [authorData, setAuthorData] = useState<any | undefined>();
  const [content, setContent] = useState<any | undefined>();
  const [replies, setReplies] = useState<any | undefined>();

  useEffect(() => {
    if (commentData) {
      const { author, content, date, karma, replies, status, isRestricted } =
        commentData;
      const {
        avatar: { url },
        name,
      } = author.node;
      const authorData = {
        thumbnail: url,
        name: name,
      };

      const cleanedText = DOMPurify.sanitize(content, {
        USE_PROFILES: { html: true },
      });

      setReplies(replies);
      setContent(cleanedText);
      setAuthorData(authorData);
    }
  }, [commentData]);

  return (
    <>
      {type == "edit" ? (
        <CommentInput type="edit" />
      ) : type == "answer" ? (
        <CommentInput type="answer" />
      ) : (
        type == "reg" && (
          <CommentRegular author={authorData} content={content}>
            {replies?.nodes.map(
              (item: any, key: number) =>
                item && (
                  <CommentWrapper
                    type="reg"
                    commentData={item}
                    key={`post-comments__${item}__${key}`}
                  />
                ),
            )}
          </CommentRegular>
        )
      )}
    </>
  );
};

export default CommentWrapper;
