import { FC } from "react";
import TagsPage from "../../tags/[slug]/page";

interface TagPageProps {}

const TagPage: FC<TagPageProps> = (props) => {
  return <TagsPage />;
};

export default TagPage;
