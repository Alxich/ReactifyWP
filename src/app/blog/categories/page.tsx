import { FC } from "react";
import { PostPreviewBlockProps } from "@/lib/types";
import { Breadcrumbs, Container, Pagination, PostAll } from "@/components";

// Images
import PostImage1 from "../../../../public/images/Image.png";
import PostImage2 from "../../../../public/images/Image-1.png";
import PostImage3 from "../../../../public/images/Image-2.png";
import PostImage4 from "../../../../public/images/Image-3.png";
import PostImage5 from "../../../../public/images/Image-4.png";
import PostImage6 from "../../../../public/images/Image-5.png";

interface CategoriesPageProps {}

const CategoriesPage: FC<CategoriesPageProps> = (props) => {
  const postsData: Array<PostPreviewBlockProps> = [
    {
      view: "col",
      image: PostImage1,
      title: "Bill Walsh leadership lessons",
      texts:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    },
    {
      view: "col",
      image: PostImage2,
      title: "PM mental models",
      texts:
        "Mental models are simple expressions of complex processes or relationships.",
    },
    {
      view: "col",
      image: PostImage3,
      title: "What is Wireframing?",
      texts:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    },
    {
      view: "col",
      image: PostImage4,
      title: "How collaboration makes us better designers",
      texts:
        "Collaboration can make our teams stronger, and our individual designs better.",
    },
    {
      view: "col",
      image: PostImage5,
      title: "Our top 10 Javascript frameworks to use",
      texts:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
    },
    {
      view: "col",
      image: PostImage6,
      title: "Podcast: Creating a better CX Community",
      texts:
        "Starting a community doesn’t need to be complicated, but how do you get started?",
    },
  ];

  return (
    <Container
      classNames="flex-dcol flex-tcenter wrapper-conspace space-y-7xl"
      width="md"
    >
      <Breadcrumbs />
      <div className="flex-tspace f2xl-semibold flex-drow w-full leading-normal">
        <h4 className="text-inherit">Explore all categories</h4>
      </div>
      <PostAll postsData={postsData} />
      <Pagination currentPage={1} totalPages={10} visiblePages={3} />
    </Container>
  );
};

export default CategoriesPage;
