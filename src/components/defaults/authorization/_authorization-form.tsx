import { FC } from "react";

import { Button, SvgIcons } from "@/components";
import Link from "next/link";

interface AuthorizationFormProps {
  type: "login" | "register";
}

const AuthorizationForm: FC<AuthorizationFormProps> = ({ type }) => {
  return (
    <form className="px-9.5xl flex w-full flex-col space-y-lg py-10xl">
      <div className="title w-full text-center text-5xl font-bold leading-normal">
        <h1 className="text-inherit">Log In</h1>
      </div>
      <label
        htmlFor="user-mail"
        className="flex w-full flex-col items-start justify-start"
      >
        <span className="mb-xxs text-medium font-medium text-black">Email</span>
        <div className="flex-column flex w-full">
          <input
            id="user-mail"
            name="user-mail"
            type="email"
            className="block w-full rounded-lg border border-black bg-white px-md py-sm text-normal text-black placeholder:text-black focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
      </label>
      <label
        htmlFor="user-mail"
        className="flex w-full flex-col items-start justify-start"
      >
        <span className="mb-xxs text-medium font-medium text-black">
          Password
        </span>
        <div className="flex-column flex w-full">
          <input
            id="user-password"
            name="user-password"
            type="password"
            className="block w-full rounded-lg border border-black bg-white px-md py-sm text-normal text-black placeholder:text-black focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
      </label>
      {type === "register" && (
        <label
          htmlFor="user-mail"
          className="flex w-full flex-col items-start justify-start"
        >
          <span className="mb-xxs text-medium font-medium text-black">
            Repeat password
          </span>
          <div className="flex-column flex w-full">
            <input
              id="user-password"
              name="user-password"
              type="password"
              className="block w-full rounded-lg border border-black bg-white px-md py-sm text-normal text-black placeholder:text-black focus:outline-none"
              placeholder="Enter your password again"
            />
          </div>
        </label>
      )}
      <Button type="submit" formType={"form"}>
        Subscribe
      </Button>
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center overflow-hidden rounded-full p-3"
          htmlFor="link-checkbox"
        >
          <input
            type="checkbox"
            className="relative h-lg w-lg cursor-pointer appearance-none rounded-full border border-black transition-all checked:border-black checked:bg-black"
            id="link-checkbox"
          />
        </label>
        <label
          className=" flex w-full cursor-pointer select-none justify-between"
          htmlFor="link-checkbox"
        >
          <p className="text-black">Remember Me</p>
          {type !== "register" && (
            <Link
              href="#"
              className="use-transition block text-black hover:text-accent"
            >
              Forgot password?
            </Link>
          )}
        </label>
      </div>
      <div className="additional-login flex w-full flex-col items-center justify-center space-y-lg">
        <div className="title flex w-full flex-row items-center justify-between space-x-lg">
          <span className="display-block h-[1px] w-full bg-gray" />
          <p className="font-regular whitespace-nowrap text-medium text-gray">
            Or Login with
          </p>
          <span className="display-block h-[1px] w-full bg-gray" />
        </div>
        <div className="authorization-services flex w-full flex-row items-stretch justify-center space-x-lg">
          <div className="item">
            <SvgIcons type="Login_Facebook" />
          </div>
          <div className="item">
            <SvgIcons type="Login_Google" />
          </div>
          <div className="item">
            <SvgIcons type="Login_Apple" />
          </div>
        </div>
        <div className="last-option flex flex-col items-center justify-center text-center text-normal font-normal leading-normal text-gray">
          <p className=" mb-1 text-inherit">
            Don{"'"}t have account right now?
          </p>
          <br />
          {type === "register" ? (
            <Link
              href="#"
              className="use-transition block border-b border-b-black text-black text-inherit hover:border-b-accent hover:text-accent"
            >
              Log in
            </Link>
          ) : (
            <Link
              href="#"
              className="use-transition block border-b border-b-black text-black text-inherit hover:border-b-accent hover:text-accent"
            >
              Forgot password?
            </Link>
          )}
        </div>
      </div>
    </form>
  );
};

export default AuthorizationForm;
