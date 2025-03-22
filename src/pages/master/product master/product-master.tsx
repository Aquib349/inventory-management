import { useRef, useState } from "react";
import ProductTable from "./table";
import ProductDailog from "./dailog";
import ProductSearch from "./search";
import CustomPagination from "@/components/ui/custom-pagination";
import { useProduct } from "@/hooks/use-product";
import LoadingSpinner from "@/components/ui/loading-spinner";

const ITEMS_PER_PAGE = 20;

const ProductMaster = () => {
  const { allProducts, loading } = useProduct();
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const handleViewDetails = (item: any) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const totalPages = Math.ceil((allProducts ?? []).length / ITEMS_PER_PAGE);
  const paginatedData = (allProducts ?? []).slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative space-y-2">
      <ProductSearch />
      <ProductTable
        tableContainerRef={tableContainerRef}
        paginatedData={paginatedData}
        handleViewDetails={handleViewDetails}
      />
      <CustomPagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
      <ProductDailog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default ProductMaster;
