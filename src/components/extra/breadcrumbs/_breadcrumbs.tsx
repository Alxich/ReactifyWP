import { FC } from "react";

interface BreadcrumbsProps {}

const Breadcrumbs: FC<BreadcrumbsProps> = ({}: BreadcrumbsProps) => {
  return (
    <div className="breadcrumbs flex w-full flex-row items-center justify-between">
      <div className="breads">
        <p className="text-medium ">
          <b className="font-semibold">Our journey</b> : <b>Home</b>{" "}
          <b className="font-semibold">{"> "}</b>
          Frameworks <b className="font-semibold">{"> "}</b> Grid system for
          better Design User Interface{" "}
        </p>
      </div>
    </div>
  );
};

export default Breadcrumbs;
