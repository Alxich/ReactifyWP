import { FC } from "react";
import classNames from "classnames";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

import { errorTextHandler } from "@/lib/errorTextHandler";

interface ButtonNavigationProps {
  next?: true;
  previous?: true;
  onClick?: () => void;
}

const ButtonNavigation: FC<ButtonNavigationProps> = ({
  next,
  previous,
  onClick,
}: ButtonNavigationProps) => {
  if ((!next && !previous) || (next === true && previous === true))
    errorTextHandler("PageNumberNav");

  return (
    <div
      className={classNames(
        "btn item-center use-transition flex-drow flex-stcenter cursor-pointer select-none space-x-xs text-gray hover:text-highlight",
        {
          "btn-next flex-drow-reverse space-x-reverse": next,
          "btn-previous flex-drow": previous,
          hidden: !next && !previous,
        },
      )}
      onClick={onClick}
    >
      {next && <ArrowRightIcon className="icon h-5 w-5" />}
      {previous && <ArrowLeftIcon className="icon h-5 w-5" />}
      <p className=" use-transition fmedium-medium  text-inherit">
        {next ? "Next" : previous && "Previous"}
      </p>
    </div>
  );
};

export default ButtonNavigation;
