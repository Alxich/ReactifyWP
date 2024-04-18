import { FC } from "react";

import { Button, SvgIcons } from "@/components";
import Link from "next/link";

import preloadData from "@/bin/preload.json";

interface AuthorizationFormProps {
  type: "login" | "register";
}

const AuthorizationForm: FC<AuthorizationFormProps> = ({ type }) => {
  const fields = preloadData["authorization-form"];

  return (
    <form className="flex-dcol w-full space-y-lg px-9.5xl py-10xl small-laptop:px-lg tablet-portrait:py-lg phone-portrait:!px-0">
      <div className="title f5xl-bold w-full text-center leading-normal">
        <h1 className="text-inherit">Log In</h1>
      </div>
      {fields.map((field, index) =>
        type === "login" ? (
          field.id !== "user-repeat-password" && (
            <label
              htmlFor={field.id}
              className="flex-dcol flex-tstart w-full"
              key={index}
            >
              <span className="fmedium-medium mb-xxs">{field.label}</span>
              <div className="flex-dcol w-full">
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  className="auth-inputs-style"
                  placeholder={field.placeholder}
                />
              </div>
            </label>
          )
        ) : (
          <label
            htmlFor={field.id}
            className="flex-dcol flex-tstart w-full"
            key={index}
          >
            <span className="fmedium-medium mb-xxs">{field.label}</span>
            <div className="flex-dcol w-full">
              <input
                id={field.id}
                name={field.name}
                type={field.type}
                className="auth-inputs-style"
                placeholder={field.placeholder}
              />
            </div>
          </label>
        ),
      )}
      <Button type="submit" formType={"form"}>
        Subscribe
      </Button>
      <div className="inline-flex items-center">
        <label
          className="flex-drow relative cursor-pointer items-center overflow-hidden rounded-full p-3"
          htmlFor="link-checkbox"
        >
          <input
            type="checkbox"
            className="relative h-lg w-lg cursor-pointer appearance-none rounded-full border border-black transition-all checked:border-black checked:bg-black"
            id="link-checkbox"
          />
        </label>
        <label
          className=" flex-drow w-full cursor-pointer select-none justify-between"
          htmlFor="link-checkbox"
        >
          <p>Remember Me</p>
          {type !== "register" && (
            <Link href="#" className="use-transition block hover:text-accent">
              Forgot password?
            </Link>
          )}
        </label>
      </div>
      <div className="additional-login flex-dcol flex-ccenter w-full space-y-lg">
        <div className="title flex-drow flex-cspace w-full space-x-lg">
          <span className="display-block h-[1px] w-full bg-gray" />
          <p className="fmedium-normal whitespace-nowrap text-gray">
            Or Login with
          </p>
          <span className="display-block h-[1px] w-full bg-gray" />
        </div>
        <div className="authorization-services flex-drow flex-stcenter w-full space-x-lg">
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
        <div className="last-option flex-dcol flex-ccenter fnormal-normal text-center leading-normal text-gray">
          <p className=" mb-1 text-inherit">
            Don{"'"}t have account right now?
          </p>
          <br />
          {type === "register" ? (
            <Link
              href="#"
              className="use-transition wp-border-b block text-inherit hover:border-b-accent hover:text-accent"
            >
              Register now !
            </Link>
          ) : (
            <Link
              href="#"
              className="use-transition wp-border-b block text-inherit hover:border-b-accent hover:text-accent"
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
