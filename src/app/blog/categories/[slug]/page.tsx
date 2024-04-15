import { FC } from "react";

import { PostPreviewBlockProps } from "@/lib/types";
import { Breadcrumbs, Container, Pagination, PostAll } from "@/components";

import preloadData from "@bin/preload.json";

interface CategoryPageProps {}

const CategoryPage: FC<CategoryPageProps> = (props) => {
  const postsData: Array<PostPreviewBlockProps> = preloadData.postsData;

  return (
    <Container
      classNames="flex-dcol flex-tcenter wrapper-conspace space-y-7xl"
      width="md"
    >
      <Breadcrumbs />
      <div className="flex-drow flex-tspace f2xl-semibold w-full leading-normal">
        <h4 className="text-inherit">All frameworks posts</h4>
      </div>
      <PostAll postsData={postsData} />
      <Pagination currentPage={1} totalPages={10} visiblePages={3} />
    </Container>
  );
};

export default CategoryPage;
