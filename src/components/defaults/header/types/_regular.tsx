import { Container, SvgIcons } from "@/components";
import { FC } from "react";

interface PageHeaderRegProps {
  title: string;
  text: string;
}

const PageHeaderReg: FC<PageHeaderRegProps> = ({ title, text }) => {
  return (
    <div className="page-header w-full border-b border-b-black px-3xl py-7xl desktop:px-0">
      <Container width="sm" classNames="mx-auto">
        <h1 className="mb-xl text-8xl font-bold uppercase desktop:text-7xl tablet-portrait:!text-6xl">{title}</h1>

        <div className="flex flex-row items-center justify-start space-x-xs">
          <h3 className="text-2xl font-bold uppercase leading-none ">
            Do not be shy to Explore{" "}
          </h3>
          <SvgIcons type="Explore-Arrow-Down-Right" />
        </div>
        <p className="tablet:mt-xxs">{text}</p>
      </Container>
    </div>
  );
};

export default PageHeaderReg;
