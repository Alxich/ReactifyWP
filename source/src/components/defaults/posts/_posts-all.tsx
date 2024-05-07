import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Container, Pagination, PostPreview } from "../../index";

import {
  OrderEnum,
  OrderbyEnum,
  PostPreviewBlockProps,
  IDTypeEnum,
  type TagLinkProps,
  type CategoryPreviewBlockProps,
} from "@/lib/types";

import preloadData from "@bin/preload.json";
import getOperationsRequest from "@/graphql/operations";
import { getFormatedDate, sortPostTags } from "@/lib/functions";

interface PostAllProps {
  blockView: "Post" | "Category";
  queryOption: "Cateogries" | "Tags" | "Posts";
  queryType: "All" | "Slug" | "Vars";
  vars?: {
    initialOffset?: number;
  };
}

const PostAll: FC<PostAllProps> = ({
  blockView,
  queryOption,
  queryType,
  vars,
}: PostAllProps) => {
  const Router = useRouter();
  const { slug: pageSlug } = Router.query;

  const [pageData, setPageData] = useState<
    TagLinkProps | CategoryPreviewBlockProps
  >(preloadData.tagsData[0]);
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

  const initialOffset = vars?.initialOffset || 0; // No in use for now (Can change for your needs)

  const getQueryType = () => {
    if (queryType === "Slug") {
      switch (queryOption) {
        case "Cateogries":
          return "queryCategory";

        case "Tags":
          return "queryTag";

        default:
          return "queryPosts";
      }
    } else if (queryType === "Vars") {
      return "queryPostsByVars";
    } else {
      return "queryPosts";
    }
  };

  const {
    data: queryContentData,
    loading: queryContentDataLoading,
    refetch: queryContentDataRefetch,
  } = getOperationsRequest.GET.QueryData({
    type: getQueryType(),
    variables: {
      ...(queryType === "Slug" && {
        id: pageSlug ? pageSlug.toString() : "",
        idType: IDTypeEnum.SLUG,
      }),
      orderBy: OrderbyEnum.DATE,
      order: OrderEnum.DESC,
      ...(queryType === "Vars" ? { size: 6 } : { first: 6 }),
      offset: initialOffset,
    },
  });

  useEffect(() => {
    if (!queryContentData || queryContentDataLoading) return;

    const fetchData = () => {
      const { nodes, pageInfo } =
        queryType !== "Vars"
          ? getQueryType() === "queryTag"
            ? queryContentData.tag.posts
            : queryContentData.category.posts
          : queryContentData.posts;
      const { startCursor, endCursor, offsetPagination } = pageInfo;
      const { total } = offsetPagination;
      setTotalPages(Math.floor(total / 6) + 1);

      const fetchedPostData = nodes.map((item: any) => {
        const tags = sortPostTags(item.tags?.nodes);
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
          tags: tags || preloadData.placeholders.defaultTags,
          texts: item.excerpt || preloadData.placeholders.defaultTexts,
          image: checkIfPresent(
            item.featuredImage?.node.sourceUrl ||
              preloadData.placeholders.postImage,
            preloadData.placeholders.postImage,
          ),
          link: `/blog/post/${item.slug || "example_post"}`,
        };
        return queryPostsData;
      });

      if (fetchedPostData) {
        setEndCursor(endCursor);
        setStartCursor(startCursor);
        setPostsData(fetchedPostData);
      }
    };

    if (queryType !== "Vars") {
      if (getQueryType() === "queryTag" && queryContentData?.tag) {
        const { id, slug, background, color, name, description } =
          queryContentData?.tag;
        fetchData();
        setPageData({
          id,
          slug,
          background,
          color,
          link: `/blog/tag/${slug}`,
          name,
          description,
          type: "big",
        });
      } else if (
        getQueryType() === "queryCategory" &&
        queryContentData?.category
      ) {
        const {
          id,
          description,
          name,
          slug,
          customFields: thumbnail,
        } = queryContentData?.category;
        fetchData();
        setPageData({
          id,
          slug,
          image:
            thumbnail?.node?.sourceUrl.thumbnail ||
            preloadData.placeholders.postImage,
          link: `/blog/tag/${slug}`,
          title: name,
          texts: description,
          view: "col",
          isGridSmall: false,
        });
      }
    } else {
      fetchData();
    }
  }, [queryContentData, queryContentDataLoading]);

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

  const refetchData = (direction: "after" | "before") => {
    if (direction === "after" && endCursor) {
      queryContentDataRefetch({
        after: endCursor,
        before: null,
        first: 6,
        last: null,
      });
    } else if (direction === "before" && startCursor) {
      queryContentDataRefetch({
        after: null,
        before: startCursor,
        first: null,
        last: 6,
      });
    }
  };

  useEffect(() => {
    queryType === "Vars" && queryOption === "Posts"
      ? queryContentDataRefetch({
          offset: (currentPage - 1) * 6 + initialOffset,
        })
      : currentPage && refetchData(direction);
  }, [currentPage]);

  return (
    <>
      {/* <div className="flex-tspace f2xl-semibold flex-drow w-full leading-normal">
        <h4 className="text-inherit">
          All {pageData ? pageData.name : "example"} tag posts
        </h4>
      </div> */}
      {/* <div className="flex-drow flex-tspace f2xl-semibold w-full leading-normal">
        <h4 className="text-inherit">All {pageData.title} posts</h4>
      </div> */}
      <Container
        width="md"
        classNames="grid grid-cols-3 auto-rows-max auto-cols-max gap-3xl laptop:grid-cols-2 tablet:!grid-cols-1 tablet:gap-lg"
      >
        {postsData &&
          postsData.map(
            (
              { view, author, date, image, title, texts, tags, link, slug },
              key,
            ) => (
              <PostPreview
                slug={slug}
                view={view}
                author={author}
                date={date}
                image={image}
                title={title}
                texts={texts}
                tags={tags}
                link={link}
                type="regular"
                key={`post_${title}__${key}`}
              />
            ),
          )}
        {blockView === "Category" &&
          postsData.map(
            (
              { view, author, date, image, title, texts, tags, link, slug },
              key,
            ) => (
              <PostPreview
                slug={slug}
                view={view}
                author={author}
                date={date}
                image={image}
                title={title}
                texts={texts}
                tags={tags}
                link={link}
                type="regular"
                key={`category_${title}__${key}`}
              />
            ),
          )}
      </Container>
      {postsData.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          visiblePages={3}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
};

export default PostAll;
