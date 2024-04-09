import { Button } from "@/components";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";

interface ContactsProps {
  className?: string;
}

const Contacts: FC<ContactsProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "contacts flex-dcol flex-ccenter wp-border-t w-full space-y-5xl py-7xl phone-portrait:pb-0",
        (className !== undefined || null) && className,
      )}
    >
      <div className="description flex-dcol flex-ccenter w-full space-y-xl px-7.5xl tablet:px-0">
        <h2 className="f6xl-semibold text-center !leading-none">
          Subscribe to learn about new product features
        </h2>
        <p className="w-3/4 text-center text-xl tablet:w-full">
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates. You will get a great benefit from
          our last creators ideas everyday!
        </p>
      </div>
      <form className="grid w-full max-w-[768px] grid-cols-2 grid-rows-3 gap-md px-7.5xl phone-portrait:grid-cols-1 phone-portrait:grid-rows-4 tablet:px-0">
        <label htmlFor="user-mail" className="flex-dcol flex-tstart w-full">
          <span className="fmedium-medium mb-xxs">Email</span>
          <div className="flex-dcol w-full">
            <input
              id="user-mail"
              name="user-mail"
              type="email"
              className="contact-inputs-style"
              placeholder="Enter your email"
            />
          </div>
        </label>

        <label htmlFor="user-message" className="flex-dcol flex-tstart w-full">
          <span className="fmedium-medium mb-xxs">Message</span>
          <div className="flex-dcol w-full">
            <input
              id="user-message"
              name="user-message"
              type="text"
              className="contact-inputs-style"
              placeholder="Enter your message"
            />
          </div>
        </label>

        <label htmlFor="user-name" className="flex-dcol flex-tstart w-full">
          <span className="fmedium-medium mb-xxs">Name</span>
          <div className="flex-dcol w-full">
            <input
              id="user-name"
              name="user-name"
              type="text"
              className="contact-inputs-style"
              placeholder="Enter your name"
            />
          </div>
        </label>

        <label htmlFor="user-surname" className="flex-dcol flex-tstart w-full">
          <span className="fmedium-medium mb-xxs">Surname</span>
          <div className="flex-dcol w-full">
            <input
              id="user-surname"
              name="user-surname"
              type="text"
              className="contact-inputs-style"
              placeholder="Enter your surname"
            />
          </div>
        </label>

        <label
          htmlFor="submit-btn"
          className="flex-dcol flex-ccenter col-span-2 w-full space-y-md phone-portrait:col-auto"
        >
          <span className="text-medium text-gray">
            We care about your data in our{" "}
            <Link
              className="use-transition underline hover:text-highlight hover:no-underline"
              href="#"
            >
              privacy policy
            </Link>
          </span>
          <Button id="submit-btn" type="submit" formType={"form"}>
            Subscribe
          </Button>
        </label>
      </form>
    </div>
  );
};

export default Contacts;
