import { FC } from "react";
import Link from "next/link";

import {
  ArrowRightEndOnRectangleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/20/solid";

interface RoundedNavItemsProps {}

const RoundedNavItems: FC<RoundedNavItemsProps> = (props) => {
  const transitionSetup = "use-transition";
  const userIconStyle = `h-6 w-6 ${transitionSetup} group-hover:text-white`;

  return (
    <>
      <li className="shopping-nav wp-border use-transition group rounded-full px-md py-xs hover:bg-black">
        <ul className="spread-block flex-cspace flex">
          <li className="mr-xs cursor-pointer">
            <Link href="/shop/favorites">
              <HeartIcon className={userIconStyle} />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/shop/cart">
              <ShoppingBagIcon className={userIconStyle} />
            </Link>
          </li>
        </ul>
      </li>
      <li className="account-nav wp-border use-transition flex-cspace flex-drow group cursor-pointer rounded-full px-md py-xs hover:bg-black">
        <UserIcon className={`mr-xs laptop:mr-0 ${userIconStyle}`} />
        <p
          className={`name fnormal-medium ${transitionSetup} group-hover:text-white laptop:hidden`}
        >
          John Doe
        </p>
      </li>
      <li className="account-exit cursor-pointer">
        <Link href="/login">
          <ArrowRightEndOnRectangleIcon
            className={`mr-xs h-5.5xl w-5.5xl ${transitionSetup} hover:text-highlight`}
          />
        </Link>
      </li>
    </>
  );
};

export default RoundedNavItems;
