import { FC, ReactNode } from "react";

import { Contacts, Container } from "@/components";
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
      classNames={classNames("flex-dcol flex-tcenter py-7xl", {
        "space-y-7xl": showSlogan === false,
        "!pb-0": hasContacts === true,
      })}
      width="full"
    >
      <Container
        width="md"
        classNames={classNames(" flex", {
          "space-y-7xl flex-dcol": showSlogan === false,
          "space-x-3xl flex-drow": showSlogan !== false,
        })}
      >
        <div className="content w-full space-y-xl">
          <div className="page-content-text flex-dcol flex-ccenter w-full space-y-sm">
            {children}
            {showSlogan !== false && hasContacts === true && (
              <Contacts className="!mt-7xl" />
            )}
          </div>
        </div>
        {showSlogan !== false && (
          <div className="theme-slogan tablet:hidden">
            <p className="f7xl-bold whitespace-nowrap uppercase writing-v-rl">
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
