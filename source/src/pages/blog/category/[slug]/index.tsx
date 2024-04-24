import { FC } from "react";
import CategoryPageOriginal from "../../categories/[slug]/index";

interface CategoryPageProps {}

const CategoryPage: FC<CategoryPageProps> = (props) => {
  return <CategoryPageOriginal />;
};

export default CategoryPage;
