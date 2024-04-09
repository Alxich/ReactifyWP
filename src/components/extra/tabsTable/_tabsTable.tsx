import { FC } from "react";
import classNames from "classnames";

interface TabsProps {}

const TabsTable: FC<TabsProps> = ({}) => {
  const tabsArrayData = [];
  const activeTab = false;

  return (
    <div className="tabs-table flex-dcol flex-tstart w-full space-y-xl">
      <div className="table-header flex-drow flex-ststart wp-border-b-gray w-full flex-wrap gap-x-md">
        <div
          className={classNames(
            "item active use-transition flex-ccenter flex-drow h-7xl cursor-pointer py-md",
            {
              "border-b-3 border-b-highlight ": activeTab,
              "border-b-3 border-b-transparent text-gray": !activeTab,
            },
          )}
        >
          <h3 className="use-transition fnormal-medium text-inherit hover:text-highlight">
            Description and features
          </h3>
        </div>
        <div
          className={classNames(
            "item use-transition flex-ccenter flex-drow h-7xl cursor-pointer py-md",
            {
              "border-b-3 border-b-highlight ": activeTab,
              "border-b-3 border-b-transparent text-gray": !activeTab,
            },
          )}
        >
          <h3 className="use-transition fnormal-medium text-inherit hover:text-highlight">
            Delivery and Returns
          </h3>
        </div>
        <div
          className={classNames(
            "item use-transition flex-ccenter flex-drow h-7xl cursor-pointer py-md",
            {
              "border-b-3 border-b-highlight ": activeTab,
              "border-b-3 border-b-transparent text-gray": !activeTab,
            },
          )}
        >
          <h3 className="use-transition fnormal-medium text-inherit hover:text-highlight">
            Care instruction
          </h3>
        </div>
      </div>
      <div className="content page-content-text">
        <div className="item space-y-xl">
          <p>
            The hi-top classic that's still going strong today, no other shoe
            stomps the streets and takes to the tape as hard as the Vans Sk8 Hi.
            The first skate shoe that utilised athletic-style support, its
            pioneering build brought a new level of athleticism to street-wise
            skating.
          </p>
          <p>
            This men's model retains the same iconic look and construction of
            the original, utilising the classic canvas and suede combination for
            hard-wearing comfort. Vulcanised rubber soles keep your feet
            comfortable both on and off the board, while the iconic Formstripe
            to the sides puts the finishing touch on these all-time legends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabsTable;
