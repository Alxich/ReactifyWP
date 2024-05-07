import { FC, useEffect, useState } from "react";
import { Container, PostPreview } from "../../index";

import preloadData from "@bin/preload.json";
import getOperationsRequest from "@/graphql/operations";
import { OrderEnum, OrderbyEnum, PostPreviewBlockProps } from "@/lib/types";
import { getFormatedDate } from "@/lib/functions";

interface PostsRecentProps {}

const PostsRecent: FC<PostsRecentProps> = () => {
  const [postsData, setPostsData] = useState<Array<PostPreviewBlockProps>>(
    preloadData.postsData,
  );

  const data = getOperationsRequest.GET.QueryData({
    type: "queryPostsByVars",
    variables: {
      orderBy: OrderbyEnum.DATE,
      order: OrderEnum.DESC,
      offset: 0,
      size: 4,
    },
  });

  useEffect(() => {
    const fetchedData = data?.data?.posts.nodes.map((item: any) => {
      const checkIfPresent = (newData: any, placeData: any) =>
        newData ? newData : placeData;

      const data: PostPreviewBlockProps = {
        view: "",
        slug: item.slug,
        isGridSmall: false,
        title: item.title,
        author: checkIfPresent(
          item.author.node.name,
          preloadData.placeholders.authorName,
        ),
        date: getFormatedDate(item.date),
        tags: item.tags.nodes,
        texts: item.excerpt,
        image: checkIfPresent(
          item.featuredImage?.node.sourceUrl,
          preloadData.placeholders.postImage,
        ),
        link: `/blog/post/${item.slug != undefined ? item.slug : "example_post"}`
      };

      return data;
    });

    data.loading === false && fetchedData && setPostsData(fetchedData);
  }, [data.loading]);

  const postPreviews = [
    { index: 0, view: "col" },
    { index: 1, view: "row", isGridSmall: true },
    { index: 2, view: "row", isGridSmall: true },
    { index: 3, view: "row-full", className: "col-span-2" },
  ];

  const renderedPreviews = postPreviews.map(
    ({ index, view, isGridSmall, className }) => {
      const tags = postsData[index].tags?.map(({ slug, name }: any) => {
        return {
          link: `/blog/tags/${slug}`,
          text: name,
          color: "#667085",
          background: "#F9F5FF",
        };
      });

      return (
        <PostPreview
          key={index}
          slug={postsData[index].slug}
          view={view}
          isGridSmall={isGridSmall}
          className={className}
          author={postsData[index].author}
          date={postsData[index].date}
          image={postsData[index].image}
          title={postsData[index].title}
          texts={postsData[index].texts}
          tags={tags}
          link={postsData[index].link}
        />
      );
    },
  );

  return (
    <Container
      width="md"
      classNames="posts-recents grid grid-cols-2 auto-rows-max auto-cols-max gap-3xl laptop:flex-dcol desktop:gap-lg"
    >
      {renderedPreviews.slice(0, 1)}
      <div className="post-in-col flex-dcol tablet:flex-dcol laptop:flex-drow group space-y-3xl desktop:space-y-lg laptop:items-start laptop:!space-y-0 laptop:space-x-lg tablet:!space-x-0 tablet:!space-y-lg">
        {renderedPreviews.slice(1, 3)}
      </div>
      {renderedPreviews.slice(3)}
    </Container>
  );
};

export default PostsRecent;
