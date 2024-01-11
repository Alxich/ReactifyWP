import { FC } from "react";
import { Container, PostsRecent, SubscriberBanner } from "./components";

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  return (
    <>
      <Container width="lg" classNames="space-y-6.5xl py-6.5xl">
        <PostsRecent />
        <SubscriberBanner />
      </Container>
    </>
  );
};

export default Home;
