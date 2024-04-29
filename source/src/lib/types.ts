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
  id?: string;
  slug?: string;
  link: string;
  name?: string;
  description?: string;
  text?: string;
  color: string;
  background: string;
}

export interface PostPreviewBlockProps {
  slug?: string;
  view: "row" | "col" | "row-full" | string;
  isGridSmall?: boolean;
  image: string | StaticImageData;
  author?: string;
  date?: string;
  title: string;
  texts: string;
  link: string;
  tags?: TagLinkProps[];
}

export interface ProductPreviewBlockProps {
  slug?: string;
  view: "row" | "col" | "row-full" | string;
  isGridSmall?: boolean;
  image: string | StaticImageData;
  breadcrumbs: string;
  title: string;
  texts: string;
  tags?: TagLinkProps[];
  price: number;
}

export interface CategoryPreviewBlockProps {
  id?: string;
  slug?: string;
  view: "row" | "col" | "row-full" | string;
  isGridSmall?: boolean;
  image: string | StaticImageData;
  title: string;
  texts: string;
  link: string;
  tags?: TagLinkProps[];
}

// Apollo Client types and intefaces

export interface queryVariables {
  orderBy?: OrderbyEnum; // Your possible options for Orderby
  order?: OrderEnum; // Your possible options for Order
  hideEmpty?: Boolean;
  first?: number; // Optional parameter
  last?: number;
  after?: string;
  before?: string;
  slug?: string;
  size?: number;
  offset?: number;
  id?: string;
  idType?: IDTypeEnum;
  tagId?: string;
  tag?: string;
}

export interface queryPostsData {
  type: "queryPost" | "queryPosts" | "queryPostsByVars" | "queryPostsTotal";
  variables?: queryVariables;
}

export interface queryCategoriesData {
  type:
    | "queryCategory"
    | "queryCategories"
    | "queryCategoriesByVars"
    | "queryCategoriesTotal";
  variables?: queryVariables;
}

export interface queryTagsData {
  type: "queryTag" | "queryTags";
  variables?: queryVariables;
}

// All ENUMS to operate variables in GraphQL

export enum IDTypeEnum {
  DATABASE_ID = "DATABASE_ID",
  ID = "ID",
  NAME = "NAME",
  SLUG = "SLUG",
  URI = "URI",
}

export enum OrderbyEnum {
  DATE = "DATE",
  TITLE = "TITLE",
  NAME = "NAME",
}

export enum OrderEnum {
  DESC = "DESC",
  ASC = "ASC",
}
