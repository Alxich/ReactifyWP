import Link from "next/link";
import * as React from "react";

interface CartSuccessProps {}

const CartSuccess: React.FunctionComponent<CartSuccessProps> = (props) => {
  return (
    <div className="empty-cart flex w-full flex-col items-center justify-center space-y-[10vw]">
      <div className="main-text mt-[10vw] flex h-full w-fit max-w-[535px] flex-col items-center justify-center">
        <h3 className="text-center text-8xl font-semibold capitalize text-black">
          Thanks!
        </h3>
      </div>
      <p className="move-back text-center text-normal font-normal text-black">
        Please, don’t be shy to buy some nice looking cloth. Do you want return
        to{" "}
        <Link
          className="use-transition font-semibold hover:text-highlight"
          href={"/"}
        >
          main page
        </Link>
        ?
      </p>
    </div>
  );
};

export default CartSuccess;
