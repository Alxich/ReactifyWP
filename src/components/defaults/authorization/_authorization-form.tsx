import { FC } from "react";

import { Button, SvgIcons } from "@/components";
import Link from "next/link";

interface AuthorizationFormProps {
  type: "login" | "register";
}

const AuthorizationForm: FC<AuthorizationFormProps> = ({ type }) => {
  return (
    <form className="flex-dcol w-full space-y-lg px-9.5xl py-10xl phone-portrait:!px-0 tablet-portrait:py-lg small-laptop:px-lg">
      <div className="title w-full text-center text-5xl font-bold leading-normal">
        <h1 className="text-inherit">Log In</h1>
      </div>
      <label
        htmlFor="user-mail"
        className="flex-dcol w-full items-start justify-start"
      >
        <span className="mb-xxs text-medium font-medium">Email</span>
        <div className="flex-column flex w-full">
          <input
            id="user-mail"
            name="user-mail"
            type="email"
            className="block w-full rounded-lg border border-black bg-white px-md py-sm text-normal placeholder:focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
      </label>
      <label
        htmlFor="user-mail"
        className="flex-dcol w-full items-start justify-start"
      >
        <span className="mb-xxs text-medium font-medium">Password</span>
        <div className="flex-column flex w-full">
          <input
            id="user-password"
            name="user-password"
            type="password"
            className="block w-full rounded-lg border border-black bg-white px-md py-sm text-normal placeholder:focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
      </label>
      {type === "register" && (
        <label
          htmlFor="user-mail"
          className="flex-dcol w-full items-start justify-start"
        >
          <span className="mb-xxs text-medium font-medium">
            Repeat password
          </span>
          <div className="flex-column flex w-full">
            <input
              id="user-password"
              name="user-password"
              type="password"
              className="block w-full rounded-lg border border-black bg-white px-md py-sm text-normal placeholder:focus:outline-none"
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
          <p className="">Remember Me</p>
          {type !== "register" && (
            <Link href="#" className="use-transition block hover:text-accent">
              Forgot password?
            </Link>
          )}
        </label>
      </div>
      <div className="additional-login flex-dcol flex-ccenter w-full space-y-lg">
        <div className="title flex-drow w-full items-center justify-between space-x-lg">
          <span className="display-block h-[1px] w-full bg-gray" />
          <p className="font-regular whitespace-nowrap text-medium text-gray">
            Or Login with
          </p>
          <span className="display-block h-[1px] w-full bg-gray" />
        </div>
        <div className="authorization-services flex-drow w-full items-stretch justify-center space-x-lg">
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
        <div className="last-option flex-dcol flex-ccenter text-center text-normal font-normal leading-normal text-gray">
          <p className=" mb-1 text-inherit">
            Don{"'"}t have account right now?
          </p>
          <br />
          {type === "register" ? (
            <Link
              href="#"
              className="use-transition block border-b border-b-black text-inherit hover:border-b-accent hover:text-accent"
            >
              Register now !
            </Link>
          ) : (
            <Link
              href="#"
              className="use-transition block border-b border-b-black text-inherit hover:border-b-accent hover:text-accent"
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
