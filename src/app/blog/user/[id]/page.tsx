import { FC } from "react";

import { Breadcrumbs, Comments, Container } from "@/components";

interface UserAccountPageProps {}

const UserAccountPage: FC<UserAccountPageProps> = (props) => {
  return (
    <Container
      classNames="flex flex-col justify-center items-start post py-7xl px-3xl"
      width="md"
    >
      <Breadcrumbs />
      <Container width="xs">
        <Comments showTitle={false} showEditor={false} />
      </Container>
    </Container>
  );
};

export default UserAccountPage;
