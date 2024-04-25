import { FC } from "react";
import { Container, PostPreview } from "../../index";

import { PostPreviewBlockProps } from "@/lib/types";

interface PostAllProps {
  postsData?: Array<PostPreviewBlockProps>;
  CategoriesData?: Array<PostPreviewBlockProps>;
}

const PostAll: FC<PostAllProps> = ({ postsData, CategoriesData }: PostAllProps) => {
  return (
    <Container
      width="md"
      classNames="grid grid-cols-3 auto-rows-max auto-cols-max gap-3xl laptop:grid-cols-2 tablet:!grid-cols-1 tablet:gap-lg"
    >
      {postsData && postsData.map(
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
       {CategoriesData && CategoriesData.map(
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
