"use client";

import { FC } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container, Subscriber, SvgIcons } from "../../index";

interface FooterProps {}

type NavCategoryObject = {
  title: string;
  navLinks: Array<{ title: string; link: string }>;
};

const Footer: FC<FooterProps> = (props) => {
  const router = usePathname();

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
      {router !== "/contacts" && (
        <Container width="lg">
          <Subscriber />
        </Container>
      )}
      <footer className="footer w-full max-w-wrapper-lg-sz pt-7xl">
        <Container classNames="head-wrapper flex flex-row pb-7xl" width="sm">
          <div className="navigation flex w-3/5 flex-row items-center justify-between">
            {navObjOne && (
              <ul className="nav-list flex w-full flex-col items-start justify-start space-y-sm">
                <li className="title mb-xxs font-semibold text-black">
                  {navObjOne.title}
                </li>
                {navObjOne.navLinks.map((item, key) => (
                  <li
                    className="underline-hover cursor-pointer text-normal text-black"
                    key={`nav_${item}_${key}`}
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
            {navObjTwo && (
              <ul className="nav-list flex w-full flex-col items-start justify-start space-y-sm">
                <li className="title mb-xxs font-semibold text-black">
                  {navObjTwo.title}
                </li>
                {navObjTwo.navLinks.map((item, key) => (
                  <li
                    className="underline-hover cursor-pointer text-normal text-black"
                    key={`nav_${item}_${key}`}
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
            {navObjThree && (
              <ul className="nav-list flex w-full flex-col items-start justify-start space-y-sm">
                <li className="title mb-xxs font-semibold text-black">
                  {navObjThree.title}
                </li>
                {navObjThree.navLinks.map((item, key) => (
                  <li
                    className="underline-hover cursor-pointer text-normal text-black"
                    key={`nav_${item}_${key}`}
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="highlight-banner w-2/5">
            <p className="text-4xl font-bold uppercase text-black">
              As one chapter ends, the story{"'"}s essence lingers in the
              margins.
            </p>
          </div>
        </Container>
        <div className="bottom-wrapper border-t border-t-black pt-2.5xl">
          <Container
            classNames="flex flex-row justify-between items-center"
            width="sm"
          >
            <div className="privacy-rooles">
              <p className="text-medium font-normal text-black">
                © 2023 ReactifyWP - Wordpress blog project by Alxich. <br />
                The rights belong to the authors of the content and libraries
                used in this template.
              </p>
              <p className="mt-2.5xl text-medium font-normal text-black">
                The code and design of this template are copyrighted by{" "}
                <Link href="#" className="use-transition hover:text-highlight">
                  @Alxich
                </Link>
                .
              </p>
            </div>
            <div className="socials svg-animated flex flex-row space-x-xl child:cursor-pointer">
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
