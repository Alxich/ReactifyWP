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
    <div className="page-header w-full border-b border-b-black px-3xl py-7xl">
      <Container
        width="sm"
        classNames="mx-auto flex flex-row justify-center items-center space-x-7xl"
      >
        <div className="user-icon flex w-full max-w-[280px] items-center justify-center gap-5 rounded-full border-8 border-black p-5">
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
        <div className="container flex flex-col items-start justify-center">
          <h1 className="mb-xl text-8xl font-bold uppercase text-black leading-none">
            {username}
          </h1>

          <div className="flex flex-row items-center justify-start space-x-xs">
            <h3 className="text-2xl font-bold uppercase leading-none text-black">
              {text}
            </h3>
            <SvgIcons type="Explore-Arrow-Down-Right" />
          </div>
          <p className="text-black">{description}</p>
        </div>
      </Container>
    </div>
  );
};

export default PageHeaderUser;
