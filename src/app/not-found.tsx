import { FC } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Breadcrumbs, Container } from "@/components";

interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  // redirect("/pageNotFound");

  return (
    <Container width="sm" classNames="py-7xl">
      <Breadcrumbs />
      <Container
        width="sm"
        classNames="flex-dcol jusify-center items-center w-full pt-[20vh] tablet:pt-[10vh]"
      >
        <div className="title fsemibold-center text-[30vh] leading-none child:text-inherit tablet:text-[20vh]">
          <h1>404</h1>
        </div>
        <div className="desc max-w-md text-center text-2xl text-gray child:text-inherit">
          <h2>
            Oops! You were not supposed to find this secret page -_(^ _ ^)_-
          </h2>
        </div>
        <div className="add-text fnormal-center max-w-md pt-[20vh] child:text-inherit tablet:pt-[10vh]">
          <p>
            Please, give me some privacy to fix this and find way to go back to
            the{" "}
            <Link
              className="use-transition font-semibold hover:text-highlight"
              href="/"
            >
              {" "}
              main page
            </Link>
            .
          </p>
        </div>
      </Container>
    </Container>
  );
};

export default NotFoundPage;
