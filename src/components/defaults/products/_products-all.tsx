import { FC } from "react";
import { Container, ProductPreview } from "../../index";

import { ProductPreviewBlockProps } from "@/lib/types";

interface ProductAllProps {
  productsData: Array<ProductPreviewBlockProps>;
}

const ProductAll: FC<ProductAllProps> = ({ productsData }: ProductAllProps) => {
  return (
    <Container
      width="md"
      classNames="grid grid-cols-3 auto-rows-max auto-cols-max gap-3xl"
    >
      {productsData.map(
        ({ view, breadcrumbs, price, image, title, texts, tags }, key) => (
          <ProductPreview
            view={view}
            breadcrumbs={breadcrumbs}
            price={price}
            image={image}
            title={title}
            texts={texts}
            tags={tags}
            type="regular"
            key={`post_${title}__${key}`}
          />
        ),
      )}
    </Container>
  );
};

export default ProductAll;
