"use client";

import { FC, useState } from "react";

import {
  Container,
  PostWrpapper,
  PostHeader,
  Banner,
  Button,
} from "@/components";
import { PostPreviewBlockProps } from "@/lib/types";

// Images
import PostImage1 from "../../../../../public/images/Image.png";
import PostImage2 from "../../../../../public/images/Image-1.png";
import PostImage3 from "../../../../../public/images/Image-2.png";
import PostImage4 from "../../../../../public/images/Image-3.png";
import PostImage5 from "../../../../../public/images/Image-4.png";
import PostImage6 from "../../../../../public/images/Image-5.png";

interface PostPageProps {}

const PostPage: FC<PostPageProps> = ({}: PostPageProps) => {
  const [BannerClosed, BannerCloseFunc] = useState<boolean>(false);

  const postsData: Array<PostPreviewBlockProps> = [
    {
      view: "col",
      image: PostImage1,
      author: "Alec Whitten",
      date: "1 Jan 2023",
      title: "Bill Walsh leadership lessons",
      texts:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: [
        {
          link: "#",
          text: "Leadership",
          color: "#667085",
          background: "#F9F5FF",
        },
        {
          link: "#",
          text: "Management",
          color: "#363F72",
          background: "#F8F9FC",
        },
      ],
    },
    {
      view: "col",
      image: PostImage2,
      author: "Demi WIlkinson",
      date: "1 Jan 2023",
      title: "PM mental models",
      texts:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: [
        {
          link: "#",
          text: "Product",
          color: "#026AA2",
          background: "#F0F9FF",
        },
        {
          link: "#",
          text: "Research",
          color: "#3538CD",
          background: "#EEF4FF",
        },
        {
          link: "#",
          text: "Frameworks",
          color: "#C4320A",
          background: "#FFF6ED",
        },
      ],
    },
    {
      view: "col",
      image: PostImage3,
      author: "Candice Wu",
      date: "1 Jan 2023",
      title: "What is Wireframing?",
      texts:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: [
        {
          link: "#",
          text: "Design",
          color: "#667085",
          background: "#F9F5FF",
        },
        {
          link: "#",
          text: "Research",
          color: "#3538CD",
          background: "#EEF4FF",
        },
      ],
    },
    {
      view: "col",
      image: PostImage4,
      author: "Natali Craig ",
      date: "1 Jan 2023",
      title: "How collaboration makes us better designers",
      texts:
        "Collaboration can make our teams stronger, and our individual designs better.",
      tags: [
        {
          link: "#",
          text: "Design",
          color: "#667085",
          background: "#F9F5FF",
        },
        {
          link: "#",
          text: "Research",
          color: "#3538CD",
          background: "#EEF4FF",
        },
      ],
    },
    {
      view: "col",
      image: PostImage5,
      author: "Drew Cano",
      date: "1 Jan 2023",
      title: "Our top 10 Javascript frameworks to use",
      texts:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: [
        {
          link: "#",
          text: "Software Development",
          color: "#027A48",
          background: "#ECFDF3",
        },
        {
          link: "#",
          text: "Tools",
          color: "#C11574",
          background: "#FDF2FA",
        },
        {
          link: "#",
          text: "SaaS",
          color: "#C01048",
          background: "#FFF1F3",
        },
      ],
    },
    {
      view: "col",
      image: PostImage6,
      author: "Orlando Diggs",
      date: "1 Jan 2023",
      title: "Podcast: Creating a better CX Community",
      texts:
        "Starting a community doesn’t need to be complicated, but how do you get started?",
      tags: [
        {
          link: "#",
          text: "Podcasts",
          color: "#667085",
          background: "#F9F5FF",
        },
        {
          link: "#",
          text: "Customer Success",
          color: "#363F72",
          background: "#F8F9FC",
        },
      ],
    },
  ];

  return (
    <>
      <Container
        classNames="flex-dcol flex-tcenter wrapper-conspace"
        width="md"
      >
        <PostHeader />
        <PostWrpapper postsData={postsData} />
      </Container>
      {
        <Banner
          type="reg"
          title="Creating a new post"
          isClosed={BannerClosed}
          closeTheBanner={BannerCloseFunc}
          className="space-y-7xl"
          additionalChildren={
            <Button
              formType="btn_action:post"
              type="button"
              className="ml-auto"
            >
              Publicate this post
            </Button>
          }
        >
          <div className="title">
            <input
              className="title f7xl-bold w-full border-x-0 border-b border-t-0 border-b-black p-0 "
              value={"How create a new ?"}
              readOnly
            />
          </div>
        </Banner>
      }

      {/* {
        <Banner
          type="message"
          title="Delete this ?"
          isClosed={BannerClosed}
          closeTheBanner={BannerCloseFunc}
          className="space-y-xs"
          additionalChildren={
            <div className="banner-buttons">
              <Button
                formType="form__error"
                type="button"
                className="tablet:w-full"
              >
                Yes, please delete it
              </Button>
              <Button
                formType="btn_action:post"
                type="button"
                className="tablet:w-full"
              >
                No, I change my mind
              </Button>
            </div>
          }
        >
          <h3 className="!text-2xl !leading-none">
            Are you sure that you want delete this ?
          </h3>
          <p>
            Deleting this is as final as pressing 'send' on a fiery email.
            Once it's gone, it's gone for good—no post-mortem recovery here! You
            and others will bid adieu to it forever. Still determined to delete?
          </p>
        </Banner>
      } */}

      {/* <Banner
        type="message"
        title="Report this ?"
        isClosed={BannerClosed}
        closeTheBanner={BannerCloseFunc}
        className="space-y-xs tablet:space-y-lg"
        additionalChildren={
          <div className="banner-buttons">
            <Button
              formType="form__error"
              type="button"
              className="tablet:w-full"
            >
              Yes, report this post
            </Button>
            <Button
              formType="btn_action:post"
              type="button"
              className="tablet:w-full"
            >
              No, I change my mind
            </Button>
          </div>
        }
      >
        <h3 className="!text-2xl leading-none">
          Please be sure to not spam the report
        </h3>
        <p>
          Your report is the bat-signal for moderation – it signals a serious
          call to review and potentially delete the post, even block the author.
          So, handle that report button like a glass slipper: make sure it fits
          the situation perfectly. Spamming it will result in a swift ban for
          you, no questions been asked!
        </p>
      </Banner> */}
    </>
  );
};

export default PostPage;
