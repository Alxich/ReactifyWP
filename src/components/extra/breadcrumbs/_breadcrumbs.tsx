import { FC } from "react";

interface BreadcrumbsProps {}

const Breadcrumbs: FC<BreadcrumbsProps> = ({}: BreadcrumbsProps) => {
  return (
    <div className="breadcrumbs flex-drow flex-cspace w-full">
      <div className="breads">
        <p className="fmedium-normal">
          <b className="fmedium-semibold">Our journey</b> : <b>Home</b>{" "}
          <b className="fmedium-semibold">{"> "}</b>
          Frameworks <b className="fmedium-semibold">{"> "}</b> Grid system for
          better Design User Interface{" "}
        </p>
      </div>
    </div>
  );
};

export default Breadcrumbs;
