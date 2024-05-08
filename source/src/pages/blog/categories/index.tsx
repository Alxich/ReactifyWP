import { FC } from "react";

import { Breadcrumbs, Container, Pagination, PostAll } from "@/components";

interface CategoriesPageProps {}

const CategoriesPage: FC<CategoriesPageProps> = (props) => {
  return (
    <Container
      classNames="flex-dcol flex-tcenter wrapper-conspace space-y-7xl"
      width="md"
    >
      <Breadcrumbs />
      <div className="flex-tspace f2xl-semibold flex-drow w-full leading-normal">
        <h4 className="text-inherit">Explore all categories</h4>
      </div>
      <PostAll blockView="Category" queryOption="Categories" queryType="All" />
    </Container>
  );
};

export default CategoriesPage;
