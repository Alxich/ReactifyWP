import { FC } from "react";

import { AuthorizationForm, Container } from "@/components";

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = (type) => {
  return (
    <Container
      classNames="flex-drow justify-center pt-7xl px-10xl authorization-page desktop:px-4xl small-laptop:px-0 tablet:flex-dcol-reverse tablet:pt-0 tablet-portrait-min:pb-7xl"
      width="sm"
    >
      <div className="loyalty flex-tcenter flex-dcol w-1/2 bg-black p-md tablet:w-full">
        <div className="flex-tcenter spread-block flex-dcol space-y-xs border-10 border-white bg-black px-6.5xl tablet-portrait:px-md tablet:px-xl tablet:py-7xl phone-portrait:px-lg">
          <h2 className="f5xl-bold text-white">
            Join the largest shop community in the world
          </h2>
          <p className="fsmall-medium text-white">
            Explore and discover goods, become a better in fashion, connect with
            our call centre, or share your experience to others.
          </p>
        </div>
      </div>
      <div className="w-1/2 tablet:w-full">
        <AuthorizationForm type={"register"} />
      </div>
    </Container>
  );
};

export default RegisterPage;
