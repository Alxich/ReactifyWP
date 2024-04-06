import { FC } from "react";

import { AuthorizationForm, Container } from "@/components";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = (props) => {
  return (
    <Container
      classNames="flex flex-row justify-center post pt-7xl px-10xl authorization-page desktop:px-4xl small-laptop:!px-0 tablet:flex-col-reverse"
      width="sm"
    >
      <div className="loyalty flex w-1/2 flex-col items-start justify-center bg-black p-md tablet:w-full">
        <div className="flex h-full w-full flex-col items-start justify-center space-y-xs border-10 border-white bg-black px-6.5xl tablet-portrait:px-md tablet:p-xl">
          <h2 className="text-5xl font-bold text-white">
            Join the largest shop community in the world
          </h2>
          <p className="text-sm font-medium text-white">
            Explore and discover goods, become a better in fashion, connect with
            our call centre, or share your experience to others.
          </p>
        </div>
      </div>
      <div className="w-1/2 tablet:w-full">
        <AuthorizationForm type="register" />
      </div>
    </Container>
  );
};

export default LoginPage;
