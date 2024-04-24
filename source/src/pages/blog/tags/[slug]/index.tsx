import { FC } from "react";

import { PostPreviewBlockProps } from "@/lib/types";
import { Breadcrumbs, Container, Pagination, PostAll } from "@/components";

import preloadData from "@bin/preload.json";

interface TagPageProps {}

const TagsPage: FC<TagPageProps> = (props) => {
  const postsData: Array<PostPreviewBlockProps> = preloadData.postsData;

  return (
    <Container
      classNames="flex-dcol flex-tcenter wrapper-conspace space-y-7xl"
      width="md"
    >
      <Breadcrumbs />
      <div className="flex-tspace f2xl-semibold flex-drow w-full leading-normal">
        <h4 className="text-inherit">All frameworks tag posts</h4>
      </div>
      <PostAll postsData={postsData} />
      <Pagination currentPage={1} totalPages={10} visiblePages={3} />
    </Container>
  );
};

export default TagsPage;
