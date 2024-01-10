import * as React from "react";
import { Container } from "../..";

interface IRecentPostProps {}

const RecentPost: React.FunctionComponent<IRecentPostProps> = (props) => {
  return (
    <Container
      width="md"
      padding="3xl"
      classNames="grid grid-cols-5 grid-rows-5 gap-4"
    >
      <div className="row-span-2">1</div>
      <div>2</div>
      <div className="col-start-2 row-start-2">3</div>
      <div className="col-span-2 row-start-3">4</div>
    </Container>
  );
};

export default RecentPost;
