import { FC } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import { Breadcrumbs, Button, Container } from "@/components";

interface ProductHeaderProps {}

const ProductHeader: FC<ProductHeaderProps> = ({}: ProductHeaderProps) => {
  return (
    <Container
      classNames="flex-drow flex-cspace tablet:flex-dcol tablet:items-start tablet:space-y-lg"
      width="md"
    >
      <Breadcrumbs />
      <div className="buttons flex-drow flex-ccenter space-x-xs">
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
