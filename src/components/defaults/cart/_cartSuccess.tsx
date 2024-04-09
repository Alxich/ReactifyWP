import Link from "next/link";
import { FC } from "react";

interface CartSuccessProps {}

const CartSuccess: FC<CartSuccessProps> = (props) => {
  return (
    <div className="empty-cart flex-dcol flex-ccenter w-full space-y-[10vw]">
      <div className="main-text flex-ccenter flex-dcol flex-drow mt-[10vw] h-full w-fit max-w-[535px]">
        <h3 className="f8xl-semibold text-center capitalize">Thanks!</h3>
      </div>
      <p className="move-back fnormal-normal text-center">
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
