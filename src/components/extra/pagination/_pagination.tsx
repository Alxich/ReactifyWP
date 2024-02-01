import { FC } from "react";

import { Container } from "../../index";
import ButtonNavigation from "./_button-navigation";
import { generatePageNumbers } from "@/lib/functions";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  visiblePages: number;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  visiblePages,
}: PaginationProps) => {
  const pageNumbers = generatePageNumbers(
    currentPage,
    totalPages,
    visiblePages,
  );

  return (
    <Container
      width="md"
      classNames="flex flex-row justify-between items-center pt-7xl border-t border-t-light-border"
    >
      <ButtonNavigation previous />
      <div className="navigation flex flex-row items-baseline justify-center space-x-xxxs">
        {pageNumbers.map((item, key) => {
          item;

          return (
            <div
              className={`item use-transition flex h-5xl w-5xl cursor-pointer select-none items-center justify-center rounded-lg p-sm ${
                key == 0
                  ? item !== "..." &&
                    "bg-highlight-definition text-highlight hover:bg-transparent hover:text-gray active:bg-transparent"
                  : item !== "..."
                    ? "text-gray hover:bg-highlight-definition hover:text-highlight active:bg-highlight-definition"
                    : "text-gray"
              }`}
              key={`${item}__${key}`}
            >
              <p className="use-transition text-medium font-semibold  text-inherit">
                {item}
              </p>
            </div>
          );
        })}
      </div>
      <ButtonNavigation next />
    </Container>
  );
};

export default Pagination;
