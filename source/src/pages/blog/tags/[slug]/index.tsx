import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  OrderEnum,
  OrderbyEnum,
  PostPreviewBlockProps,
  IDTypeEnum,
  type TagLinkProps,
} from "@/lib/types";

import preloadData from "@bin/preload.json";
import getOperationsRequest from "@/graphql/operations";
import { getFormatedDate } from "@/lib/functions";

import { Breadcrumbs, Container, Pagination, PostAll } from "@/components";

interface TagPageProps {}

const TagsPage: FC<TagPageProps> = (props) => {
  const Router = useRouter();
  const { slug: pageSlug } = Router.query;

  const [tag, setTag] = useState<TagLinkProps>(preloadData.tagsData[0]);
  const [postsData, setPostsData] = useState<Array<PostPreviewBlockProps>>(
    preloadData.postsData,
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(
    preloadData.placeholders.totalPosts / 6,
  );
  const [endCursor, setEndCursor] = useState<string | undefined>();
  const [startCursor, setStartCursor] = useState<string | undefined>();
  const [direction, setDirection] = useState<"after" | "before">("after");

  const initialOffset = 0; // No in use for now (Can change for your needs)

  const {
    data: queryTagData,
    loading: queryTagDataLoading,
    refetch: queryTagDataRefetch,
  } = getOperationsRequest.GET.queryTagsData({
    type: "queryTag",
    variables: {
      id: pageSlug ? pageSlug.toString() : "",
      idType: IDTypeEnum.SLUG,
      orderBy: OrderbyEnum.DATE,
      order: OrderEnum.DESC,
      first: 6,
      offset: initialOffset,
    },
  });

  useEffect(() => {
    if (queryTagData && queryTagData.tag && queryTagDataLoading === false) {
      const { id, slug, background, color, name, description, posts } =
        queryTagData.tag;

      const { nodes, pageInfo } = posts;
      const {
        startCursor: fetchStartCursor,
        endCursor: fetchEndCursor,
        offsetPagination,
      } = pageInfo;
      const { total } = offsetPagination;

      setTotalPages(Math.floor(total / 6) + 1);

      const fetchedPostData = nodes.map((item: any) => {
        const tags: TagLinkProps[] = item.tags?.nodes.map((item: any) => {
          const { background, textColor: color } = item.tagACFFields;

          const queryTagsData: TagLinkProps = {
            id: item.id,
            slug: item.slug,
            background,
            color,
            link: `/blog/tag/${item.slug}`,
            text: item.name,
            type: "normal",
          };

          return queryTagsData;
        });

        const checkIfPresent = (newData: any, placeData: any) =>
          newData ? newData : placeData;

        const queryPostsData: PostPreviewBlockProps = {
          slug: item.slug,
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
          tags: tags || preloadData.placeholders.defaultTags,
          texts: item.excerpt || preloadData.placeholders.defaultTexts,
          image: checkIfPresent(
            item.featuredImage?.node.sourceUrl ||
              preloadData.placeholders.postImage,
            preloadData.placeholders.postImage,
          ),
          link: `/blog/post/${item.slug != undefined ? item.slug : "example_post"}`,
        };

        return queryPostsData;
      });

      // POSTSDATA's status update with new data received
      if (fetchedPostData) {
        setEndCursor(fetchEndCursor);
        setStartCursor(fetchStartCursor);
        setPostsData(fetchedPostData);
      }

      const fetchedTagData: TagLinkProps = {
        id,
        slug,
        background,
        color,
        link: `/blog/tag/${slug}`,
        name: name,
        description,
        type: "big",
      };

      // TAGSDATA's status update with new data received
      if (fetchedTagData) {
        setTag(fetchedTagData);
      }
    }
  }, [queryTagData, queryTagDataLoading]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const handleNext = () => {
    setCurrentPage((prev) => (totalPages >= prev + 1 ? prev + 1 : prev));
    setDirection("after");
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    setDirection("before");
  };

  const refetchTagData = (direction: "after" | "before") => {
    if (direction === "after" && endCursor) {
      queryTagDataRefetch({
        after: endCursor,
        before: null,
        first: 6,
        last: null,
      });
    } else if (direction === "before" && startCursor) {
      queryTagDataRefetch({
        after: null,
        before: startCursor,
        first: null,
        last: 6,
      });
    }
  };

  useEffect(() => {
    currentPage && refetchTagData(direction);
  }, [currentPage]);

  return (
    <Container
      classNames="flex-dcol flex-tcenter wrapper-conspace space-y-7xl"
      width="md"
    >
      <Breadcrumbs />
      <div className="flex-tspace f2xl-semibold flex-drow w-full leading-normal">
        <h4 className="text-inherit">
          All {tag ? tag.name : "example"} tag posts
        </h4>
      </div>
      <PostAll postsData={postsData} />
      {postsData.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          visiblePages={3}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </Container>
  );
};

export default TagsPage;
