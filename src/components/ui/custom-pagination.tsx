import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface productPaginationProps {
  currentPage: number;
  handlePageChange: (newPage: number) => void;
  totalPages: number;
}

const CustomPagination = ({
  currentPage,
  handlePageChange,
  totalPages,
}: productPaginationProps) => {
  return (
    <>
      <div className="flex justify-center absolute -bottom-11 right-2">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="border text-xs cursor-pointer"
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
              />
            </PaginationItem>
            <PaginationItem className="text-xs px-4">
              Page {currentPage} of {totalPages}
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                className="border text-xs cursor-pointer"
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default CustomPagination;
