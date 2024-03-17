"use client";

import { FC, useState } from "react";

import { Button } from "@/components";

import { HeartIcon } from "@heroicons/react/24/outline";

interface QuantitySelectorProps {}

const QuantitySelector: FC<QuantitySelectorProps> = ({}) => {
  const [inputValue, setInputValue] = useState<number>(1);
  const maxInputValue = 100;

  return (
    <div className="item type-selctor-quantity flex w-full flex-col items-start justify-start space-y-md">
      <div className="title">
        <h4 className="text-normal font-medium leading-normal text-black">
          Quantity
        </h4>
      </div>
      <div className="selectors-items flex w-full flex-row items-stretch justify-start space-x-sm">
        <div className="container flex w-full flex-row items-stretch justify-between">
          <div className="counter flex h-7xl flex-row items-stretch">
            <input
              type="number"
              value={inputValue}
              min={1}
              max={99}
              className="flex h-full w-7xl appearance-none items-center justify-center border border-r-0 border-gray text-center text-normal font-normal text-gray"
            />
            <div className="button flex flex-col">
              <div
                className="icon icon-plus use-transition flex h-1/2 w-xl cursor-pointer items-center justify-center border border-b-0 border-gray bg-transparent text-normal font-normal text-gray hover:border-black hover:bg-black hover:text-white"
                onClick={() =>
                  inputValue < maxInputValue - 1
                    ? setInputValue(inputValue + 1)
                    : void 0
                }
              >
                +
              </div>
              <div
                className="icon icon-minus use-transition flex h-1/2 w-xl cursor-pointer items-center justify-center  border border-gray bg-transparent text-normal font-normal text-gray hover:border-black hover:bg-black hover:text-white"
                onClick={() =>
                  inputValue > 1 ? setInputValue(inputValue - 1) : void 0
                }
              >
                -
              </div>
            </div>
          </div>
          <Button
            formType="form"
            type="button"
            className="flex h-7xl w-full items-center justify-between rounded-none py-0"
          >
            <p className="font-medium">Add to basket</p>{" "}
            <span className="font-medium">{">"}</span>
          </Button>
        </div>
        <div className="use-transition flex h-7xl w-7xl min-w-7xl items-center justify-center border border-b-gray bg-transparent text-black hover:bg-black hover:text-white">
          <HeartIcon className="w-7 text-inherit" />
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
