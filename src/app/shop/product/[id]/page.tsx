import { FC } from "react";

import { Breadcrumbs, Container } from "@/components";

interface ProductPageProps {}

const ProductPage: FC<ProductPageProps> = ({}: ProductPageProps) => {
  return (
    <Container
      classNames="flex flex-col justify-center items-start product py-7xl px-3xl"
      width="md"
    >
      <Breadcrumbs />
      
    </Container>
  );
};

export default ProductPage;
