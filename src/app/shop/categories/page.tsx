import { FC } from "react";
import { ProductPreviewBlockProps } from "@/lib/types";

import { Breadcrumbs, Container, Pagination, ProductAll } from "@/components";

import VansPreview from "../../../../public/images/vans-preview.png";

interface CategoriesPageProps {}

const CategoriesPage: FC<CategoriesPageProps> = (props) => {
  const productsData: Array<ProductPreviewBlockProps> = [
    {
      view: "col",
      isGridSmall: false,
      image: VansPreview,
      breadcrumbs: "Man clothing • Footwear • Trainers",
      price: 83.78,
      title: "Product 1",
      texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: [
        {
          type: "big",
          link: "#",
          text: "Tag 1",
          color: "#667085",
          background: "#F9F5FF",
        },
        {
          type: "normal",
          link: "#",
          text: "Tag 2",
          color: "#363F72",
          background: "#F8F9FC",
        },
      ],
    },
    {
      view: "col",
      isGridSmall: false,
      image: VansPreview,
      breadcrumbs: "Man clothing • Footwear • Trainers",
      price: 83.78,
      title: "Product 2",
      texts:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tags: [
        {
          type: "big",
          link: "#",
          text: "Tag 3",
          color: "#026AA2",
          background: "#F0F9FF",
        },
        {
          type: "normal",
          link: "#",
          text: "Tag 4",
          color: "#3538CD",
          background: "#EEF4FF",
        },
      ],
    },
    {
      view: "col",
      isGridSmall: false,
      image: VansPreview,
      breadcrumbs: "Man clothing • Footwear • Trainers",
      price: 83.78,
      title: "Product 3",
      texts:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: [
        {
          type: "big",
          link: "#",
          text: "Tag 5",
          color: "#C4320A",
          background: "#FFF6ED",
        },
        {
          type: "normal",
          link: "#",
          text: "Tag 6",
          color: "#027A48",
          background: "#ECFDF3",
        },
      ],
    },
  ];

  return (
    <Container
      classNames="flex-dcol flex-tcenter post wrapper-conspace space-y-7xl"
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
