import { FC } from "react";
import { ProductPreviewBlockProps } from "@/lib/types";

import { Container, ProductHeader, ProductWrpapper } from "@/components";

import preloadData from "@/bin/preload.json";

interface ProductPageProps {}

const ProductPage: FC<ProductPageProps> = ({}: ProductPageProps) => {
  const productsData: Array<ProductPreviewBlockProps> =
    preloadData.productsData;

  return (
    <Container
      classNames="flex-dcol flex-tcenter product wrapper-conspace"
      width="md"
    >
      <ProductHeader />
      <ProductWrpapper productsData={productsData} />
    </Container>
  );
};

export default ProductPage;
