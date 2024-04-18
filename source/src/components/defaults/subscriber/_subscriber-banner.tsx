import { FC } from "react";
import Link from "next/link";

import { Button, Container } from "../../index";

interface SubscriberBannerProps {}

const SubscriberBanner: FC<SubscriberBannerProps> = (props) => {
  return (
    <div className="subscriber w-full rounded-lg bg-black py-7xl">
      <Container
        width="sm"
        classNames="flex-dcol flex-ccenter px-xl py-11xl space-y-5xl laptop:py-0 tablet:!px-md"
      >
        <div className="short-text w-full space-y-xl">
          <h4 className="f6xl-semibold text-center text-white">
            Stories and interviews
          </h4>
          <p className="text-center text-xl text-white">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
        </div>
        <div className="flex-ccenter flex-drow w-full max-w-[500px]">
          <form className="w-full">
            <label htmlFor="user-mail" className="flex-dcol flex-tstart">
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
                  href="/privacy-policy"
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