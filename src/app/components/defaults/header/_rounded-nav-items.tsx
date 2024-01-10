import { FC } from "react";

import {
  ArrowRightEndOnRectangleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/20/solid";

interface RoundedNavItemsProps {}

const RoundedNavItems: FC<RoundedNavItemsProps> = (props) => {
  return (
    <>
      <li className="shopping-nav group rounded-full border border-black px-md py-xs transition duration-300 hover:bg-black">
        <ul className="flex h-full w-full items-center justify-between">
          <li className="mr-xs cursor-pointer">
            <HeartIcon className="h-6 w-6 text-black transition duration-300 group-hover:text-white" />
          </li>
          <li className="cursor-pointer">
            <ShoppingBagIcon className="h-6 w-6 text-black transition duration-300 group-hover:text-white" />
          </li>
        </ul>
      </li>
      <li className="account-nav group flex cursor-pointer items-center justify-between rounded-full border border-black px-md py-xs transition duration-300 hover:bg-black">
        <UserIcon className="mr-xs h-6 w-6 text-black transition duration-300 group-hover:text-white" />
        <p className="name text-normal font-medium text-black transition duration-300 group-hover:text-white">
          John Doe
        </p>
      </li>
      <li className="account-exit cursor-pointer">
        <ArrowRightEndOnRectangleIcon className="h-5.5xl w-5.5xl mr-xs text-black transition duration-300 hover:text-highlight" />
      </li>
    </>
  );
};

export default RoundedNavItems;
