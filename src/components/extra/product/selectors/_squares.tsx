import { FC } from "react";

interface SquaresSelectorProps {}

const SquaresSelector: FC<SquaresSelectorProps> = ({}) => {
  return (
    <div className="item type-selctor-square flex flex-col items-start justify-start space-y-sm">
      <div className="title">
        <h4 className="text-normal font-medium leading-normal ">
          Choose size in stock
        </h4>
      </div>
      <div className="selectors-items flex flex-row flex-wrap items-center justify-start gap-sm">
        {["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "11.5"].map(
          (item, i) => (
            <div
              className="item use-transition flex h-7xl w-7xl cursor-pointer items-center justify-center border border-gray bg-transparent text-normal font-normal text-gray hover:bg-black hover:text-white"
              key={`selector-item__${i}`}
            >
              {item}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default SquaresSelector;
