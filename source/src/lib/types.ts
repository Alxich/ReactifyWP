import { StaticImageData } from "next/image";

export type PaddingValues =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export interface TagLinkProps {
  type?: "big" | "normal" | string;
  link: string;
  text: string;
  color: string;
  background: string;
}

export interface PostPreviewBlockProps {
  view: "row" | "col" | "row-full" | string;
  isGridSmall?: boolean;
  image: string | StaticImageData;
  author?: string;
  date?: string;
  title: string;
  texts: string;
  tags?: TagLinkProps[];
}

export interface ProductPreviewBlockProps {
  view: "row" | "col" | "row-full" | string;
  isGridSmall?: boolean;
  image: string | StaticImageData;
  breadcrumbs: string;
  title: string;
  texts: string;
  tags?: TagLinkProps[];
  price: number;
}