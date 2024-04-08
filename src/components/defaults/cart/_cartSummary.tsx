import Image from "next/image";
import { FC } from "react";

import masterCardIcon from "../../../../public/images/summary-cart/MasterCard.png";
import visaCardIcon from "../../../../public/images/summary-cart/Visa.png";
import applepayCardIcon from "../../../../public/images/summary-cart/Apple Pay.png";
import googlepayCardIcon from "../../../../public/images/summary-cart/Google Pay.png";
import paypalCardIcon from "../../../../public/images/summary-cart/PayPal.png";
import KlarnaCardIcon from "../../../../public/images/summary-cart/Klarna.png";
import { Button } from "@/components";

interface CartSummaryProps {}

const CartSummary: FC<CartSummaryProps> = (props) => {
  return (
    <div className="payment-form w-full max-w-[480px] flex-col items-start justify-start space-y-lg bg-gray/5 px-3xl py-2xl">
      <div className="title w-full">
        <h3 className="f2xl-semibold">Placing an order</h3>
      </div>
      <div className="summary-details flex-dcol w-full items-start justify-start space-y-lg child:first:border-t-0 child:first:pt-0 child:last:border-b-0 child:last:pb-0">
        <div className="item flex-dcol w-full items-start justify-start space-y-sm border-y border-y-gray/20 py-lg">
          <div className="title flex-drow w-full items-center justify-between">
            <h5 className="text-normal font-medium">Discounts</h5>
            <p className="cursor-pointer text-sm font-medium text-gray underline">
              Clear the list
            </p>
          </div>
        </div>
        <div className="item flex-dcol w-full items-start justify-start space-y-sm border-y border-y-gray/20 py-lg">
          <div className="item-intire content-data flex-drow w-full items-center justify-between">
            <div className="title flex w-full">
              <h5 className="text-normal font-medium text-gray">Order value</h5>
            </div>
            <p className="text-sm font-medium text-gray">£225.00</p>
          </div>
          <div className="item-intire content-data flex-drow w-full items-center justify-between">
            <div className="title flex w-full">
              <h5 className="text-normal font-medium text-gray">Delivery</h5>
            </div>
            <p className="text-sm font-medium text-gray">£26.34</p>
          </div>
        </div>
        <div className="item flex-dcol w-full items-start justify-start space-y-sm border-y border-y-gray/20 py-lg">
          <div className="title flex-drow w-full items-center justify-between">
            <h5 className="text-normal font-medium">Total price</h5>
            <p className="text-normal font-medium text-highlight">£251.34</p>
          </div>
        </div>
        <div className="item flex-dcol w-full items-start justify-start space-y-sm border-y border-y-gray/20 py-lg">
          <div className="title flex-drow w-full items-center justify-between">
            <h5 className="text-normal font-medium">We accept</h5>
          </div>
          <div className="items-card-acceps flex-drow w-full items-center justify-between space-x-2xl">
            <div className="item h-7xl w-full max-w-[48px]">
              <Image src={masterCardIcon} alt="card-acceptence-banks" />
            </div>
            <div className="item h-7xl w-full max-w-[48px]">
              <Image src={visaCardIcon} alt="card-acceptence-banks" />
            </div>
            <div className="item h-7xl w-full max-w-[48px]">
              <Image src={applepayCardIcon} alt="card-acceptence-banks" />
            </div>
            <div className="item h-7xl w-full max-w-[48px]">
              <Image src={googlepayCardIcon} alt="card-acceptence-banks" />
            </div>
            <div className="item h-7xl w-full max-w-[48px]">
              <Image src={paypalCardIcon} alt="card-acceptence-banks" />
            </div>
            <div className="item h-7xl w-full max-w-[48px]">
              <Image src={KlarnaCardIcon} alt="card-acceptence-banks" />
            </div>
          </div>
        </div>
        <Button
          formType="form"
          type="button"
          className="w-full !border-b-2 !py-sm text-center"
        >
          Proceed to pay
        </Button>
        <div className="additionals w-full">
          <p className="w-full text-xs font-normal text-gray">
            Prices and delivery costs are confirmed after you've reached the
            checkout. Additional payments may supply by your delivery partner 28
            days right of withdrawal. Read more about
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
