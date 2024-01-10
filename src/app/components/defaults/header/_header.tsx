import { FC } from "react";

import { Container, RoundedNavItems } from "../../index";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}: HeaderProps) => {
  const pagesNavArray = [
    "Posts",
    "About us",
    "Behind the pixels",
    "Contact",
  ];

  return (
    <header className="masthead flex w-full max-w-wrapper-xl-sz items-center justify-center border-b border-b-black pb-xl pt-xs">
      <Container width="md" classNames="flex justify-between">
        <div className="logo cursor-pointer select-none">
          <p className="text-3xl font-bold text-black">
            Reactify
            <span className="ml-xxs rounded-sm bg-black px-xxs py-xxs text-white">
              WP
            </span>
          </p>
        </div>
        <ul className="navigation flex w-auto items-center justify-between space-x-2xl">
          {pagesNavArray.map((item, key) => (
            <li
              className="underline-hover cursor-pointer text-normal"
              key={`nav_${item}_${key}`}
            >
              <p className="text-black">{item}</p>
            </li>
          ))}
          <RoundedNavItems />
        </ul>
      </Container>
    </header>
  );
};

export default Header;
