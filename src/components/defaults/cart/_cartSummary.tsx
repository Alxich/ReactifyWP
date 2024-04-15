import Image from "next/image";
import { FC } from "react";

import masterCardIcon from "@images/summary-cart/MasterCard.png";
import visaCardIcon from "@images/summary-cart/Visa.png";
import applepayCardIcon from "@images/summary-cart/Apple Pay.png";
import googlepayCardIcon from "@images/summary-cart/Google Pay.png";
import paypalCardIcon from "@images/summary-cart/PayPal.png";
import KlarnaCardIcon from "@images/summary-cart/Klarna.png";
import { Button } from "@/components";

interface CartSummaryProps {}

const CartSummary: FC<CartSummaryProps> = (props) => {
  const cardIcons = [
    { src: masterCardIcon, alt: "card-acceptence-banks" },
    { src: visaCardIcon, alt: "card-acceptence-banks" },
    { src: applepayCardIcon, alt: "card-acceptence-banks" },
    { src: googlepayCardIcon, alt: "card-acceptence-banks" },
    { src: paypalCardIcon, alt: "card-acceptence-banks" },
    { src: KlarnaCardIcon, alt: "card-acceptence-banks" },
  ];

  const renderCardIcons = () => {
    return cardIcons.map((icon, index) => (
      <div className="item h-7xl w-full max-w-[48px]" key={index}>
        <Image src={icon.src} alt={icon.alt} />
      </div>
    ));
  };

  return (
    <div className="payment-form flex-tstart flex-dcol w-full max-w-[480px] space-y-lg bg-gray/5 px-3xl py-2xl tablet-portrait:max-w-full phone-portrait:px-xxs">
      <div className="title w-full">
        <h3 className="f2xl-semibold">Placing an order</h3>
      </div>
      <div className="summary-details flex-dcol flex-tstart w-full space-y-lg child:first:border-t-0 child:first:pt-0 child:last:border-b-0 child:last:pb-0">
        <div className="item flex-dcol flex-tstart w-full space-y-sm border-y border-y-gray/20 py-lg">
          <div className="title flex-drow flex-cspace w-full">
            <h5 className="fnormal-medium">Discounts</h5>
            <p className="fmedium-medium cursor-pointer text-gray underline tablet-portrait:text-medium">
              Clear the list
            </p>
          </div>
        </div>
        <div className="item flex-dcol flex-tstart w-full space-y-sm border-y border-y-gray/20 py-lg">
          <div className="item-intire content-data flex-drow flex-cspace w-full">
            <div className="title flex-drow w-full">
              <h5 className="fnormal-medium text-gray">Order value</h5>
            </div>
            <p className="fmedium-medium text-gray tablet-portrait:text-medium">
              £225.00
            </p>
          </div>
          <div className="item-intire content-data flex-drow flex-cspace w-full">
            <div className="title flex-drow w-full">
              <h5 className="fnormal-medium text-gray">Delivery</h5>
            </div>
            <p className="fmedium-medium text-gray tablet-portrait:text-medium">
              £26.34
            </p>
          </div>
        </div>
        <div className="item flex-dcol flex-tstart w-full space-y-sm border-y border-y-gray/20 py-lg">
          <div className="title flex-drow flex-cspace w-full">
            <h5 className="fnormal-medium">Total price</h5>
            <p className="fnormal-medium text-highlight">£251.34</p>
          </div>
        </div>
        <div className="item flex-dcol flex-tstart w-full space-y-sm border-y border-y-gray/20 py-lg">
          <div className="title flex-drow flex-cspace w-full">
            <h5 className="fnormal-medium">We accept</h5>
          </div>
          <div className="items-card-acceps flex-drow flex-cspace w-full space-x-2xl">
            {renderCardIcons()}
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
          <p className="w-full text-base font-normal text-gray">
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
