import { FC } from "react";
import Image from "next/image";

import { Container, QuantitySelector, SquaresSelector } from "@/components";

import VansProductImage from "../../../../../public/images/vans-icon.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface ProductDetailsProps {}

const ProductDetails: FC<ProductDetailsProps> = (props) => {
  return (
    <Container
      width="md"
      classNames="flex-drow pt-7xl space-x-3xl tablet:flex-col tablet:space-x-0 tablet:space-y-lg tablet:pt-0"
    >
      <div className="thumbnail product-thumbnail relative h-fit w-1/2 cursor-pointer rounded-lg border border-gray bg-[#fff] tablet:mx-auto tablet:w-full tablet:max-w-[360px]">
        <Image src={VansProductImage} alt="product-image-container" />
        <div className="absolute right-lg top-lg z-10">
          <MagnifyingGlassIcon className="w-xl " />
        </div>
      </div>
      <div className="details product details flex w-1/2 flex-col items-start justify-start space-y-md child:w-full tablet:w-full">
        <div className="title-and-price flex-drow items-baseline justify-between">
          <h2 className="text-2xl font-normal">
            Trainers <span className="font-black">Vans SK8-HI</span>
          </h2>
          <p className="price text-normal font-semibold text-highlight phone-portrait:hidden">
            £75.00
          </p>
        </div>
        <div className="line h-[1px] w-full bg-gray/20" />
        <div className="selectors flex-dcol items-start justify-start space-y-md">
          <SquaresSelector />
          <QuantitySelector />
          <div className="item type-selctor-calc__vat flex-drow w-full items-baseline justify-between desktop:flex-col">
            <div className="title">
              <h4 className="text-normal font-medium leading-normal">
                Price with VAT + delivery
              </h4>
            </div>
            <p className="price text-normal font-semibold text-highlight">
              £75.00{" "}
              <span className="text-xs font-semibold">{"(8.78£ postage)"}</span>
            </p>
          </div>
        </div>
        <div className="item type-selctor-total flex-dcol w-full items-start justify-start">
          <div className="flex-drow w-full items-baseline justify-between">
            <div className="title">
              <h4 className="text-normal font-medium leading-normal">
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
