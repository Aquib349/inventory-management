import { useRef, useState } from "react";
import ProductTable from "./table";
import ProductPagination from "./pagination";
import ProductDailog from "./dailog";
import ProductSearch from "./search";

const ITEMS_PER_PAGE = 20;

const ProductMaster = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const handleViewDetails = (item: any) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const data = Array.from({ length: 35 }).map((_, index) => ({
    id: index + 1,
    itemName: `Product ${index + 1}`,
    itemCode: `P-${1000 + index}`,
    brand: `Brand ${index + 1}`,
    product: `Category ${index + 1}`,
    gst: `${5 + index}%`,
    hsnCode: `HSN${1000 + index}`,
    barcode: `BRC${1000 + index}`,
    purchaseUOM: "PCS",
    shelfLife: `${12 + index} months`,
    unitsPerBox: 10 + index,
    purchasePrice: `$${(10 + index).toFixed(2)}`,
    sellingPrice: `$${(15 + index).toFixed(2)}`,
    mrp: `$${(20 + index).toFixed(2)}`,
    status: index % 2 === 0 ? "Active" : "Inactive",
  }));

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative space-y-2">
      <ProductSearch />
      <ProductTable
        tableContainerRef={tableContainerRef}
        paginatedData={paginatedData}
        handleViewDetails={handleViewDetails}
      />
      <ProductPagination
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
