import { FC } from "react";
import { Container, PostPreview } from "../../index";
import PostRecentImage1 from "../../../../public/images/post-recent-1.png";
import PostRecentImage2 from "../../../../public/images/post-recent-2.png";
import PostRecentImage3 from "../../../../public/images/post-recent-3.png";
import PostRecentImage4 from "../../../../public/images/post-recent-4.png";

interface PostsRecentProps {}

const PostsRecent: FC<PostsRecentProps> = () => {
  return (
    <Container
      width="md"
      classNames="posts-recents grid grid-cols-2 auto-rows-max auto-cols-max gap-3xl"
    >
      <PostPreview
        view={"col"}
        author="Olivia Rhye"
        date="1 Jan 2023"
        image={PostRecentImage1}
        title={"UX review presentations"}
        texts={
          "How do you create compelling presentations that wow your colleagues and impress your managers?"
        }
        tags={[
          {
            background: "#F9F5FF",
            color: "gray",
            link: "#",
            text: "Design",
          },
          {
            background: "#EEF4FF",
            color: "#3538CD",
            link: "#",
            text: "Research",
          },
          {
            background: "#FDF2FA",
            color: "#C11574",
            link: "#",
            text: "Presentation",
          },
        ]}
      />
      <div className="flex flex-col space-y-3xl post-in-col">
        <PostPreview
          view={"row"}
          isGridSmall={true}
          author="Phoenix Baker"
          date="1 Jan 2023"
          image={PostRecentImage2}
          title={"Migrating to Linear 101"}
          texts={
            "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
          }
          tags={[
            {
              background: "#F0F9FF",
              color: "#026AA2",
              link: "#",
              text: "Design",
            },
            {
              background: "#FDF2FA",
              color: "#C11574",
              link: "#",
              text: "Research",
            },
          ]}
        />
        <PostPreview
          view={"row"}
          isGridSmall={true}
          author="Lana Steiner"
          date="1 Jan 2023"
          image={PostRecentImage3}
          title={"Building your API Stack"}
          texts={
            "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
          }
          tags={[
            {
              background: "#ECFDF3",
              color: "#027A48",
              link: "#",
              text: "Design",
            },
            {
              background: "#FDF2FA",
              color: "#C11574",
              link: "#",
              text: "Research",
            },
          ]}
        />
      </div>
      <PostPreview
        className="col-span-2"
        view={"row-full"}
        author="Olivia Rhye"
        date="1 Jan 2023"
        image={PostRecentImage4}
        title={"Grid system for better Design User Interface"}
        texts={
          "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate."
        }
        tags={[
          {
            background: "#F9F5FF",
            color: "gray",
            link: "#",
            text: "Design",
          },
          {
            background: "#FDF2FA",
            color: "#C11574",
            link: "#",
            text: "Research",
          },
        ]}
      />
    </Container>
  );
};

export default PostsRecent;
