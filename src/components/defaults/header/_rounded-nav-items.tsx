import { FC } from "react";

import {
  ArrowRightEndOnRectangleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/20/solid";

interface RoundedNavItemsProps {}

const RoundedNavItems: FC<RoundedNavItemsProps> = (props) => {
  const transitionSetup = "text-black use-transition";
  const userIconStyle = `h-6 w-6 ${transitionSetup} group-hover:text-white`;

  return (
    <>
      <li className="shopping-nav wp-border group rounded-full px-md py-xs use-transition hover:bg-black">
        <ul className="flex h-full w-full items-center justify-between">
          <li className="mr-xs cursor-pointer">
            <HeartIcon className={userIconStyle} />
          </li>
          <li className="cursor-pointer">
            <ShoppingBagIcon className={userIconStyle} />
          </li>
        </ul>
      </li>
      <li className="account-nav wp-border group flex cursor-pointer items-center justify-between rounded-full px-md py-xs use-transition hover:bg-black">
        <UserIcon className={`mr-xs ${userIconStyle}`} />
        <p
          className={`name text-normal font-medium ${transitionSetup} group-hover:text-white`}
        >
          John Doe
        </p>
      </li>
      <li className="account-exit cursor-pointer">
        <ArrowRightEndOnRectangleIcon
          className={`mr-xs h-5.5xl w-5.5xl ${transitionSetup} hover:text-highlight`}
        />
      </li>
    </>
  );
};

export default RoundedNavItems;