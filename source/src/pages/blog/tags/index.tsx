import { FC, useEffect, useState } from "react";

import getOperationsRequest from "@/graphql/operations";
import preloadData from "@bin/preload.json";
import { TagLinkProps } from "@/lib/types";

import { Breadcrumbs, Container, TagLink } from "@/components";

interface TagPageProps {}

const TagsPageAll: FC<TagPageProps> = (props) => {
  const [tags, setTags] = useState<Array<TagLinkProps>>(preloadData.tagsData);

  const { data: queryTagsData, loading: queryTagsDataLoading } =
    getOperationsRequest.GET.QueryData({
      type: "queryTags",
      variables: {},
    });

  useEffect(() => {
    const fetchedData = queryTagsData?.tags.nodes.map((item: any) => {
      const { background, textColor: color } = item.tagACFFields;
      const queryTagsData: TagLinkProps = {
        id: item.id,
        slug: item.slug,
        background,
        color,
        link: `/blog/tag/${item.slug}`,
        text: item.name,
        type: "big",
      };

      return queryTagsData;
    });

    // CATEGORIESDATA's status update with new data received
    if (queryTagsDataLoading === false && fetchedData) {
      setTags(fetchedData);
    }
  }, [queryTagsData, queryTagsDataLoading]);

  return (
    <Container
      classNames="flex-dcol flex-tcenter wrapper-conspace space-y-7xl"
      width="md"
    >
      <Breadcrumbs />
      <div className="flex-tspace f2xl-semibold flex-drow w-full leading-normal">
        <h4 className="text-inherit">All available tags</h4>
      </div>
      {tags && (
        <div className="tags flex-drow gap-tag w-full flex-wrap">
          {tags.map(({ id, slug, background, color, link, text }, key) => (
            <TagLink
              type="big"
              id={id}
              slug={slug}
              background={background}
              color={color}
              link={link}
              text={text}
              key={`items_${key}`}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default TagsPageAll;
