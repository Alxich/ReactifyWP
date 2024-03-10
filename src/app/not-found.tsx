"use client";

import { FC } from "react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

import { Breadcrumbs, Container } from "@/components";

interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const route = usePathname();
  !route.startsWith("/pageNotFound") && redirect("/pageNotFound");

  return (
    <Container width="sm" classNames="py-7xl">
      <Breadcrumbs />
      <Container
        width="sm"
        classNames="flex flex-col jusify-center items-center w-full pt-[20vh]"
      >
        <div className="title text-center text-[30vh] font-semibold leading-none text-black child:text-inherit">
          <h1>404</h1>
        </div>
        <div className="desc max-w-md text-center text-2xl text-gray child:text-inherit">
          <h2>
            Oops! You were not supposed to find this secret page -_(^ _ ^)_-
          </h2>
        </div>
        <div className="add-text max-w-md pt-[20vh] text-center text-normal text-black child:text-inherit">
          <p>
            Please, give me some privacy to fix this and find way to go back to
            the{" "}
            <Link
              className="use-transition font-semibold hover:text-highlight"
              href={"/"}
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
