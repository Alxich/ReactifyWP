import { FC } from "react";
import CategoriesPage from "../../categories/[slug]/page";

interface ICategoryPageProps {}

const CategoryPage: FC<ICategoryPageProps> = (props) => {
  return <CategoriesPage />;
};

export default CategoryPage;
