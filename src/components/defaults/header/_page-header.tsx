"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";

import { Container, SvgIcons } from "../../index";
import PageHeaderReg from "./types/_regular";
import PageHeaderUser from "./types/_user";

interface PageHeaderProps {
  title: string;
  text: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title, text }: PageHeaderProps) => {
  const route = usePathname();

  return  route !== "/blog/user" ? <PageHeaderReg title={title} text={text} />: <PageHeaderUser username="" text="" description="" />;
};

export default PageHeader;
