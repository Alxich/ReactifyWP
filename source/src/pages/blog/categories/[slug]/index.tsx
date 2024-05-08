import { FC } from "react";

import { Breadcrumbs, Container, PostAll } from "@/components";

interface CategoryPageProps {}

const CategoryPage: FC<CategoryPageProps> = (props) => {
  return (
    <Container
      classNames="flex-dcol flex-tcenter wrapper-conspace space-y-7xl"
      width="md"
    >
      <Breadcrumbs />
      <PostAll queryType="Slug" queryOption="Categories" blockView="Post" />
    </Container>
  );
};

export default CategoryPage;
