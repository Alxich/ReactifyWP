import { FC } from "react";
import {
  Container,
  PostAll,
  PostsRecent,
  SubscriberBanner,
} from "@/components";

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  return (
    <Container width="lg" classNames="space-y-7xl py-7xl">
      <PostsRecent />
      <SubscriberBanner />
      <PostAll blockView="Post" queryOption="Posts" queryType="Vars" vars={{initialOffset: 4}} />
    </Container>
  );
};

export default Home;
