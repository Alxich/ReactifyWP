import { FC } from "react";

import Link from "next/link";
import { Container, Subscriber, SvgIcons } from "../../index";

interface FooterProps {}

type NavCategoryObject = {
  title: string;
  navLinks: Array<{ title: string; link: string }>;
};

const Footer: FC<FooterProps> = (props) => {
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
      { title: "Learn More About Us", link: "/about" },
      { title: "Contact Information", link: "/contacts" },
      { title: "Behind the Pixels", link: "/behind-the-pixels" },
    ],
  };
  const navObjThree: NavCategoryObject = {
    title: "Policy and Privacy",
    navLinks: [
      { title: "Privacy Policy", link: "/privacy-policy" },
      { title: "Terms of Use", link: "/term-of-use" },
      { title: "Cookie Policy", link: "/cookie-policy" },
    ],
  };

  const socialIcons = (
    <>
      <SvgIcons type="Discord" />
      <SvgIcons type="Figma" />
      <SvgIcons type="Google" />
      <SvgIcons type="Github" />
    </>
  );

  return (
    <>
      <Subscriber />
      <footer className="footer w-full max-w-wrapper-lg-sz pt-7xl large-desktop:pb-10xl wp-border-t">
        <Container
          classNames="head-wrapper flex-drow pb-7xl tablet-portrait:hidden"
          width="sm"
        >
          <div className="navigation flex-cspace flex-drow flex-drow w-3/5 laptop:w-full">
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
                {socialIcons}
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
              {socialIcons}
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
