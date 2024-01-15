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
      width="sm"
      classNames="flex flex-row justify-between items-center pt-7xl"
    >
      <ButtonNavigation previous />
      <div className="navigation flex flex-row items-baseline justify-center space-x-xxxs">
        {pageNumbers.map((item, key) => {
          item;

          return (
            <div
              className="item active:bg-highlight-definition hover:bg-highlight-definition flex h-5xl w-5xl cursor-pointer select-none items-center justify-center rounded-lg p-sm text-gray transition duration-300 hover:text-highlight"
              key={`${item}__${key}`}
            >
              <p className="text-medium font-semibold text-inherit  transition duration-300">
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
