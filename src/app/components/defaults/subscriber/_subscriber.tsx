import { FC } from "react";
import Link from "next/link";

import { Container } from "../../index";

interface SubscriberProps {}

const Subscriber: FC<SubscriberProps> = (props) => {
  return (
    <div className="subscriber w-full rounded-lg bg-black py-7xl">
      <Container
        width="md"
        classNames="flex flex-row items-start px-xl py-7xl space-x-10xl border-y border-gray"
      >
        <div className="short-text w-1/2 space-y-sm">
          <h4 className="text-2xl font-semibold text-white">
            Subscribe to learn about new product features
          </h4>
          <p className="text-xl text-white">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates. You will get a great benefit
            from our last creators ideas everyday!
          </p>
        </div>
        <div className="w-1/2">
          <form className="w-full">
            <label
              htmlFor="user-mail"
              className="flex flex-col items-start justify-start "
            >
              <span className="mb-md text-xl font-semibold text-white">
                Please let us share a great posts with you
              </span>
              <div className="mb-xs flex w-full flex-row space-x-4">
                <input
                  id="user-mail"
                  name="user-mail"
                  type="email"
                  className="placeholder:text-gray block w-full rounded-lg bg-white px-md py-sm focus:outline-none"
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

export default Subscriber;
