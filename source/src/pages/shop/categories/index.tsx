import { FC } from "react";
import { ProductPreviewBlockProps } from "@/lib/types";

import { Breadcrumbs, Container, Pagination, ProductAll } from "@/components";

import preloadData from "@/bin/preload.json";

interface CategoriesPageProps {}

const CategoriesPage: FC<CategoriesPageProps> = (props) => {
  const productsData: Array<ProductPreviewBlockProps> = preloadData.productsData

  return (
    <Container
      classNames="flex-dcol flex-tcenter wrapper-conspace space-y-7xl"
      width="md"
    >
      <Breadcrumbs />
      <div className="flex-tspace f2xl-semibold flex-drow w-full leading-normal">
        <h4 className="text-inherit">Explore all categories</h4>
      </div>
      <ProductAll productsData={productsData} />
      <Pagination currentPage={1} totalPages={10} visiblePages={3} />
    </Container>
  );
};

export default CategoriesPage;
