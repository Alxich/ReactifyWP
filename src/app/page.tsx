import { FC } from "react";
import { Container, SubscriberBanner } from "./components";

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  return (
    <>
      <Container padding="sm" width="lg">
        <div></div>
      </Container>
      <SubscriberBanner />
    </>
  );
};

export default Home;
