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
  const [totalPosts, setTotalPosts] = useState<number>(
    preloadData.placeholders.totalPosts,
  );
  const [totalPages, setTotalPages] = useState<number>(totalPosts / 6);

  const {data: queryPostData, loading: queryPostDataLoading, refetch: queryPostDataRefetch} = getOperationsRequest.GET.queryPostsData({
    type: "queryPostsByVars",
    variables: {
      orderBy: OrderbyEnum.DATE,
      order: OrderEnum.DESC,
      offset: 4,
      size: 6
    },
  });

  useEffect(() => {
    const fetchedData = queryPostData?.posts.nodes.map((item: any) => {
      const checkIfPresent = (newData: any, placeData: any) =>
        newData ? newData : placeData;
  
      const queryPostData: PostPreviewBlockProps = {
        view: "col",
        isGridSmall: false,
        title: item.title || preloadData.placeholders.postTitle,
        author: checkIfPresent(
          item.author?.node.name || preloadData.placeholders.authorName || "Anon",
          preloadData.placeholders.authorName,
        ),
        date: getFormatedDate(item.date) || preloadData.placeholders.defaultDate,
        tags: item.tags?.nodes || preloadData.placeholders.defaultTags,
        texts: item.excerpt || preloadData.placeholders.defaultTexts,
        image: checkIfPresent(
          item.featuredImage?.node.sourceUrl || preloadData.placeholders.postImage,
          preloadData.placeholders.postImage,
        ),
      };
  
      return queryPostData;
    });
  
    // Оновлення стану postsData з отриманими новими даними
    if (queryPostDataLoading === false && fetchedData) {
      setPostsData(fetchedData);
    }
  }, [queryPostData, queryPostDataLoading]);

  const totalPostsNum = getOperationsRequest.GET.queryPostsData({
    type: "queryPostsTotal",
  });

  useEffect(() => {
    if (totalPostsNum.loading === false && totalPostsNum) {
      const { total } = totalPostsNum.data.posts.pageInfo.offsetPagination;
      setTotalPosts(total);
      setTotalPages(Math.floor(totalPosts / 6));
    }
  }, [totalPostsNum.loading]);

  useEffect(() => {
    queryPostDataRefetch({
      offset: ((currentPage - 1) * 6) + 4
    })
  }, [currentPage])

  return (
    <Container width="lg" classNames="space-y-7xl py-7xl">
      <PostsRecent />
      <SubscriberBanner />
      <PostAll postsData={postsData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages - 1}
        visiblePages={3}
        onNext={() =>
          setCurrentPage((prev) => (totalPages >= prev + 1 ? prev + 1 : prev))
        }
        onPrev={() =>
          setCurrentPage((prev) =>
           prev > 1 ? prev - 1 : prev
          )
        }
      />
    </Container>
  );
};

export default Home;
