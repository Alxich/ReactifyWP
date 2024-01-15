import { errorTextHandler } from "./errorTextHandler";

export const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
  visiblePages: number,
) => {
  const pages = [];
  const halfVisible = Math.floor(visiblePages / 2);

  if (currentPage <= 0) {
    errorTextHandler("PageNumberNav", currentPage);
    currentPage = 1;
  }

  const avaiblePages = currentPage < 10 ? 10 : totalPages;

  for (let i = currentPage; i <= avaiblePages; i++) {
    const isFirstPages = i <= visiblePages;
    const isLastPages = i >= avaiblePages - visiblePages + 1;

    if (
      isFirstPages || // Add visible pages at the beginning
      isLastPages || //Add visible pages at the end
      (i >= currentPage - halfVisible && i <= currentPage + 1 + halfVisible) // Add visible pages around the current page
    ) {
      pages.push(i);
    } else if (
      (pages[pages.length - 1] !== "..." && !isFirstPages) || // Add "..." before visible pages, if not at the beginning
      (pages[pages.length - 1] !== "..." && !isLastPages) // Add "..." after visible pages, if not at the end
    ) {
      pages.push("...");
    }
  }

  return pages;
};
