import { FC } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";

import { getFormatedDate } from "@/lib/functions";

interface PostContentBlockProps {
  postContent: any;
}

const PostContentBlock: FC<PostContentBlockProps> = ({
  postContent
}: PostContentBlockProps) => {
  const {author, date, content, featuredImage} = postContent;
  const cleanedText = DOMPurify.sanitize(content, {
    USE_PROFILES: { html: true },
  });

  return (
    <div className="post-content-block flex-dcol flex-ccenter w-full space-y-sm">
      <div className="author-info flex-drow-wrap flex-cstart w-full text-black flarge-semibold gap-md">
        <div className="author-name">
          <p>Author: <span className="font-normal">{author.node.slug}</span></p>
        </div>
        <div className="date-publish">
          <p>Date of publish: <span className="font-normal">{getFormatedDate(date)}</span></p>
        </div>
      </div>
      {featuredImage && (
        <div className="banner mb-7xl h-auto w-full overflow-hidden rounded-md max-h-[380px] flex flex-ccenter">
          <Image src={featuredImage.node.sourceUrl} width={100} height={280} alt="post-content-banner-meet" className="object-cover object-center"/>
        </div>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: cleanedText }}
        className="post-content-text flex-dcol flex-ccenter w-full space-y-sm"
      />
    </div>
  );
};

export default PostContentBlock;
