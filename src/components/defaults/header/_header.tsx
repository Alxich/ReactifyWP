"use client";

import { FC, useState } from "react";

import { Button, Container, RoundedNavItems } from "../../index";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const pagesNavArray = ["Posts", "About us", "Behind the pixels", "Contact"];

  return (
    <header className="masthead flex-ccenter wp-border-b flex-drow w-full max-w-wrapper-lg-sz pb-xl pt-xs">
      <Container width="sm" classNames="flex-drow flex-stspace">
        <div className="logo laptop:flex-drow cursor-pointer select-none laptop:items-center">
          <p className="f3xl-bold laptop:text-2xl">
            Reactify
            <span className="ml-xxs rounded-sm bg-black px-xxs py-xxs text-white">
              WP
            </span>
          </p>
        </div>
        <Button
          type="button"
          formType="btn_menu"
          isActive={isActive}
          onClick={() => setIsActive(!isActive)}
        />
        <ul className="navigation flex-cspace flex-drow w-auto space-x-2xl tablet-portrait:hidden laptop:space-x-md">
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
    </header>
  );
};

export default Header;
