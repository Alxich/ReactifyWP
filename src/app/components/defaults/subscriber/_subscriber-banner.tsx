import { FC } from "react";
import Link from "next/link";

import { Container } from "../../index";

interface SubscriberBannerProps {}

const SubscriberBanner: FC<SubscriberBannerProps> = (props) => {
  return (
    <div className="subscriber w-full rounded-lg bg-black py-7xl">
      <Container
        width="sm"
        classNames="flex flex-col justify-center items-center px-xl py-11xl space-y-5xl"
      >
        <div className="short-text w-full space-y-xl">
          <h4 className="text-center text-6xl font-semibold text-white">
            Stories and interviews
          </h4>
          <p className="text-center text-xl text-white">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
        </div>
        <div className="flex w-full max-w-[500px] items-center justify-center">
          <form className="w-full">
            <label
              htmlFor="user-mail"
              className="flex flex-col items-start justify-start"
            >
              <div className="mb-xs flex w-full flex-row space-x-4">
                <input
                  id="user-mail"
                  name="user-mail"
                  type="email"
                  className="block w-full rounded-lg bg-white px-md py-sm placeholder:text-gray focus:outline-none"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="transition-300 rounded-lg border-2 border-highlight bg-highlight px-lg py-sm text-white transition hover:bg-transparent hover:text-highlight"
                >
                  Subscribe
                </button>
              </div>
              <span className="text-medium text-white">
                We care about your data in our{" "}
                <Link
                  className="transition-300 underline transition hover:text-highlight hover:no-underline"
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
  );
};

export default SubscriberBanner;
