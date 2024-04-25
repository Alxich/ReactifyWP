import { FC, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PageContext } from "@/pages/_app";

import {
  OrderEnum,
  OrderbyEnum,
  PostPreviewBlockProps,
  type TagLinkProps,
} from "@/lib/types";

import preloadData from "@bin/preload.json";
import getOperationsRequest from "@/graphql/operations";
import { getFormatedDate } from "@/lib/functions";

import { Breadcrumbs, Container, Pagination, PostAll } from "@/components";

interface TagPageProps {}

const TagsPage: FC<TagPageProps> = (props) => {
  const [pageId, setPageId] = useState<string | undefined>();

  const Router = useRouter();
  const { slug } = Router.query;
  const { pageId: contextPageId, pageSlug } = useContext(PageContext);
  pageSlug && localStorage.setItem("pageSlug", pageSlug);
  contextPageId && localStorage.setItem("pageId", contextPageId);

  if (typeof window !== "undefined") {
    const localPageSlug = localStorage.getItem("pageSlug") || "";
    const localPageId = localStorage.getItem("pageId") || "";

    useEffect(() => {
      if (slug != localPageSlug) {
        localPageId
          ? setPageId(localPageId)
          : console.error("There is no provided ID!");
      } else {
        setPageId(contextPageId);
      }
    }, [localPageSlug, slug]);
  }

  useEffect(() => console.log(pageId), [pageId]);

  const [tag, setTag] = useState<TagLinkProps>(preloadData.tagsData[0]);
  const [postsData, setPostsData] = useState<Array<PostPreviewBlockProps>>(
    preloadData.postsData,
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(
    preloadData.placeholders.totalPosts / 6,
  );

  const {
    data: queryPostsData,
    loading: queryPostsDataLoading,
    refetch: queryPostsDataRefetch,
  } = getOperationsRequest.GET.queryPostsData({
    type: "queryPostsByVars",
    variables: {
      orderBy: OrderbyEnum.DATE,
      order: OrderEnum.DESC,
      tag: slug as string,
      offset: 0,
      size: 6,
    },
  });

  useEffect(() => {
    if (queryPostsData && queryPostsDataLoading === false) {
      const { nodes, pageInfo } = queryPostsData.posts;

      const { total } = pageInfo.offsetPagination;
      setTotalPages(Math.floor(total / 6) + 1);

      const fetchedData = nodes.map((item: any) => {
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
      offset: (currentPage - 1) * 6,
    });
  }, [currentPage]);

  const { data: queryTagData, loading: queryTagDataLoading } =
    getOperationsRequest.GET.queryTagsData({
      type: "queryTag",
      variables: {
        id: pageId,
      },
    });

  useEffect(() => {
    if (queryTagData) {
      const { id, slug, background, color, name, description } =
        queryTagData?.tag;
      const fetchedData: TagLinkProps = {
        id,
        slug,
        background,
        color,
        link: `/blog/tag/${slug}`,
        name: name,
        description,
        type: "big",
      };

      // CATEGORIESDATA's status update with new data received
      if (queryTagDataLoading === false && fetchedData) {
        setTag(fetchedData);
      }
    }
  }, [queryTagData, queryTagDataLoading]);

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
          onNext={() =>
            setCurrentPage((prev) => (totalPages >= prev + 1 ? prev + 1 : prev))
          }
          onPrev={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        />
      )}
    </Container>
  );
};

export default TagsPage;
