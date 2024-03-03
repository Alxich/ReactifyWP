import { FC } from "react";

import { Container, PostPreview, Comments } from "@/components";
import { PostPreviewBlockProps } from "@/lib/types";

import PostContentBlock from "./content-parts/_content";
import PostActions from "./content-parts/_actions";

interface PostWrapperProps {
  postsData: Array<PostPreviewBlockProps>;
}

const PostWrpapper: FC<PostWrapperProps> = ({
  postsData,
}: PostWrapperProps) => {
  return (
    <Container width="md" classNames="space-x-3xl flex flex-row pt-7xl">
      <div className="content w-71/100 space-y-xl">
        <PostContentBlock />
        <PostActions />
        <Comments />
      </div>
      <div className="sidebar sticky top-xl h-fit w-29/100 space-y-xl">
        <div className="flex w-full flex-row items-start justify-between text-2xl font-semibold leading-normal text-black">
          <h4 className="text-inherit">Recent blog posts</h4>
        </div>
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
      </div>
    </Container>
  );
};

export default PostWrpapper;