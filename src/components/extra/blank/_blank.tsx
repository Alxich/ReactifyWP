import { FC, ReactNode } from "react";

import { Breadcrumbs, Container } from "@/components";

interface BlankPageWrapperProps {
  children: ReactNode;
}

const BlankPageWrapper: FC<BlankPageWrapperProps> = ({ children }) => {
  return (
    <Container
      classNames="flex flex-col justify-center items-start post py-7xl px-3xl"
      width="md"
    >
      <Breadcrumbs />
      <Container width="md" classNames="space-x-3xl flex flex-row pt-7xl">
        <div className="content w-full space-y-xl">
          <div className="page-content-text flex w-full flex-col items-center justify-center space-y-sm">
            {children}
          </div>
        </div>
        <div className="theme-slogan">
          <p className="whitespace-nowrap text-7xl font-bold uppercase text-black writing-sd-rl">
            Have you heard about Reactify
            <span className="mt-xs rounded-sm bg-black px-xs py-sm text-white">
              WP
            </span>
          </p>
        </div>
      </Container>
    </Container>
  );
};

export default BlankPageWrapper;
