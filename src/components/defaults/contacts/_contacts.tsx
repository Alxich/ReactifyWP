import { Button } from "@/components";
import Link from "next/link";
import { FC } from "react";

interface ContactsProps {}

const Contacts: FC<ContactsProps> = (props) => {
  return (
    <div className="contacts flex w-full flex-col items-center justify-center space-y-5xl border-y border-y-black py-7xl">
      <div className="description flex w-full flex-col items-center justify-center space-y-xl px-7.5xl">
        <h2 className="text-center font-semibold !leading-none text-black text-6xl">
          Subscribe to learn about new product features
        </h2>
        <p className="w-3/4 text-center text-xl text-black">
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates. You will get a great benefit from
          our last creators ideas everyday!
        </p>
      </div>
      <form className="grid w-full max-w-[768px] grid-cols-2 grid-rows-3 gap-md px-7.5xl">
        <label
          htmlFor="user-mail"
          className="flex w-full flex-col items-start justify-start"
        >
          <span className="mb-xxs text-medium font-medium text-black">
            Email
          </span>
          <div className="flex-column flex w-full">
            <input
              id="user-mail"
              name="user-mail"
              type="email"
              className="block w-full rounded-lg border border-gray bg-white px-md py-sm text-normal text-black placeholder:text-gray focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
        </label>

        <label
          htmlFor="user-message"
          className="flex w-full flex-col items-start justify-start"
        >
          <span className="mb-xxs text-medium font-medium text-black">
            Message
          </span>
          <div className="flex-column flex w-full">
            <input
              id="user-message"
              name="user-message"
              type="text"
              className="block w-full rounded-lg border border-gray bg-white px-md py-sm text-normal text-black placeholder:text-gray focus:outline-none"
              placeholder="Enter your message"
            />
          </div>
        </label>

        <label
          htmlFor="user-name"
          className="flex w-full flex-col items-start justify-start"
        >
          <span className="mb-xxs text-medium font-medium text-black">
            Name
          </span>
          <div className="flex-column flex w-full">
            <input
              id="user-name"
              name="user-name"
              type="text"
              className="block w-full rounded-lg border border-gray bg-white px-md py-sm text-normal text-black placeholder:text-gray focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
        </label>

        <label
          htmlFor="user-surname"
          className="flex w-full flex-col items-start justify-start"
        >
          <span className="mb-xxs text-medium font-medium text-black">
            Surname
          </span>
          <div className="flex-column flex w-full">
            <input
              id="user-surname"
              name="user-surname"
              type="text"
              className="block w-full rounded-lg border border-gray bg-white px-md py-sm text-normal text-black placeholder:text-gray focus:outline-none"
              placeholder="Enter your surname"
            />
          </div>
        </label>

        <label
          htmlFor="submit-btn"
          className="col-span-2 flex w-full flex-col items-center justify-center space-y-md"
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