import { FC } from "react";
import CategoriesPage from "../../categories/[slug]/page";

interface CategoryPageProps {}

const CategoryPage: FC<CategoryPageProps> = (props) => {
  return <CategoriesPage />;
};

export default CategoryPage;
