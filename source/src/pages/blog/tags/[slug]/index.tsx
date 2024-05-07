import { FC } from "react";

import { Breadcrumbs, Container, PostAll } from "@/components";

interface TagPageProps {}

const TagsPage: FC<TagPageProps> = (props) => {
  return (
    <Container
      classNames="flex-dcol flex-tcenter wrapper-conspace space-y-7xl"
      width="md"
    >
      <Breadcrumbs />

      <PostAll queryType="Slug" queryOption="Tags" blockView="Post" />
    </Container>
  );
};

export default TagsPage;
