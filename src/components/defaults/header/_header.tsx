"use client";

import { FC, useState } from "react";

import { Button, Container, RoundedNavItems } from "../../index";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const pagesNavArray = ["Posts", "About us", "Behind the pixels", "Contact"];

  return (
    <header className="masthead flex w-full max-w-wrapper-lg-sz items-center justify-center border-b border-b-black pb-xl pt-xs">
      <Container width="sm" classNames="flex justify-between">
        <div className="logo cursor-pointer select-none laptop:flex laptop:items-center">
          <p className="text-3xl font-bold laptop:text-2xl">
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
        <ul className="navigation flex w-auto items-center justify-between space-x-2xl laptop:space-x-md tablet-portrait:hidden">
          {pagesNavArray.map((item, key) => (
            <li
              className="underline-hover cursor-pointer text-normal"
              key={`nav_${item}_${key}`}
            >
              <p className="">{item}</p>
            </li>
          ))}
          <RoundedNavItems />
        </ul>
      </Container>
    </header>
  );
};

export default Header;
