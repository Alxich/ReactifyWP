import { FC } from "react";
import { Container, PostPreview } from "../../index";

import { PostPreviewBlockProps } from "@/lib/types";

interface PostAllProps {
  postsData: Array<PostPreviewBlockProps>;
}

const PostAll: FC<PostAllProps> = ({ postsData }: PostAllProps) => {
  return (
    <Container
      width="md"
      classNames="grid grid-cols-3 auto-rows-max auto-cols-max gap-3xl"
    >
      {postsData.map(
        ({ view, author, date, image, title, texts, tags }, key) => (
          <PostPreview
            view={view}
            author={author}
            date={date}
            image={image}
            title={title}
            texts={texts}
            tags={tags}
            type="regular"
            key={`post_${title}__${key}`}
          />
        ),
      )}
    </Container>
  );
};

export default PostAll;
