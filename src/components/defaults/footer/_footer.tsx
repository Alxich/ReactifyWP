"use client";

import { FC } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container, Subscriber, SvgIcons } from "../../index";
import classNames from "classnames";

interface FooterProps {}

type NavCategoryObject = {
  title: string;
  navLinks: Array<{ title: string; link: string }>;
};

const Footer: FC<FooterProps> = (props) => {
  const route = usePathname();
  const hideBorderAndSubscriber = () => {
    const excludedRoutes = ["/login", "/register", "/contacts", "/blog/user/"];
    return excludedRoutes.some((excludedRoute) =>
      route.startsWith(excludedRoute),
    );
  };

  const navObjOne: NavCategoryObject = {
    title: "Discover & Explore",
    navLinks: [
      { title: "Design", link: "" },
      { title: "Development", link: "" },
      { title: "Leadership and Managment", link: "" },
    ],
  };
  const navObjTwo: NavCategoryObject = {
    title: "Contributors",
    navLinks: [
      { title: "Learn More About Us", link: "" },
      { title: "Contact Information", link: "" },
      { title: "Behind the Pixels", link: "" },
    ],
  };
  const navObjThree: NavCategoryObject = {
    title: "Policy and Privacy",
    navLinks: [
      { title: "Privacy Policy", link: "" },
      { title: "Terms of Use", link: "" },
      { title: "Cookie Policy", link: "" },
    ],
  };

  return (
    <>
      {!hideBorderAndSubscriber() && (
        <Container width="lg">
          <Subscriber />
        </Container>
      )}
      <footer className="footer w-full max-w-wrapper-lg-sz pt-7xl large-desktop:pb-10xl">
        <Container
          classNames="head-wrapper flex-drow pb-7xl tablet-portrait:hidden"
          width="sm"
        >
          <div className="navigation flex-cspace flex-drow w-3/5 flex-row laptop:w-full">
            {navObjOne && (
              <ul className="nav-list flex-dcol flex-tstart w-full space-y-sm">
                <li className="title mb-xxs font-semibold">
                  {navObjOne.title}
                </li>
                {navObjOne.navLinks.map((item, key) => (
                  <li
                    className="underline-hover fnormal-normal cursor-pointer "
                    key={`nav_${item}_${key}`}
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
            {navObjTwo && (
              <ul className="nav-list flex-dcol flex-tstart w-full space-y-sm">
                <li className="title mb-xxs font-semibold">
                  {navObjTwo.title}
                </li>
                {navObjTwo.navLinks.map((item, key) => (
                  <li
                    className="underline-hover fnormal-normal cursor-pointer "
                    key={`nav_${item}_${key}`}
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
            {navObjThree && (
              <ul className="nav-list flex-dcol flex-tstart w-full space-y-sm">
                <li className="title mb-xxs font-semibold">
                  {navObjThree.title}
                </li>
                {navObjThree.navLinks.map((item, key) => (
                  <li
                    className="underline-hover fnormal-normal cursor-pointer "
                    key={`nav_${item}_${key}`}
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="highlight-banner w-2/5 laptop:hidden">
            <p className="f4xl-bold uppercase">
              As one chapter ends, the story{"'"}s essence lingers in the
              margins.
            </p>
          </div>
        </Container>
        <div className="bottom-wrapper wp-border-t pt-2.5xl">
          <Container
            classNames="flex-drow flex-cspace tablet-portrait:flex-dcol tablet-portrait:space-y-lg"
            width="sm"
          >
            <div className="privacy-rooles space-y-2.5xl tablet-portrait:w-full tablet-portrait:space-y-lg">
              <p className="fmedium-normal">
                © 2023 ReactifyWP - Wordpress blog project by Alxich. <br />
                The rights belong to the authors of the content and libraries
                used in this template.
              </p>
              <div className="socials svg-animated tablet-portrait:flex-drow hidden w-full justify-center space-x-xl child:cursor-pointer">
                <SvgIcons type="Discord" />
                <SvgIcons type="Figma" />
                <SvgIcons type="Google" />
                <SvgIcons type="Github" />
              </div>
              <p className="fmedium-normal">
                The code and design of this template are copyrighted by{" "}
                <Link href="#" className="use-transition hover:text-highlight">
                  @Alxich
                </Link>
                .
              </p>
            </div>
            <div className="socials svg-animated flex-drow space-x-xl child:cursor-pointer tablet-portrait:hidden">
              <SvgIcons type="Discord" />
              <SvgIcons type="Figma" />
              <SvgIcons type="Google" />
              <SvgIcons type="Github" />
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
