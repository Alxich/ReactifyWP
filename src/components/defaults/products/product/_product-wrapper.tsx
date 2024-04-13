import { FC } from "react";

import {
  Container,
  ProductPreview,
  Comments,
  ProductDetails,
  TabsTable,
} from "@/components";
import { ProductPreviewBlockProps } from "@/lib/types";

interface ProductWrapperProps {
  productsData: Array<ProductPreviewBlockProps>;
}

const ProductWrpapper: FC<ProductWrapperProps> = ({
  productsData,
}: ProductWrapperProps) => {
  return (
    <Container
      width="md"
      classNames="space-x-3xl flex-drow pt-7xl laptop:space-x-lg small-laptop:flex-dcol small-laptop:!space-x-0 small-laptop:space-y-lg"
    >
      <div className="content w-71/100 space-y-7xl small-laptop:w-full">
        <ProductDetails />
        <TabsTable />
        <Comments />
      </div>
      <div className="sidebar sticky top-xl h-fit w-29/100 space-y-xl small-laptop:w-full small-laptop:space-y-lg">
        <div className="flex-tspace f2xl-semibold flex-drow w-full leading-normal">
          <h4 className="text-inherit">Recent products</h4>
        </div>
        <div className="products grid grid-cols-1 auto-rows-max auto-cols-max gap-3xl small-laptop:grid-cols-2 tablet:grid-cols-1 tablet:gap-lg">
          {productsData?.map(
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
                key={`product_${title}__${key}`}
              />
            ),
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProductWrpapper;
