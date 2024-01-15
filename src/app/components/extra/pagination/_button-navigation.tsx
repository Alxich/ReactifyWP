import { FC } from "react";
import classNames from "classnames";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

import { errorTextHandler } from "@/lib/errorTextHandler";

interface ButtonNavigationProps {
  next?: true;
  previous?: true;
}

const ButtonNavigation: FC<ButtonNavigationProps> = ({
  next,
  previous,
}: ButtonNavigationProps) => {
  if ((!next && !previous) || (next === true && previous === true))
    errorTextHandler("PageNumberNav");

  return (
    <div
      className={classNames(
        "btn item-center flex cursor-pointer select-none justify-center space-x-xs text-gray transition duration-300 hover:text-highlight",
        {
          "btn-next flex-row-reverse space-x-reverse": next,
          "btn-previous flex-row": previous,
          hidden: !next && !previous,
        },
      )}
    >
      {next && <ArrowRightIcon className="icon h-5 w-5" />}
      {previous && <ArrowLeftIcon className="icon h-5 w-5" />}
      <p className=" text-medium font-medium text-inherit  transition duration-300">
        {next ? "Next" : previous && "Previous"}
      </p>
    </div>
  );
};

export default ButtonNavigation;
