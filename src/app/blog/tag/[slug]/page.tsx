import { FC } from "react";
import TagsPage from "../../tags/[slug]/page";

interface ITagPageProps {}

const TagPage: FC<ITagPageProps> = (props) => {
  return <TagsPage />;
};

export default TagPage;
