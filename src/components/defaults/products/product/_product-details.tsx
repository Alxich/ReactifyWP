import { FC } from "react";
import Image from "next/image";

import { Container, QuantitySelector, SquaresSelector } from "@/components";

import VansProductImage from "../../../../../public/images/vans-icon.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface ProductDetailsProps {}

const ProductDetails: FC<ProductDetailsProps> = (props) => {
  return (
    <Container width="md" classNames="flex flex-row pt-7xl space-x-3xl">
      <div className="thumbnail product-thumbnail relative h-fit w-1/2 cursor-pointer rounded-lg border border-gray">
        <Image src={VansProductImage} alt="product-image-container" />
        <div className="absolute right-lg top-lg z-10">
          <MagnifyingGlassIcon className="w-xl text-black" />
        </div>
      </div>
      <div className="details product details flex w-1/2 flex-col items-start justify-start space-y-md child:w-full">
        <div className="title-and-price flex flex-row items-baseline justify-between">
          <h2 className="text-2xl font-normal text-black">
            Trainers <span className="font-black">Vans SK8-HI</span>
          </h2>
          <p className="price text-normal font-semibold text-highlight">
            £75.00
          </p>
        </div>
        <div className="line h-[1px] w-full bg-gray/20" />
        <div className="selectors flex flex-col items-start justify-start space-y-md">
          <SquaresSelector />
          <QuantitySelector />
          <div className="item type-selctor-calc__vat flex w-full flex-row items-baseline justify-between">
            <div className="title">
              <h4 className="text-normal font-medium leading-normal text-black">
                Price with VAT + delivery
              </h4>
            </div>
            <p className="price text-normal font-semibold text-highlight">
              £75.00{" "}
              <span className="text-xs font-semibold">{"(8.78£ postage)"}</span>
            </p>
          </div>
        </div>
        <div className="item type-selctor-total flex w-full flex-col items-start justify-start">
          <div className="flex w-full flex-row items-baseline justify-between">
            <div className="title">
              <h4 className="text-normal font-medium leading-normal text-black">
                Total Price
              </h4>
            </div>
            <p className="price text-normal font-semibold text-highlight">
              £83.00
            </p>
          </div>
          <div className="advice-desc">
            <p className="text-xs font-normal text-gray">
              Free standard delivery for Members when spending £30 or more. Free
              Click and Collect. Free and flexible returns for members
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
