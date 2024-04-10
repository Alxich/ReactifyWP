import { Container, SvgIcons } from "@/components";
import { FC } from "react";

interface PageHeaderRegProps {
  title: string;
  text: string;
}

const PageHeaderReg: FC<PageHeaderRegProps> = ({ title, text }) => {
  return (
    <div className="page-header wp-border-b w-full px-3xl py-7xl desktop:px-0">
      <Container width="sm" classNames="mx-auto">
        <h1 className="f8xl-bold mb-xl uppercase desktop:text-7xl">{title}</h1>

        <div className="flex-drow flex-cstart space-x-xs">
          <h3 className="f2xl-bold uppercase leading-none">
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
