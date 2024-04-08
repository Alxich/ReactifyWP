"use client";

import { FC, useState } from "react";
import Image from "next/image";

import { TrashIcon } from "@heroicons/react/24/outline";

import { SvgIcons } from "@/components";

import vansCartIcon from "../../../../public/images/vans-cart.png";

interface CartItemProps {}

const CartItem: FC<CartItemProps> = (props) => {
  const [inputValue, setInputValue] = useState<number>(1);
  const maxInputValue = 100;

  return (
    <div className="item flex-drow items-center justify-between">
      <div className="thumbnail min-w-[132px]">
        <Image src={vansCartIcon} alt="cart-item-image" />
      </div>
      <div className="short-desc flex-dcol flex-tcenter w-full space-y-xxs pl-xs">
        <div className="title">
          <h4 className="text-xl">
            Trainers{" "}
            <span className="font-black text-inherit">Vans SK8-HI</span>
          </h4>
        </div>
        <div className="article text-sm text-gray">
          <p className="text-inherit">
            <span className="font-meduim">Article</span>: LBL0281
          </p>
        </div>
        <div className="sizes flex-drow-wrap gap-x-xxs font-medium child:text-inherit">
          <p>
            Size: <span className="font-bold">M</span>
          </p>
          <p>
            Colour: <span className="font-bold">Grey Mask</span>
          </p>
        </div>
      </div>
      <div className="counter flex-ccenter flex h-7xl flex-row">
        <div
          className="icon icon-plus use-transition flex-ccenter flex h-1/2 w-xl cursor-pointer text-normal font-normal text-gray "
          onClick={() =>
            inputValue < maxInputValue - 1
              ? setInputValue(inputValue + 1)
              : void 0
          }
        >
          <SvgIcons type="Chevron-Arrow-Up" />
        </div>

        <input
          type="number"
          value={inputValue}
          min={1}
          max={99}
          className="flex-ccenter flex h-full w-[132px] appearance-none border-none text-center text-normal font-normal text-gray"
        />

        <div
          className="icon icon-minus use-transition flex-ccenter flex h-1/2 w-xl cursor-pointer  text-normal font-normal text-gray"
          onClick={() =>
            inputValue > 1 ? setInputValue(inputValue - 1) : void 0
          }
        >
          <SvgIcons type="Chevron-Arrow-Down" />
        </div>
      </div>
      <div className="price flex-ccenter flex w-full">
        <p className="text-normal font-semibold text-highlight">
          £75.00{" "}
          <span className="text-xs font-semibold">{"(8.78£ postage)"}</span>
        </p>
      </div>
      <div className="delete cursor-pointer text-gray hover:text-highlight">
        <TrashIcon className="w-xl text-inherit" />
      </div>
    </div>
  );
};

export default CartItem;
