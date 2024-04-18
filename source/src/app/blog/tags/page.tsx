import { FC } from "react";

import { TagLinkProps } from "@/lib/types";
import {
  Breadcrumbs,
  Container,
  TagLink,
} from "@/components";

import preloadData from "@bin/preload.json";

interface TagPageProps {}

const TagsPageAll: FC<TagPageProps> = (props) => {
  const tags: TagLinkProps[] = preloadData.tagsData;

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
          {tags.map(({ background, color, link, text }, key) => (
            <TagLink
              type="big"
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
