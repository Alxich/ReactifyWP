import { Container, SvgIcons } from "@/components";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface PageHeaderUserProps {
  image?: string | StaticImageData;
  username: string;
  text: string;
  description?: string;
}

const PageHeaderUser: FC<PageHeaderUserProps> = ({
  image,
  username,
  text,
  description,
}) => {
  return (
    <div className="page-header wp-border-b w-full px-3xl py-7xl desktop:px-0">
      <Container
        width="sm"
        classNames="mx-auto flex-drow flex-ccenter space-x-7xl tablet-portrait:flex-dcol tablet-portrait:space-x-0 tablet-portrait:space-y-lg"
      >
        <div className="user-icon flex-ccenter flex-drow w-full max-w-[280px] gap-5 rounded-full border-8 border-black p-5 tablet-portrait:max-w-[220px] tablet-portrait:gap-2 tablet-portrait:p-2">
          {image ? (
            typeof image === "string" ? (
              <Image
                src={image}
                alt="User custom icon"
                width={280}
                height={260}
              />
            ) : (
              <Image
                src={image.src}
                alt="User custom icon"
                width={280}
                height={260}
              />
            )
          ) : (
            <SvgIcons type="User" />
          )}
        </div>
        <div className="flex-dcol flex-tcenter container">
          <h1 className="f8xl-bold mb-xl uppercase leading-none tablet-portrait:text-7xl">
            {username}
          </h1>

          <div className="flex-drow flex-cstart space-x-xs">
            <h3 className="f2xl-bold uppercase leading-none">{text}</h3>
            <SvgIcons type="Explore-Arrow-Down-Right" />
          </div>
          <p>{description}</p>
        </div>
      </Container>
    </div>
  );
};

export default PageHeaderUser;