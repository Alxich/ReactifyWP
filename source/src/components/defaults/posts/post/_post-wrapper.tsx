import { FC, useContext, useEffect, useState } from "react";
import Link from "next/link";

import { PageContext } from "@/pages/_app";

import { Container, PostPreview, Comments } from "@/components";
import { OrderEnum, OrderbyEnum, PostPreviewBlockProps, type TagLinkProps } from "@/lib/types";

import preloadData from "@bin/preload.json";

import PostContentBlock from "./content-parts/_content";
import PostActions from "./content-parts/_actions";
import getOperationsRequest from "@/graphql/operations";

import { getFormatedDate } from "@/lib/functions";

interface PostWrapperProps {
  postData: any;
}

const PostWrpapper: FC<PostWrapperProps> = ({
  postData,
}: PostWrapperProps) => {
  const {
    status,
    title,
    content,
    featuredImage,
    commentStatus,
    author,
    date,
    modified,
    comments
  } = postData;
  
  const { setPageTitle } = useContext(PageContext);

  useEffect(() => {
    title && setPageTitle(title);
  }, [title]);

  const postContent = {
    author,
    date: modified,
    content,
    featuredImage,
  };

  const [postsData, setPostsData] = useState<Array<PostPreviewBlockProps>>(
    preloadData.postsData,
  );
  const initialOffset: number = 0; // No need for moment

  const {
    data: queryPostsData,
    loading: queryPostsDataLoading,
    refetch: queryPostsDataRefetch,
  } = getOperationsRequest.GET.QueryData({
    type: "queryPostsByVars",
    variables: {
      orderBy: OrderbyEnum.DATE,
      order: OrderEnum.DESC,
      offset: initialOffset,
      size: 4,
    },
  });

  useEffect(() => {
    if (queryPostsData && queryPostsDataLoading === false) {
      const { nodes } = queryPostsData.posts;

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
          link: `/blog/post/${item.slug != undefined ? item.slug : "example_post"}`
        };

        return queryPostsData;
      });

      // POSTSDATA's status update with new data received
      if (fetchedData) {
        setPostsData(fetchedData);
      }
    }
  }, [queryPostsData, queryPostsDataLoading]);

  return (
    <Container
      width="md"
      classNames="space-x-3xl flex-drow pt-7xl laptop:space-x-lg small-laptop:flex-dcol small-laptop:!space-x-0 small-laptop:space-y-lg"
    >
      {status === "publish" ? (
        <div className="content w-71/100 space-y-xl small-laptop:w-full">
          <PostContentBlock postContent={postContent} />
          <PostActions />
          {commentStatus === "open" && <Comments commentsData={comments} />}
        </div>
      ) : (
        <div className="content w-71/100 space-y-xl small-laptop:w-full">
          <div className="title fsemibold-center text-[30vh] leading-none child:text-inherit tablet:text-[20vh]">
            <h1>500</h1>
          </div>
          <p className="w-full text-center">
            Content not avaible. Please return to{" "}
            <Link
              href="/"
              className="use-transition font-semibold hover:text-highlight"
            >
              homepage
            </Link>
          </p>
        </div>
      )}

      <div className="sidebar sticky top-xl h-fit w-29/100 space-y-xl small-laptop:w-full small-laptop:space-y-lg">
        <div className="flex-tspace f2xl-semibold flex-drow w-full leading-normal">
          <h4 className="text-inherit">Recent blog posts</h4>
        </div>
        {postsData.map(
          ({ view, author, date, image, title, texts, tags, link }, key) => (
            <PostPreview
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
      </div>
    </Container>
  );
};

export default PostWrpapper;
