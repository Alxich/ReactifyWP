import { FC } from "react";

interface SquaresSelectorProps {}

const SquaresSelector: FC<SquaresSelectorProps> = ({}) => {
  return (
    <div className="item type-selctor-square flex-dcol flex-tstart space-y-sm">
      <div className="title">
        <h4 className="fnormal-medium leading-normal">Choose size in stock</h4>
      </div>
      <div className="selectors-items flex-drow flex-cstart flex-wrap gap-sm">
        {["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "11.5"].map(
          (item, i) => (
            <div
              className="item use-transition flex-ccenter fnormal-normal flex-drow h-7xl w-7xl cursor-pointer border border-gray bg-transparent text-gray hover:bg-black hover:text-white"
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
