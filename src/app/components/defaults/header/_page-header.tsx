import { FC } from "react";
import { Container, SvgIcons } from "../../index";

interface PageHeaderProps {
  title: string;
  text: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title, text }: PageHeaderProps) => {
  return (
    <div className="page-header w-full border-b border-b-black px-3xl py-7xl">
      <Container width="sm" classNames="mx-auto">
        <h1 className="mb-xl text-8xl font-bold uppercase text-black">
          {title}
        </h1>

        <div className="flex flex-row items-center justify-start space-x-xs">
          <h3 className="text-2xl font-bold uppercase leading-none text-black">
            Do not be shy to Explore{" "}
          </h3>
          <SvgIcons type="Explore-Arrow-Down-Right" />
        </div>
        <p className="text-black">{text}</p>
      </Container>
    </div>
  );
};

export default PageHeader;
