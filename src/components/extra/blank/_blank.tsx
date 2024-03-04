import { FC, ReactNode } from "react";

import { Breadcrumbs, Contacts, Container } from "@/components";
import classNames from "classnames";

interface BlankPageWrapperProps {
  showSlogan?: boolean;
  hasContacts?: boolean;
  children: ReactNode;
}

const BlankPageWrapper: FC<BlankPageWrapperProps> = ({
  showSlogan,
  hasContacts,
  children,
}) => {
  return (
    <Container
      classNames={classNames(
        "flex flex-col justify-center items-start post py-7xl",
        {
          "space-y-7xl": showSlogan === false,
          "pb-0": hasContacts === true,
        },
      )}
      width="full"
    >
      <Container
        width="md"
        classNames={classNames(" flex", {
          "space-y-7xl flex-col": showSlogan === false,
          "space-x-3xl flex-row": showSlogan !== false,
        })}
      >
        <div className="content w-full space-y-xl">
          <div className="page-content-text flex w-full flex-col items-center justify-center space-y-sm">
            {children}
            {showSlogan !== false && hasContacts === true && <Contacts className="!mt-7xl" />}
          </div>
        </div>
        {showSlogan !== false && (
          <div className="theme-slogan">
            <p className="whitespace-nowrap text-7xl font-bold uppercase text-black writing-sd-rl">
              Have you heard about Reactify
              <span className="mt-xs rounded-sm bg-black px-xs py-sm text-white">
                WP
              </span>
            </p>
          </div>
        )}
      </Container>
      {showSlogan === false && hasContacts === true && <Contacts />}
    </Container>
  );
};

export default BlankPageWrapper;
