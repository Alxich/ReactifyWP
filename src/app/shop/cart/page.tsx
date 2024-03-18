import { Breadcrumbs, Container } from "@/components";
import Link from "next/link";
import * as React from "react";

interface CartPageProps {}

const CartPage: React.FunctionComponent<CartPageProps> = (props) => {
  return (
    <Container
      classNames="flex flex-col justify-center items-start post py-7xl px-3xl space-y-lg"
      width="md"
    >
      <Breadcrumbs />
      <div className="cart-table flex w-full flex-col items-center justify-center space-y-lg child:w-full">
        <div className="cart-header child:use-transition flex flex-row items-center justify-end space-x-6 text-medium font-medium text-gray underline child:cursor-pointer child:text-inherit child-hover:text-highlight">
          <p>Clear the list</p>
          <Link href={"#"}>{"<"} Return to main page</Link>
        </div>
        <div className="cart-cards flex flex-col items-center justify-center child:w-full child:border-y child:border-b-gray child:border-t-transparent child:px-lg child:py-2.5xl [&>*:first-child]:border-t-gray">
          <div className="item">1234</div>
          <div className="item">1234</div>
          <div className="item">1234</div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
