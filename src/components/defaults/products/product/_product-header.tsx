import { FC } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import { Breadcrumbs, Button, Container } from "@/components";

interface ProductHeaderProps {}

const ProductHeader: FC<ProductHeaderProps> = ({}: ProductHeaderProps) => {
  return (
    <Container
      classNames="flex flex-row justify-between items-center"
      width="md"
    >
      <Breadcrumbs />
      <div className="buttons flex flex-row items-center justify-center space-x-xs">
        <Button type="button" formType="post__action:breadcrumbs">
          <TrashIcon className="mr-xs h-full w-auto text-inherit" />
          Delete
        </Button>
        <Button type="button" formType="post__action:breadcrumbs">
          <PencilIcon className="mr-xs h-full w-auto text-inherit" />
          Edit this product
        </Button>
      </div>
    </Container>
  );
};

export default ProductHeader;
