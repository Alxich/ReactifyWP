import { FC } from "react";
import {
  Pagination,
  Container,
  PostAll,
  PostsRecent,
  SubscriberBanner,
} from "@/components";
import { PostPreviewBlockProps } from "@/lib/types";

import preloadData from "@bin/preload.json";

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  const postsData: Array<PostPreviewBlockProps> = preloadData.postsData;

  return (
    <>
      <Container width="lg" classNames="space-y-7xl py-7xl">
        <PostsRecent />
        <SubscriberBanner />
        <PostAll postsData={postsData} />
        <Pagination currentPage={1} totalPages={10} visiblePages={3} />
      </Container>
    </>
  );
};

export default Home;
