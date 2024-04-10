"use client";

import { FC, useState } from "react";

import { Button } from "@/components";

import { HeartIcon } from "@heroicons/react/24/outline";

interface QuantitySelectorProps {}

const QuantitySelector: FC<QuantitySelectorProps> = ({}) => {
  const [inputValue, setInputValue] = useState<number>(1);
  const maxInputValue = 100;

  return (
    <div className="item type-selctor-quantity flex-dcol flex-tstart w-full space-y-md">
      <div className="title">
        <h4 className="fnormal-medium leading-normal">Quantity</h4>
      </div>
      <div className="selectors-items flex-drow flex-ststart w-full space-x-sm">
        <div className="flex-drow flex-stspace container w-full">
          <div className="counter flex-drow flex-drow h-7xl items-stretch">
            <input
              type="number"
              value={inputValue}
              min={1}
              max={99}
              className="flex-ccenter fnormal-normal flex-drow h-full w-7xl appearance-none border border-r-0 border-gray bg-transparent text-center text-gray"
            />
            <div className="button flex-dcol">
              <div
                className="icon icon-plus use-transition flex-ccenter fnormal-normal flex-drow h-1/2 w-xl cursor-pointer border border-b-0 border-gray bg-transparent text-gray hover:border-black hover:bg-black hover:text-white"
                onClick={() =>
                  inputValue < maxInputValue - 1
                    ? setInputValue(inputValue + 1)
                    : void 0
                }
              >
                +
              </div>
              <div
                className="icon icon-minus use-transition flex-ccenter fnormal-normal flex-drow h-1/2 w-xl cursor-pointer border border-gray bg-transparent text-gray hover:border-black hover:bg-black hover:text-white"
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
            className="flex-cspace flex-drow h-7xl w-full rounded-none py-0"
          >
            <p className="font-medium">Add to basket</p>{" "}
            <span className="font-medium">{">"}</span>
          </Button>
        </div>
        <div className="use-transition flex-ccenter flex-drow h-7xl w-7xl min-w-7xl border border-b-gray bg-transparent hover:bg-black hover:text-white">
          <HeartIcon className="w-7 text-inherit" />
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
