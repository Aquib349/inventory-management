import { useRef, useState } from "react";
import CustomPagination from "@/components/ui/custom-pagination";
import LoadingSpinner from "@/components/ui/loading-spinner";
import InventoryTable from "./table";
import { useInventory } from "@/hooks/use-inventory";
import InventoryProductSearch from "./search";

const ITEMS_PER_PAGE = 20;

const InventoryMaster = () => {
  const { allInventoryProducts, loading } = useInventory();
  const [currentPage, setCurrentPage] = useState(1);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(
    (allInventoryProducts ?? []).length / ITEMS_PER_PAGE
  );
  const paginatedData = (allInventoryProducts ?? []).slice(
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
      <InventoryProductSearch />
      <InventoryTable
        tableContainerRef={tableContainerRef}
        paginatedData={paginatedData}
      />
      <CustomPagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
};

export default InventoryMaster;
