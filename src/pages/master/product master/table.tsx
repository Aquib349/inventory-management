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
    <div className="overflow-hidden relative text-sm">
      <div
        ref={tableContainerRef}
        className="max-h-[calc(100vh-160px)] overflow-y-auto rounded-xl"
      >
        <table className="w-full border-collapse">
          <thead className="bg-gray-300 sticky top-0 z-10">
            <tr>
              <th className="p-2 border-r text-left">Sl. No</th>
              <th className="p-2 border-r text-left">Item Name</th>
              <th className="p-2 border-r text-left">Item Code</th>
              <th className="p-2 border-r text-left">Brand</th>
              <th className="p-2 border-r text-left">GST</th>
              <th className="p-2 border-r text-left">HSN Code</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {paginatedData.map((item: any) => (
              <tr key={item.id} className="odd:bg-gray-50 even:bg-gray-100">
                <td className="p-1.5 border-r">{item.id}</td>
                <td className="p-1.5 border-r">{item.itemName}</td>
                <td className="p-1.5 border-r">{item.itemCode}</td>
                <td className="p-1.5 border-r">{item.brand}</td>
                <td className="p-1.5 border-r">{item.gst}</td>
                <td className="p-1.5 border-r">{item.hsnCode}</td>
                <td className="p-1.5 ">
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
  );
};

export default ProductTable;
