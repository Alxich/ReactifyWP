"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";

import PageHeaderReg from "./types/_regular";
import PageHeaderUser from "./types/_user";

import thumbnail from "@images/thumbnail-1.png";

interface PageHeaderProps {
  title: string;
  text: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title, text }: PageHeaderProps) => {
  const route = usePathname();
  const showSubscriber = () => {
    if (route.startsWith("/blog/user/")) {
      return false;
    }

    switch (route) {
      case "/blog/user":
        return false;

      default:
        return true;
    }
  };

  if (route.startsWith("/login") || route.startsWith("/register")) {
    return <></>;
  }

  return showSubscriber() !== false ? (
    <PageHeaderReg title={title} text={text} />
  ) : (
    <PageHeaderUser
      image={thumbnail}
      username="John doe"
      text="One of Reactify WP Customer"
      description="Take a moment to explore our collection of posts and discover the simplicity within."
    />
  );
};

export default PageHeader;
