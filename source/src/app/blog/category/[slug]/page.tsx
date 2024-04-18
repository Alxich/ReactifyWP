import { FC } from "react";
import CategoryPageOriginal from "../../categories/[slug]/page";

interface CategoryPageProps {}

const CategoryPage: FC<CategoryPageProps> = (props) => {
  return <CategoryPageOriginal />;
};

export default CategoryPage;
