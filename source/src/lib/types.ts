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
  slug?: string;
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

// Apollo Client types and intefaces

export interface queryPostsData {
  type: "queryPost" | "queryPosts" | "queryPostsByVars" | "queryPostsTotal";
  variables?: {
    orderBy: OrderbyEnum; // Your possible options for Orderby
    order: OrderEnum; // Your possible options for Order
    first?: number; // Optional parameter
    size: number;
    offset: number;
  };
}

// All ENUMS to operate variables in GraphQL

export enum OrderbyEnum {
  DATE = "DATE",
  TITLE = "TITLE",
}

export enum OrderEnum {
  DESC = "DESC",
  ASC = "ASC",
}
