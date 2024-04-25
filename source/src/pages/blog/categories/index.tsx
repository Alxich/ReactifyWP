import { FC, useEffect, useState } from "react";
import { CategoryPreviewBlockProps } from "@/lib/types";

import { Breadcrumbs, Container, Pagination, PostAll } from "@/components";

import preloadData from "@bin/preload.json";
import getOperationsRequest from "@/graphql/operations";

interface CategoriesPageProps {}

const CategoriesPage: FC<CategoriesPageProps> = (props) => {
  const [CategoriesData, setPostsData] = useState<
    Array<CategoryPreviewBlockProps>
  >(preloadData.productsData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(preloadData.placeholders.totalPosts / 6);
  const [endCursor, setEndCursor] = useState<string | undefined>();
  const [startCursor, setStartCursor] = useState<string | undefined>();
  const [direction, setDirection] = useState<"after" | "before">("after");

  const {
    data: queryCategoryData,
    loading: queryCategoryDataLoading,
    refetch: queryCategoryDataRefetch,
  } = getOperationsRequest.GET.queryCategoriesData({
    type: "queryCategoriesByVars",
    variables: {
      first: 6,
      hideEmpty: false,
    },
  });

  useEffect(() => {
    const fetchEndCursor = queryCategoryData?.categories.pageInfo.endCursor;
    const fetchStartCursor = queryCategoryData?.categories.pageInfo.startCursor;
    const fetchedData = queryCategoryData?.categories.nodes.map((item: any) => {
      const checkIfPresent = (newData: any, placeData: any) =>
        newData ? newData : placeData;

      const queryCategoryData: CategoryPreviewBlockProps = {
        view: "col",
        isGridSmall: false,
        title: item.name || preloadData.placeholders.postTitle,
        texts: item.description || preloadData.placeholders.defaultTexts,
        image: checkIfPresent(
          item.customFields?.thumbnail?.node.sourceUrl ||
            preloadData.placeholders.postImage,
          preloadData.placeholders.postImage,
        ),
      };

      return queryCategoryData;
    });

    // CATEGORIESDATA's status update with new data received
    if (queryCategoryDataLoading === false && fetchedData) {
      setEndCursor(fetchEndCursor);
      setStartCursor(fetchStartCursor);
      setPostsData(fetchedData);
    }
  }, [queryCategoryData, queryCategoryDataLoading]);

  const { data: totalCategoriesNum, loading: totalCategoriesLoading } =
    getOperationsRequest.GET.queryCategoriesData({
      type: "queryCategoriesTotal",
    });

  useEffect(() => {
    if (totalCategoriesLoading === false && totalCategoriesNum) {
      const total = totalCategoriesNum.categories.nodes.length;
      setTotalPages(Math.floor(total / 6) + 1);
    }
  }, [totalCategoriesLoading]);

  const refetchCategoryData = (direction: "after" | "before") => {
    if (direction === "after" && endCursor) {
      queryCategoryDataRefetch({
        after: endCursor,
        before: null,
        first: 6,
        last: null,
      });
    } else if (direction === "before" && startCursor) {
      queryCategoryDataRefetch({
        after: null,
        before: startCursor,
        first: null,
        last: 6,
      });
    }
  }

  const handleNext = () => {
    setCurrentPage((prev) => (totalPages >= prev + 1 ? prev + 1 : prev));
    setDirection("after");
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    setDirection("before");
  };

  useEffect(() => {
    currentPage &&
      refetchCategoryData(direction);
  }, [currentPage]);

  return (
    <Container
      classNames="flex-dcol flex-tcenter wrapper-conspace space-y-7xl"
      width="md"
    >
      <Breadcrumbs />
      <div className="flex-tspace f2xl-semibold flex-drow w-full leading-normal">
        <h4 className="text-inherit">Explore all categories</h4>
      </div>
      <PostAll CategoriesData={CategoriesData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        visiblePages={3}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </Container>
  );
};

export default CategoriesPage;
