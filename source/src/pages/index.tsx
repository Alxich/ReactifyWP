import { FC, useEffect, useState } from "react";
import {
  Pagination,
  Container,
  PostAll,
  PostsRecent,
  SubscriberBanner,
} from "@/components";
import { OrderEnum, OrderbyEnum, PostPreviewBlockProps } from "@/lib/types";

import preloadData from "@bin/preload.json";
import getOperationsRequest from "@/graphql/operations";
import { getFormatedDate } from "@/lib/functions";

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  const [postsData, setPostsData] = useState<Array<PostPreviewBlockProps>>(
    preloadData.postsData,
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(
    preloadData.placeholders.totalPosts / 6,
  );
  const initialOffset: number = 4; // No need for moment

  const {
    data: queryPostsData,
    loading: queryPostsDataLoading,
    refetch: queryPostsDataRefetch,
  } = getOperationsRequest.GET.queryPostsData({
    type: "queryPostsByVars",
    variables: {
      orderBy: OrderbyEnum.DATE,
      order: OrderEnum.DESC,
      offset: initialOffset,
      size: 6,
    },
  });

  useEffect(() => {
    if (queryPostsData && queryPostsDataLoading === false) {
      const { nodes, pageInfo } = queryPostsData.posts;

      const { total } = pageInfo.offsetPagination;
      setTotalPages(Math.floor(total / 6));

      const fetchedData = nodes.map((item: any) => {
        const checkIfPresent = (newData: any, placeData: any) =>
          newData ? newData : placeData;

        const queryPostsData: PostPreviewBlockProps = {
          view: "col",
          isGridSmall: false,
          title: item.title || preloadData.placeholders.postTitle,
          author: checkIfPresent(
            item.author?.node.name ||
              preloadData.placeholders.authorName ||
              "Anon",
            preloadData.placeholders.authorName,
          ),
          date:
            getFormatedDate(item.date) || preloadData.placeholders.defaultDate,
          tags: item.tags?.nodes || preloadData.placeholders.defaultTags,
          texts: item.excerpt || preloadData.placeholders.defaultTexts,
          image: checkIfPresent(
            item.featuredImage?.node.sourceUrl ||
              preloadData.placeholders.postImage,
            preloadData.placeholders.postImage,
          ),
        };

        return queryPostsData;
      });

      // POSTSDATA's status update with new data received
      if (fetchedData) {
        setPostsData(fetchedData);
      }
    }
  }, [queryPostsData, queryPostsDataLoading]);

  useEffect(() => {
    queryPostsDataRefetch({
      offset: (currentPage - 1) * 6 + initialOffset,
    });
  }, [currentPage]);

  return (
    <Container width="lg" classNames="space-y-7xl py-7xl">
      <PostsRecent />
      <SubscriberBanner />
      <PostAll postsData={postsData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        visiblePages={3}
        onNext={() =>
          setCurrentPage((prev) => (totalPages >= prev + 1 ? prev + 1 : prev))
        }
        onPrev={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
      />
    </Container>
  );
};

export default Home;
