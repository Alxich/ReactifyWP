import * as React from "react";
import { Container } from "../../index";

interface PageHeaderProps {
  title: string;
  text: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
  title,
  text,
}) => {
  return (
    <div className="page-header w-full border-b border-b-black px-3xl py-7xl">
      <Container width="md" classNames="mx-auto">
        <h1 className="mb-xl text-8xl font-bold uppercase text-black">
          {title}
        </h1>

        <div className="flex flex-row items-center justify-start space-x-xs">
          <h3 className="text-2xl font-bold uppercase text-black leading-none">
            Do not be shy to Explore{" "}
          </h3>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.5"
              width="24"
              height="24"
              rx="2"
              className="fill-black"
            />
            <path
              d="M7 17.5L17 7.5M17 7.5H7M17 7.5V17.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-black">{text}</p>
      </Container>
    </div>
  );
};

export default PageHeader;
