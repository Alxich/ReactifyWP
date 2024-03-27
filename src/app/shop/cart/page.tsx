import { FC } from "react";
import Link from "next/link";

import {
  Breadcrumbs,
  CartDetails,
  CartEmpty,
  CartItem,
  CartSummary,
  CartSuccess,
  Container,
} from "@/components";

interface CartPageProps {
  empty?: boolean;
  success?: boolean;
}

const CartPage: FC<CartPageProps> = ({ empty, success }: CartPageProps) => {
  return (
    <Container
      classNames="flex flex-col justify-center items-start post py-7xl px-3xl space-y-lg"
      width="md"
    >
      <Breadcrumbs />
      {empty ? (
        <CartEmpty />
      ) : success ? (
        <CartSuccess />
      ) : (
        <div className="cart-table flex w-full flex-col items-center justify-center space-y-lg child:w-full">
          <div className="cart-header child:use-transition flex flex-row items-center justify-end space-x-6 text-medium font-medium text-gray underline child:cursor-pointer child:text-inherit child-hover:text-highlight">
            <p>Clear the list</p>
            <Link href={"#"}>{"<"} Return to main page</Link>
          </div>
          <div className="cart-cards flex flex-col items-center justify-center child:w-full child:border-y child:border-b-gray/20 child:border-t-transparent child:px-lg child:py-2.5xl [&>*:first-child]:border-t-gray/20">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="action-proceed flex flex-row items-start justify-between space-x-7xl">
            <CartDetails />
            <CartSummary />
          </div>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
