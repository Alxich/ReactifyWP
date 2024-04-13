"use client";

import { FC, useEffect, useState } from "react";
import classNames from "classnames";

import { Button, Container, RoundedNavItems } from "../../index";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}: HeaderProps) => {
  const [mobMenuActive, setMobMenuActive] = useState<boolean>(false);
  const pagesNavArray = ["Posts", "About us", "Behind the pixels", "Contact"];

  useEffect(() => {
    const body = document.documentElement.classList;

    mobMenuActive
      ? body.add("overflow-hidden")
      : body.remove("overflow-hidden");
  }, [mobMenuActive]);

  return (
    <header
      className={classNames(
        "masthead flex-ccenter wp-border-b flex-drow tablet-portrait:flex-dcol w-full max-w-wrapper-lg-sz pb-xl pt-xs tablet-portrait:pb-lg",
        {
          "h-screen": mobMenuActive,
        },
      )}
    >
      <Container width="sm" classNames="flex-drow flex-stspace">
        <div className="logo laptop:flex-drow cursor-pointer select-none laptop:items-center">
          <p className="f3xl-bold laptop:text-4xl">
            Reactify
            <span className="ml-xxs rounded-sm bg-black px-xxs py-xxs text-white">
              WP
            </span>
          </p>
        </div>
        <Button
          type="button"
          formType="btn_menu"
          isActive={mobMenuActive}
          onClick={() => setMobMenuActive(!mobMenuActive)}
        />
        <ul className="navigation flex-cspace flex-drow w-auto space-x-2xl laptop:space-x-md tablet-portrait:hidden">
          {pagesNavArray.map((item, key) => (
            <li
              className="underline-hover fnormal-normal cursor-pointer"
              key={`nav_${item}_${key}`}
            >
              <p>{item}</p>
            </li>
          ))}
          <RoundedNavItems />
        </ul>
      </Container>
      <div
        className={classNames(
          "mobile-menu flex-dcol use-transition w-full space-y-lg tablet-portrait-min:hidden",
          {
            "visible h-full": mobMenuActive,
            "invisible h-0": !mobMenuActive,
          },
        )}
      >
        <div className="flex-tspace f2xl-semibold flex-drow w-full pt-xl leading-normal">
          <h4 className="text-inherit">Our website navigation</h4>
        </div>
        <ul className="navigation flex-cspace flex-drow tablet-portrait:flex-dcol tablet-portrait:flex-tstart w-auto space-x-2xl laptop:space-x-md tablet-portrait:hidden tablet-portrait:space-x-0  tablet-portrait:space-y-lg">
          {pagesNavArray.map((item, key) => (
            <li
              className="underline-hover fnormal-normal cursor-pointer"
              key={`nav_${item}_${key}`}
            >
              <p>{item}</p>
            </li>
          ))}
          <div className="flex-tspace f2xl-semibold flex-drow w-full leading-normal">
            <h4 className="text-inherit">Possible functions</h4>
          </div>
          <div className="flex-drow space-x-lg">
            <RoundedNavItems />
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
