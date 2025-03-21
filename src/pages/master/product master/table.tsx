import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ProductMasterProps {
  tableContainerRef: any;
  paginatedData: any;
  handleViewDetails: (item: any) => void;
}

const ProductTable = ({
  tableContainerRef,
  paginatedData,
  handleViewDetails,
}: ProductMasterProps) => {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <div className="overflow-hidden">
        <div className="w-full overflow-x-auto">
          <div
            ref={tableContainerRef}
            className="max-h-[calc(100vh-150px)] overflow-y-auto rounded-md text-sm"
          >
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-[#0e3473] text-white shadow-md z-10">
                <tr>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[100px]">
                    Sl. No
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[200px]">
                    Item Name
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[250px]">
                    Item Code
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[150px]">
                    Brand
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[150px]">
                    Product
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[200px]">
                    Product Type
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[100px]">
                    GST
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[120px]">
                    HSN Code
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[150px]">
                    Purchase Price
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[150px]">
                    Selling Price
                  </th>
                  <th className="py-2 border-r text-start font-medium px-4 min-w-[100px]">
                    MRP
                  </th>
                  <th className="py-2 text-start px-4 min-w-[150px]">Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {paginatedData.map((item: any, index: any) => (
                  <tr key={index} className="border-b">
                    <td className="py-1.5 px-4 text-sm border-r">
                      {index + 1}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.product}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.code}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.brand}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.categoryName}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.categoryType}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">{item.gst}</td>
                    <td className="py-1.5 px-4 text-sm border-r">{item.hsn}</td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.purchasePrice}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">
                      {item.sellingPrice}
                    </td>
                    <td className="py-1.5 px-4 text-sm border-r">{item.mrp}</td>
                    <td className="py-1.5 px-4 text-sm ">
                      <Button
                        variant="outline"
                        className="cursor-pointer text-xs flex items-center gap-1"
                        size="sm"
                        onClick={() => handleViewDetails(item)}
                      >
                        <Eye size={12} /> View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
