import { FC } from "react";

import { Breadcrumbs, Comments, Container } from "@/components";

interface UserAccountPageProps {}

const UserAccountPage: FC<UserAccountPageProps> = (props) => {
  return (
    <Container
      classNames="flex-dcol flex-tcenter wrapper-conspace tablet:pb-0"
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
