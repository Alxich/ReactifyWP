import { FC, useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  Container,
  PostWrpapper,
  PostHeader,
  Banner,
  Button,
} from "@/components";
import { IDTypeEnum, PostPreviewBlockProps } from "@/lib/types";

import preloadData from "@bin/preload.json";
import getOperationsRequest from "@/graphql/operations";

interface PostPageProps {}

const PostPage: FC<PostPageProps> = ({}: PostPageProps) => {
  const Router = useRouter();
  const { slug: pageSlug } = Router.query;

  const [postData, setPostData] = useState<Array<PostPreviewBlockProps>>(preloadData.postsData);

  const {
    data: queryPostData,
    loading: queryPostDataLoading,
    refetch: queryPostDataRefetch,
  } = getOperationsRequest.GET.QueryData({
    type: "queryPost",
    variables: {
      id: pageSlug ? pageSlug.toString() : "",
      idType: IDTypeEnum.SLUG,
    },
  });

  useEffect(() => {
    if (queryPostData && queryPostData.post && queryPostDataLoading === false) {      
      setPostData(queryPostData.post);

      console.log(queryPostData.post)
    }
  }, [queryPostData, queryPostDataLoading]);

  return (
    <>
      <Container
        classNames="flex-dcol flex-tcenter wrapper-conspace"
        width="md"
      >
        <PostHeader />
        {postData && <PostWrpapper postData={postData} />}
      </Container>
      {/* {
        <Banner
          type="editor"
          title="Creating a new post"
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
              className="title f4xl-bold w-full border-x-0 border-b border-t-0 border-b-black p-0 "
              value={"How create a new post?"}
              readOnly
            />
          </div>
        </Banner>
      } */}

      {/* {
        <Banner
          type="message"
          title="Delete this ?"
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
