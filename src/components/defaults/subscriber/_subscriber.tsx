"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button, Container } from "../../index";

interface SubscriberProps {}

const Subscriber: FC<SubscriberProps> = (props) => {
  const route = usePathname();
  const hideBorderAndSubscriber = () => {
    const excludedRoutes = ["/login", "/register", "/contacts", "/blog/user/"];
    return excludedRoutes.some((excludedRoute) =>
      route.startsWith(excludedRoute),
    );
  };

  return !hideBorderAndSubscriber() ? (
    <Container width="lg">
      <div className="subscriber w-full rounded-lg bg-black py-7xl tablet:py-0">
        <Container
          width="sm"
          classNames="flex-drow items-start px-xl py-7xl space-x-10xl tablet:px-md desktop:px-5xl desktop:space-x-2.5xl border-y border-gray small-laptop:flex-dcol tablet:border-none small-laptop:space-x-0 small-laptop:justify-center small-laptop:items-center small-laptop:space-y-lg"
        >
          <div className="short-text w-1/2 space-y-sm small-laptop:w-full">
            <h4 className="f2xl-semibold text-white">
              Subscribe to learn about new product features
            </h4>
            <p className="text-xl text-white">
              Subscribe to learn about new product features, the latest in
              technology, solutions, and updates. You will get a great benefit
              from our last creators ideas everyday!
            </p>
          </div>
          <div className="w-1/2 small-laptop:w-full">
            <form className="w-full">
              <label htmlFor="user-mail" className="flex-dcol flex-tstart ">
                <span className="fxl-semibold mb-md text-white">
                  Please let us share a great posts with you
                </span>
                <div className="flex-drow tablet:flex-dcol mb-xs w-full space-x-4 tablet:space-x-0 tablet:space-y-lg">
                  <input
                    id="user-mail"
                    name="user-mail"
                    type="email"
                    className="block w-full rounded-lg bg-white px-md py-sm placeholder:text-gray focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <Button type="submit" formType={"form"}>
                    Subscribe
                  </Button>
                </div>
                <span className="text-medium text-white">
                  We care about your data in our{" "}
                  <Link
                    className="use-transition underline hover:text-highlight hover:no-underline"
                    href="#"
                  >
                    privacy policy
                  </Link>
                </span>
              </label>
            </form>
          </div>
        </Container>
      </div>
    </Container>
  ) : (
    <></>
  );
};

export default Subscriber;
